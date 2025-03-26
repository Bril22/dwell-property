import React from 'react'
import { ButtonLabel } from '../components/buttons'
import { TeamCardComponent } from '../components/cards'
import { OurTeamCard } from '../constants/section'

export const TheTeamFragment = () => {
    return (
        <div id='the-team' className='bg-[#F1F6FD] md:py-20 py-14'>
            <div className='container flex flex-col md:gap-14 gap-8 mx-auto md:px-0 px-4 w-full'>
                <div>
                    <ButtonLabel label='THE TEAM' className='text-primary bg-third/20 font-bold text-xs w-fit' />
                    <h2 className='text-3xl md:text-4xl font-semibold pt-4 text-fourth'>
                        {`Meet our team of experts`}
                    </h2>
                </div>
                <TeamCardComponent datas={OurTeamCard} />
            </div>
        </div>
    )
}
