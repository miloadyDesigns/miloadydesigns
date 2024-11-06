import Image from 'next/image';
import React from 'react';
import ReactStars from 'react-stars';

const Testimonials = ({ gradient1, gradient2, name, stars, image, description, designation }) => {
    return (
        <div
            className='border border-slate-600 relative xs:w-[95%] lg:w-[75%] lg:h-[500px] xs:h-[360px] rounded-lg  shadow-black px-4 lg:mx-2 '
            style={{
                background: `linear-gradient(to top right, ${gradient2}, ${gradient1})`,
            }}
        >
            <div className='opacity-40 absolute right-0 top-0'>
                <Image src={image} width={150} height={150} />
            </div>
            <div className='w-auto xs:mt-12 lg:mt-20 text-white xs:text-[14px] lg:text-xl font-text font-bold '>
                <p>
                    {description.split(' ').slice(0, 10).join(' ')} <span className='text-white font-sans text-md font-thin'>{' ' + description.split(' ').slice(10).join(' ')}</span>
                </p>
                <div className='mt-6'>
                    <ReactStars
                        className='space-x-2'
                        count={stars}
                        size={15}
                        half={true}
                        color1={'gold'}
                        value={stars} // Use passed stars prop
                        edit={false}
                    />
                    <h1 className='mt-4 ml-2 text-[32px] font-thin'>{name}, <span className='text-[22px]'>{designation}</span></h1>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
