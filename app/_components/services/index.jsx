import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { GrFormNextLink } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"

import 'swiper/css';

const servicesData = [
    {
        title: "Graphic Design",
        subheading: "Designs that speak your brand’s language",
        description: "From logos that tell your brand's story to striking visuals that captivate, our graphic design services blend creativity with strategic insight. Each design is crafted to resonate, leaving an unforgettable impression that truly sets you apart.",
        image: "/galaxies/1.png",
    },
    {
        title: "Web Development",
        subheading: "Building seamless, responsive websites",
        description: "Our website development goes beyond aesthetics—we create immersive digital experiences designed to captivate and engage. We build dynamic, responsive websites that not only look stunning but deliver flawless functionality across any device.",
        image: "/galaxies/2.png"
    },
    {
        title: "Mobile Software Development",
        subheading: "Apps that connect businesses and customers",
        description: "With mobile apps leading the way in user engagement, we develop powerful, user-centric apps that bring your business closer to customers. From concept to launch, our team ensures a smooth, intuitive, and reliable experience.",
        image: "/galaxies/3.png"
    },
    {
        title: "Social Media Marketing",
        subheading: "Growing your brand's digital presence",
        description: "In the vast world of social media, we make your brand stand out with targeted strategies that foster engagement and build lasting connections. Our approach turns likes into loyalty, positioning your brand as a trusted digital voice.",
        image: "/galaxies/4.png"
    },
    {
        title: "Search Engine Optimization",
        subheading: "Maximizing your online visibility",
        description: "We elevate your online presence with expert SEO techniques. From in-depth keyword research to on-page optimization, our team helps you rank higher, attract organic traffic, and connect with the audience actively searching for what you offer.",
        image: "/galaxies/5.png"
    },
    {
        title: "Video Animations",
        subheading: "Transforming ideas into captivating visuals",
        description: "Our video animation services turn complex concepts into captivating visuals, delivering your message in a way that’s both entertaining and informative. Through creativity and technical expertise, we bring movement to your ideas, making them unforgettable.",
        image: "/galaxies/7.png"
    },
    {
        title: "Pay Per Click",
        subheading: "Maximizing Clicks, Minimizing Costs",
        description: "Our PPC campaigns make every dollar count by reaching the right audience at the right time. Our data-driven approach ensures that you not only get more clicks but also maximize ROI, effectively boosting your brand’s visibility.",
        image: "/galaxies/6.png"
    }
];


const ServiceCard = ({ title, description, image, subheading }) => (
    <div className='h-full flex xs:flex-col lg:flex-row xs:space-y-2 lg:space-x-16  xs:items-center lg:ml-[10%]'>
        <div className='lg:w-[50%] xs:w-[90%]'>
            <div className='flex flex-col justify-center h-full'>
                <div className='bg-[#1B1D21] text-[#F87171] xs:w-[90%] lg:w-[140px] p-4 text-center rounded-lg ml-4 xs:text-[14px] lg:text-[16px] xs:mt-3 lg:mt-0'>Service</div>
                <h1 className='text-white ml-4 xs:text-[25px] font-bold lg:text-[60px]'>{title}</h1>
                <p className='text-white ml-4 font-text xs:text-[14px] lg:text-xl lg:w-[80%]'>{description}</p>
                {/* <div className='flex ml-4 mt-4 space-x-2 items-center xs:hidden lg:flex'>
                    <h1 className='font-text text-white cursor-pointer'>L E A R N &nbsp; M O R E</h1>
                    <div className='bg-[#1B1D21] p-2 rounded-full cursor-pointer'>
                        <GrFormNextLink color='white' />
                    </div>
                </div> */}
            </div>
        </div>
        <div className='w-[90%] xs:block lg:hidden flex-col items-center justify-center'>

            <div className='flex ml-4 mt-4 space-x-2 items-center xs:flex lg:hidden'>
                <h1 className='font-text text-white cursor-pointer'>L E A R N &nbsp; M O R E</h1>
                <div className='bg-[#1B1D21] p-2 rounded-full cursor-pointer'>
                    <GrFormNextLink color='white' />
                </div>
            </div>
            <Image
                className='mx-auto xs:mt-5 lg:mt-0'
                src={image}
                width={300}
                height={300}
                alt={title}
            />
        </div>

        <div className='w-[50%] xs:hidden lg:block flex justify-center items-center'>
            <Image
                className='w-full h-auto lg:w-[600px] xs:w-full'
                src={image}
                width={600}
                height={400}
                alt={title}
            />
        </div>
    </div>
);

const Services = () => {

    return (
        <Swiper
            className='h-full'
            spaceBetween={50}
            slidesPerView={1}
            loop={true} // Enable infinite loop
            autoplay={{
                delay: 0.4, // No delay for continuous scrolling
                // Speed of scrolling
                disableOnInteraction: false,// Prevent autoplay from disabling on interaction
            }}
            speed={5000}
            modules={[Autoplay]}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1, // Slightly more on medium screens
                },
                1024: {
                    slidesPerView: 1, // More on larger screens
                },
            }}

        >
            {servicesData.map((service, index) => (
                <SwiperSlide key={index}>
                    <ServiceCard
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        subheading={service.subheading}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Services;
