import Image from 'next/image';
import React, { useRef } from 'react';
import { GrFormNextLink } from 'react-icons/gr';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = ({ data }) => {
    const sliderRef = useRef(null);
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 100,
        cssEase: "linear",
        // dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0',
                },
            },
        ],
    };

    return (
        <div className='h-full p-2 '>
            <Slider ref={sliderRef} {...settings}>
                {data.map((iteme, index) => (
                    <div key={index} className='lg:px-4 xs:px-2 rounded-lg'>
                        <div className='relative  xs:w-[100%] lg:w-[100%] rounded-lg border border-gray-500 '>
                            <div className='bg-black bg-opacity-40 backdrop-blur-2xl rounded-lg w-full h-full shadow-md'>
                                <div className="xs:hidden lg:block ">
                                    <Image
                                        src={iteme.image}
                                        width={400}
                                        height={400}
                                        className='object-cover w-full h-full rounded-lg'
                                        alt="Portfolio Image"
                                    />
                                </div>
                                <div className="xs:block lg:hidden ">
                                    <Image
                                        src={iteme.image}
                                        width={400}
                                        height={400}
                                        className='object-contain w-full h-full  rounded-lg'
                                        alt="Portfolio Image"
                                    />
                                </div>
                                <div className='p-2'>
                                    <h1 className='text-white xs:text-2xl lg:text-3xl p-2 font-poppins font-bold'>{iteme.title}</h1>
                                    {/* <p className='text-gray-300 font-text pl-2'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia porro alias autem nemo ipsam tenetur excepturi omnis, inventore, consequuntur!
                                    </p> */}
                                    <div className='flex ml-4 mt-4 space-x-2 items-center'>
                                        {/* <h1 className='font-text text-white cursor-pointer hover:text-red-500 transition-all'>
                                            L E A R N &nbsp; M O R E
                                        </h1> */}
                                        {/* <div className='bg-[#1B1D21] p-2 rounded-full cursor-pointer'>
                                            <GrFormNextLink color='white' />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Portfolio;
