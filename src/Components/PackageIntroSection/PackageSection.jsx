import React from 'react'
import PackageCard from '../PackageCard/PackageCard'
import { Slide, Fade } from 'react-awesome-reveal'
import { cardData } from './cardData'

const PackageSection = () => {
    // console.log(cardData, "=====>>>> card data")
    return (
        <div className='lg:p-[60px] bg-[#097969] py-[20px]'>
            <h1 className='font-bold text-[36px] text-center my-[20px] text-white'>LET'S HAVE A LOOK AT WHAT GOES INTO ACCELERATING THE <span className='text-[#FDDA0D]'>BUSINESS GROWTH</span> OF OUR CLIENTS</h1>
            <div className='flex gap-[10px] justify-evenly flex-col lg:flex-row sm:items-center'>
                <Fade direction='up' triggerOnce cascade damping={0.4}>
                    <PackageCard data={cardData[0]} />
                    <PackageCard data={cardData[1]} />
                    <PackageCard data={cardData[2]} />
                </Fade>
            </div>
        </div>
    )
}

export default PackageSection