import Image from 'next/image'
import React from 'react'
import AboutImage from '@public/images/about-image.png'
import { AnimationHoverButton, ButtonLabel } from '../components/buttons'

export const AboutFragment = () => {
    return (
        <div id='about' className='bg-[#F1F6FD] md:py-20 py-14'>
            <div className='container mx-auto md:px-0 px-4 grid md:grid-cols-2 grid-cols-1 gap-10 w-full justify-items-center'>
                <Image src={AboutImage} alt="about" width={600} height={470} className="h-72 md:h-[470px] object-cover" />
                <div className='w-full'>
                    <div className='flex flex-col gap-8 items-start justify-around w-full md:max-w-lg h-full'>
                        <div className='flex flex-col'>
                            <ButtonLabel label='ABOUT' className='text-primary bg-third/20 font-bold text-xs w-fit' />
                            <h2 className='text-3xl md:text-4xl font-semibold pt-4 text-fourth'>
                                {`Let's bring your property projects to life with complete peace of mind`}
                            </h2>
                            <p className='pt-5'>
                                {`At Dwell, we understand that real estate is much more than a transaction; it's a commitment of trust. We do everything possible to ensure our clients have a smooth, secure, and satisfying experience. This is why you can trust us to successfully carry out your property project.`}
                            </p>
                        </div>
                        <AnimationHoverButton className='!bg-[#2B3F7D] text-white'>Discover our properties</AnimationHoverButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
