'use client';
import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import Link from 'next/link';
import DropDown from './DropDown';
import "./header.scss"
import Image from 'next/image';
import "../../globals.css";
import { useEffect, useState } from 'react';
import { useHeaderVisibility } from '@/context/HeaderVisibilityProvider ';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Dialog from '../Dialog/Dialog';

const designData = [
    {
        id: 1,
        name: "Graphic Designing",
        description: "The most import thing in business online is your website presence."

    },
    {
        id: 2,
        name: "Video Designing",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero, expedita dicta sint beatae adipisci!"

    },
    {
        id: 3,
        name: "Graphic Designing",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero, expedita dicta sint beatae adipisci!"

    }
]
const Header = ({ variant }) => {
    const { isVisible } = useHeaderVisibility()
    const [isSticky, setIsSticky] = useState(false);
    const phoneNumber = "(512) 240-9522";
    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`h-[10vh] cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`} style={{ display: isVisible ? 'none' : 'block' }}>
                <div className='flex xs:hidden lg:flex flex-row h-full space-x-24 p-4 '>
                    <div className='lg:w-[20%] xs:w-[90%] h-full flex items-center justify-center'>
                        <Link href={"/"}>
                            <Image
                                className='w-full h-auto mt-6'
                                src="/imp/mldLogo.png"
                                width={100}
                                height={100}
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    <div className='absolute right-[15%]'>
                        <ul className='flex flex-row space-x-8  h-full text-md text-white items-center'>
                            {/* <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] hidden'>A b o u t</Link></li>
                            <li><DropDown service={"D e s i g n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"D e v e l o p m e n t"} nestedServcies={designData} /></li>
                            <li><DropDown service={"M a r k e t i n g"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A n i m a t i o n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A I"} nestedServcies={designData} /></li>
                            <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] hidden'>C o n t a c t</Link></li> */}
                            <li> <div className='shadow__btn bg-black cursor-pointer' onClick={handleCallClick}>
                                <IoIosCall color='white' size={25} />
                            </div></li>
                            <li> <div className='shadow__btn bg-black cursor-pointer'>
                                <Dialog />

                            </div></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className='lg:hidden xs:block cs-sticky_header m-4' style={{ display: isVisible ? 'none' : 'block' }}>
                <Image
                    className='lg:hidden xs:block'
                    src="/imp/mldLogo.png"
                    width={80}
                    height={80}
                    alt="Logo"

                />
                <div className='lg:hidden xs:block absolute top-0 right-6'>
                    <ul className='flex flex-row space-x-5  h-full text-md text-white items-center'>
                        {/* <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] hidden'>A b o u t</Link></li>
                            <li><DropDown service={"D e s i g n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"D e v e l o p m e n t"} nestedServcies={designData} /></li>
                            <li><DropDown service={"M a r k e t i n g"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A n i m a t i o n"} nestedServcies={designData} /></li>
                            <li><DropDown service={"A I"} nestedServcies={designData} /></li>
                            <li><Link href="/about" className='font-myfont uppercase [word-spacing:2px] hidden'>C o n t a c t</Link></li> */}
                        <li> <div className='shadow__btn p-3 bg-black cursor-pointer' onClick={handleCallClick}>
                            <IoIosCall color='white' size={18} />
                        </div></li>
                        <li> <div className='shadow__btn p-2 bg-black cursor-pointer'>
                            <Dialog />
                        </div></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
