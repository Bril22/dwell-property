import React from 'react'
import { ButtonLabel } from '../components/buttons'
import { Icons } from '../components/icons'
import { IconNames } from '../components/icons/interface'
import { PropertyTypes } from '../constants/section'

export const OurPropertiesFragment = () => {
    return (
        <div id='our-properties' className=' md:py-20 py-14'>
            <div className='container flex flex-col md:gap-14 gap-8 mx-auto md:px-0 px-4 w-full'>
                <div>
                    <ButtonLabel label='OUR PROPERTIES' className='text-primary bg-third/20 font-bold text-xs w-fit' />
                    <h2 className='text-3xl md:text-4xl font-semibold pt-4 text-fourth'>
                        {`Types of properties`}
                    </h2>
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                    {PropertyTypes?.map((item, i) => (
                        <div key={i} className='md:p-8 p-5 flex items-center justify-between bg-[#F1F6FD] cursor-pointer hover:scale-[102%]'>
                            <div className='flex gap-5 items-center'>
                                <div className='rounded-full p-5 bg-[#DFEBFA]'>
                                    <Icons name={item.iconName} size={27} className='md:w-8 md:h-8 w-6 h-6' />
                                </div>
                                <p className='text-primary text-2xl md:text-3xl font-semibold'>{item.label}</p>
                            </div>
                            <div className='p-5'>
                                <Icons name={IconNames['arrow-top-right']} size={16} className='md:w-4 md:h-4 w-3 h-3' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
