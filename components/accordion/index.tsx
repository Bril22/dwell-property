'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icons } from '../icons';
import { IconNames } from '../icons/interface';
import { motion, AnimatePresence } from 'framer-motion'
import { AccordionItem } from '../../types/accordion';

export const Accordion = ({
    data
}: {
    data: AccordionItem[]
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    const toggleAccordion = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full">
            {data.map((item) => (
                <div key={item.id} className={`border-b-2 ${openIndex === item.id ? "border-third" : "border-[#DFEBFA]"} `}>
                    <button
                        onClick={() => toggleAccordion(item.id)}
                        className={`w-full md:px-10 md:py-10 py-8 flex lg:flex-row flex-col ${openIndex === item.id ? "items-start" : "items-center"} justify-between gap-8 text-left cursor-pointer`}
                    >
                        <div className='w-full flex md:gap-20 gap-4 items-center md:items-start'>
                            <div className='md:pt-2 md:pr-6 pr-2'>
                                <span className={`text-xs font-bold ${openIndex === item.id ? "text-[#475569]" : "text-[#CBD5E1]"}`}>{item.id < 10 ? `0${item.id}` : item.id}</span>
                            </div>
                            <span className={`flex-1 text-2xl font-medium ${openIndex === item.id ? 'text-primary' : 'text-[#94A3B8]'}`}>{item.title}</span>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={openIndex === item.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden lg:block hidden"
                            >
                                <div className="flex gap-8 lg:max-w-3xl">
                                    {item.image && (
                                        <Image src={item.image} alt={item.title} width={400} height={400} className="w-60 h-60 rounded-md object-cover" />
                                    )}
                                    <p className="text-[#334155] text-sm">{item.content}</p>
                                </div>
                            </motion.div>
                            {openIndex === item.id ? (
                                <div className='bg-fifth p-2 rounded-full'>
                                    <Icons name={IconNames['arrow-right']} size={24} className="text-white -rotate-90" />
                                </div>
                            ) : (
                                <div className='bg-fifth p-2 rounded-full'>
                                    <Icons name={IconNames['arrow-left']} className="text-white -rotate-90" />
                                </div>
                            )}
                        </div>
                        <AnimatePresence>
                            {openIndex === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden lg:hidden"
                                >
                                    <div className="flex flex-col gap-8 py-4">
                                        {item.image && (
                                            <Image src={item.image} alt={item.title} width={400} height={400} className="w-full h-50 rounded-md object-cover" />
                                        )}
                                        <p className="text-[#334155] text-sm">{item.content}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            ))}
        </div>
    );
}
