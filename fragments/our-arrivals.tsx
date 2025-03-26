import React from 'react'
import { AnimationHoverButton, ButtonLabel } from '../components/buttons'
import { EmblaListPropertyCard } from '../components/embla'
import { PropertyCardDatas } from '../constants/section'

export const OurArrivalsFragment = () => {
    return (
        <div id='our-arrivals' className='md:py-20 py-14'>
            <div className='flex flex-col md:gap-14 gap-8 md:px-0 w-full'>
                <div className='container mx-auto px-4 w-full flex md:flex-row flex-col md:items-center justify-between'>
                    <div>
                        <ButtonLabel label='OUR NEW ARRIVALS' className='text-primary bg-third/20 font-bold text-xs w-fit' />
                        <h2 className='text-3xl md:text-4xl font-semibold pt-4 text-fourth'>
                            {`Discover our new arrivals`}
                        </h2>
                    </div>
                    <AnimationHoverButton dotColor='bg-primary' className='!bg-white !text-primary border border-[#C6DBF7] w-fit hidden md:block'>Discover our properties</AnimationHoverButton>
                </div>
                <EmblaListPropertyCard datas={PropertyCardDatas} />
                <div className='md:hidden flex w-full items-center justify-center md:px-0 px-4'>
                    <AnimationHoverButton dotColor='bg-primary' className='!bg-white !text-primary border border-[#C6DBF7] w-fit'>Discover our properties</AnimationHoverButton>
                </div>
            </div>
        </div>
    )
}
