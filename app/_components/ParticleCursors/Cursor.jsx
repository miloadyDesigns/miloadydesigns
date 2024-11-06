'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LightShadowCursor({ isActive }) {
    const mouse = useRef({ x: 0, y: 0 });
    const delayedMouse = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);
    const circle = useRef();
    const size = isActive ? 250 : 30;

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.current = {
            x: clientX,
            y: clientY
        };
    };

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        };

        moveCircle(delayedMouse.current.x, delayedMouse.current.y);

        rafId.current = window.requestAnimationFrame(animate);
    };

    const moveCircle = (x, y) => {
        gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
    };

    useEffect(() => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafId.current);
        };
    }, [isActive]);

    return (
        <div className='relative h-screen'>
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.65)', // Solid white
                    // Light white color
                    width: size,
                    height: size,
                    filter: `blur(${isActive ? 80 : 5}px)`, // Increased blur for shadow effect
                    boxShadow: isActive ? '0 0 50px rgba(255, 255, 255, 0.6)' : 'none', // Add shadow effect when active
                    transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out`
                }}
                className='top-0 left-0 fixed rounded-full pointer-events-none'
                ref={circle}
            />
        </div>
    );
}
