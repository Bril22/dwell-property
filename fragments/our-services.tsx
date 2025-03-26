import React from 'react'
import { ButtonLabel } from '../components/buttons'
import { Accordion } from '../components/accordion'
import { AccordionDatas } from '../constants/section'

export const OurServicesFragment = () => {
    return (
        <div id='our-services' className=' md:py-20 py-14'>
            <div className='container flex flex-col md:gap-14 gap-8 mx-auto md:px-0 px-4 w-full'>
                <div>
                    <ButtonLabel label='OUR SERVICES' className='text-primary bg-third/20 font-bold text-xs w-fit' />
                    <h2 className='text-3xl md:text-4xl font-semibold pt-4 text-fourth md:max-w-md'>
                        {`Real estate services tailored to every need`}
                    </h2>
                </div>
                <Accordion data={AccordionDatas} />
            </div>
        </div>
    )
}
