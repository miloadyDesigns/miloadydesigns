import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'

const SideButton = ({ title, margin }) => {
    return (
        <div className={`flex head_btn ${margin ? 'ml-2' : 'ml-0'} xs:mt-0 lg:mt-4 space-x-4 items-center cursor-pointer`}>
            <h1
                className='font-poppins text-white font-normal cursor-pointer hover:text-red-500 transition-all xs:text-[12px] lg:text-[21px]'
                dangerouslySetInnerHTML={{ __html: title }} // Use this to render HTML
            />
            <div className='shadow__btn xs:p-2 lg:p-4 bg-black cursor-pointer'>
                <GrFormNextLink color='white' />
            </div>
        </div>
    )
}

export default SideButton
