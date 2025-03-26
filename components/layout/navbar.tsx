'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IMainMenu, INavbar } from '../../types/layout';
import { Icons } from '../icons';
import { IconNames } from '../icons/interface';
import { AnimationHoverButton } from '../buttons';

function NavBar({
    menu,
    logo
}: INavbar) {
    const [navbar, setNavbar] = useState(false);
    const [menus, setMenu] = useState<IMainMenu[]>([]);
    const [show, setShow] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');

    const controlNavbar = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollY && currentScroll > 60) {
            setShow(false);
        }
        else if (currentScroll < lastScrollY) {
            setShow(true);
        }

        setLastScrollY(currentScroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll === 0) {
                setNavbarBg('bg-transparent');
            } else if (currentScroll > 0 && currentScroll < 60) {
                setNavbarBg('bg-fifth');
            } else {
                setNavbarBg('bg-fifth');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setMenu(menu);
    }, [menu]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement | HTMLButtonElement>, href: string) => {
        e.preventDefault();
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = href;
        }
    };

    return (
        <>
            <nav className={
                `fixed w-full flex items-center top-0 left-0 right-0 z-50 h-30 py-8 ${show ? `opacity-100 translate-y-0 ${navbarBg}` : 'opacity-0 -translate-y-full'} transition-all duration-600 ease-in-out`
            }>
                <div className="md:flex justify-between px-6 container mx-auto md:items-center">
                    <div className='flex gap-14'>
                        <div className="flex items-center justify-between md:block md:w-auto w-full">
                            <Link href="#home" onClick={(e) => handleScroll(e, '#home')}>
                                <Image alt="logo" src={logo} width={95} height={45} className="" />
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 rounded-full outline-none bg-fifth relative z-50"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    <AnimatePresence mode="wait">
                                        {navbar ? (
                                            <motion.div
                                                key="close"
                                                initial={{ opacity: 0, rotate: -90 }}
                                                animate={{ opacity: 1, rotate: 0 }}
                                                exit={{ opacity: 0, rotate: 90 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Icons name={IconNames.close} size={30} className="text-white" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ opacity: 0, rotate: 90 }}
                                                animate={{ opacity: 1, rotate: 0 }}
                                                exit={{ opacity: 0, rotate: -90 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Icons name={IconNames["3-line-menu"]} size={30} className="text-white" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        </div>
                        <div
                            className={`md:flex justify-end items-center hidden`}
                        >
                            <ul className="h-auto items-center justify-center flex ">
                                {menus?.map((item, i) => {
                                    return (
                                        <li key={i} className={`text-sm font-bold text-white py-2 px-2 lg:px-6 text-center hover:text-fourth uppercase tracking-wide`}>
                                            <Link href={item?.href} onClick={(e) => handleScroll(e, item.href)}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    );

                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='md:block hidden' onClick={(e) => handleScroll(e, '#footer')}>
                        <AnimationHoverButton className='text-white'>Contact Us</AnimationHoverButton>
                    </div>


                </div>
                <AnimatePresence>
                    {navbar && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black backdrop-blur-3xl z-10 h-screen"
                                onClick={() => setNavbar(false)}
                            />
                            <motion.div
                                initial={{ opacity: 0, clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)" }}
                                animate={{ opacity: 1, clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)" }}
                                exit={{ opacity: 0, clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="fixed w-3/4 right-4 top-6 pb-3 bg-fifth z-40 rounded-2xl"
                            >
                                <ul className="h-fit w-full flex flex-col items-center justify-start py-8 gap-4 md:hidden">
                                    {menus?.map((item, i) => (
                                        <li key={i} className={`text-sm text-white py-2 px-6 text-center hover:text-fourth tracking-wide uppercase font-bold`}>
                                            <Link href={item?.href} onClick={(e) => handleScroll(e, item.href)}>
                                                {item.label}
                                            </Link>

                                        </li>
                                    ))}
                                    <AnimationHoverButton onClick={(e) => handleScroll(e, '#footer')} className='text-white text-sm'>Contact Us</AnimationHoverButton>
                                </ul>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}

export default NavBar;
