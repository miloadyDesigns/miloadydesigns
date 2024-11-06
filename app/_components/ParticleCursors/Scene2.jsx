'use client';
import React from 'react'
import Cursor from "./Cursor";
import { useState } from 'react';

export default function Scene2({ children }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} >{children}</div>
            <Cursor isActive={isActive} />
        </div>
    )
}