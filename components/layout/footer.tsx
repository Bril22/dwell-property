'use client'
import Image from "next/image";
import { IFooter } from "../../types/layout";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "../icons";
import { IconNames } from "../icons/interface";

export default function Footer({
    logo,
    datas
}: IFooter) {
    const [email, setEmail] = useState<string>("");
    const [accepted, setAccepted] = useState<boolean>(false);
    return (
        <div id="footer" className="bg-fourth md:pt-20 pt-14">
            <div className="container mx-auto flex flex-col gap-10 md:gap-20 px-6">
                <div className="flex flex-col gap-14 items-start md:justify-start justify-center w-full">
                    <Link className="w-full flex items-center md:justify-start justify-center" href="/">
                        <Image alt="logo" src={logo} width={95} height={45} className="" />
                    </Link>
                    <div className="w-full flex md:flex-row flex-col gap-14 items-center md:justify-between">
                        <div className="flex flex-col gap-5">
                            <p className="text-2xl text-white md:max-w-md">Stay informed about the <br className="md:hidden"/><span className="text-[#3C6AD4]">latest property opportunities</span></p>
                            <form className="flex flex-col gap-4">
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="benoitmacke@car"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full rounded-full bg-gray-100 px-6 py-4 pr-12 text-fourth placeholder-[#94A3B8] focus:outline-none"
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C6DBF7] p-3 rounded-full cursor-pointer" aria-label="button-submit">
                                        <Icons name={IconNames["arrow-top-right"]} size={12} className="rotate-45" />
                                    </button>
                                </div>
                                <label className="flex items-center text-white text-sm cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={accepted}
                                        required
                                        onChange={() => setAccepted(!accepted)}
                                        className="mr-2 accent-third"
                                    />
                                    {`I accept the privacy policy*.`}
                                </label>
                            </form>
                        </div>
                        <div className="flex lg:flex-row flex-col-reverse md:items-start items-center gap-10 lg:gap-40">
                            <div className="flex flex-col gap-3 md:items-start items-center">
                                <div className="flex gap-2 items-center ">
                                    <Icons name={IconNames.address} size={16} className="text-third" />
                                    <Link href={`http://maps.google.com/maps?q=${datas.address}`} className="text-white hover:text-third">{datas.address}</Link>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Icons name={IconNames.phone} size={16} className="text-third" />
                                    <Link href={`tel:${datas.phone}`} className="text-white hover:text-third">{datas.phone}</Link>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Icons name={IconNames.email} size={16} className="text-third" />
                                    <Link href={`mailto:${datas.email}`} className="text-white hover:text-third">{datas.email}</Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 md:pr-14 md:text-start text-center">
                                {datas?.links?.map((item, i) => (
                                    <Link key={i} href={item.href} className="text-white hover:text-third">{item.label}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 flex md:flex-row flex-col-reverse gap-5 items-center justify-between">
                    <div className="flex gap-3">
                        <div className="flex gap-2">
                            {datas.socialMedia?.map((item, i) => (
                                <Link key={i} href={item.link} aria-label={`${item.label}`}><Icons name={item.icon} size={14} /></Link>
                            ))}
                        </div>
                        <p className="text-xs text-[#F1F5F9]">{`Eazyclick ©2024, all rights reserved`}</p>
                    </div>
                    <div className="flex gap-3">
                        {datas?.termsLinks?.map((item, i) => (
                            <Link key={i} href={item.href} className="text-white hover:text-third text-xs">{item.label}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}