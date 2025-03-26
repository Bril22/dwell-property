'use client'
import React from 'react'
import Image from 'next/image';
import { Icons } from '../icons';
import { formattedPrice } from '../../lib/utils';
import { IPropertyCard } from '../../types/propertyCard';
import Link from 'next/link';
import { ButtonLabel } from '../buttons';
import { IconNames } from '../icons/interface';
import { ITeamsCard } from '../../types/ourTeamCard';
import { motion } from 'framer-motion'

export const BannerCardComponent = ({
    datas
}: {
    datas: {
        title: string;
        description: string;
    }[]
}) => {
    return (
        <>
            {datas?.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="border-t border-white/20 flex flex-col gap-3 pt-5 max-w-96 flex-shrink-0"
                >
                    <p className="text-2xl font-medium">
                        {item.title}
                    </p>
                    <p className="text-base">{item.description}</p>
                </motion.div>
            ))}
        </>
    )
}

interface PropertyCardComponentProps {
    datas?: IPropertyCard[];
}

export const PropertyCardComponent = ({
    datas,
}: PropertyCardComponentProps) => {
    return (
        <>
            {datas?.map((item, i) => {
                return (
                    <div key={i} className="flex-none max-w-xs md:max-w-[617px]">
                        <div className={`grid grid-cols-1 gap-6 bg-white w-full`}>
                            <Link href={"#"} className="relative overflow-hidden group">
                                <Image
                                    src={item?.image}
                                    alt={`${item?.headline}`}
                                    width={500}
                                    height={400}
                                    className="object-cover rounded-md w-full h-80 md:h-96 transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[#1E284D]/0 from-40% to-[#1E284D] pointer-events-none" />
                                <ButtonLabel label={item.type} className='absolute top-4 left-4 text-white bg-white/20 font-bold text-xs w-fit z-10' />
                                <Image src={item?.logo} alt={`logo-${item?.headline}`} width={100} height={100} className='absolute top-4 right-4' />
                                <div className='w-full flex md:flex-row flex-col gap-6 md:items-center items-start md:justify-between absolute bottom-0 px-6 py-4 z-10'>
                                    <div className="p-2 text-white text-2xl font-semibold flex flex-col gap-2">
                                        <p className='text-xs font-bold text-[#C6DBF7]'>PRICE</p>
                                        <span>
                                            {formattedPrice(item.currency, item.price)} {item.pricePer ? `${item.pricePer}` : null}
                                        </span>
                                    </div>
                                    <div className='grid grid-cols-3 gap-6 divide-x divide-white/20'>
                                        <div className='flex flex-col gap-2 space-x-6'>
                                            <p className='text-xs font-bold text-[#C6DBF7]'>AREA</p>
                                            <p className='font-medium text-white'>{item.area}m²</p>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-xs font-bold text-[#C6DBF7]'>BEDROOMS</p>
                                            <p className='font-medium text-white'>{item.bedrooms}</p>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-xs font-bold text-[#C6DBF7]'>BATHROOMS</p>
                                            <p className='font-medium text-white'>{item.bathrooms}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className='px-6'>
                                <p className='text-fifth text-xs font-bold'>{item.type}</p>
                                <h2 className="text-2xl font-semibold">{item?.headline}</h2>
                            </div>
                            <div className='flex gap-2 px-6'>
                                <Icons name={IconNames.address} size={24} className='text-primary' />
                                <p className="font-medium text-primary">{item?.address}</p>
                            </div>
                        </div>
                    </div>
                )

            }
            )}
        </>
    )
}

interface ITeamCardComponent {
    datas: ITeamsCard[]
}

export const TeamCardComponent = ({
    datas
}: ITeamCardComponent) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {datas?.map((item, i) => (
                <div key={i} className='flex flex-col md:gap-7 gap-5 items-center justify-between'>
                    <Image src={item.image} alt={item.name} width={500} height={500} className='object-cover w-full md:h-full h-64 rounded-md' />
                    <div className='flex flex-col gap-2 w-full'>
                        <span className='text-fourth text-2xl font-medium'>{item.name}</span>
                        <span className='text-[#3C6AD4] uppercase text-xs font-bold'>{item.role}</span>
                    </div>
                    <Link href={`mailto:${item.email}`} className='flex gap-2 w-full'>
                        <Icons name={IconNames.email} size={24} className='md:w-6 w-4 text-fifth' />
                        <span className='text-[#334155] hover:text-primary'>{item.email}</span>
                    </Link>
                </div>
            ))}
        </div>
    )
}
