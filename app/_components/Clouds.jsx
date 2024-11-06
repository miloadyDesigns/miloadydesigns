import { Cloud } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export const Clouds = () => {
    const [clouds, setClouds] = useState([]);

    useEffect(() => {
        const newClouds = [];
        for (let i = 0; i < 4; i++) { // Change the number to control how many clouds you want
            newClouds.push({
                position: [
                    (Math.random() - 0.5) * 10, // Random X position
                    -1,                          // Start below the visible area
                    (Math.random() - 0.5) * 10   // Random Z position
                ],
                speed: Math.random() * 0.02 + 0.01, // Random upward speed
            });
        }
        setClouds(newClouds);
    }, []);

    // Animate clouds moving upwards
    useFrame(() => {
        setClouds(prevClouds =>
            prevClouds.map(cloud => ({
                ...cloud,
                position: [cloud.position[0], cloud.position[1] + cloud.speed, cloud.position[2]]
            }))
        );
    });

    return (
        <>
            {clouds.map((cloud, index) => (
                <Cloud
                    key={index}
                    position={cloud.position}
                    scale={clouds.scale}
                    fade={2}
                    speed={0.4}
                    opacity={0.09}
                />
            ))}
        </>
    );
};
