import React, { useState, useEffect } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                ID: i,
                size: Math.random() * 3 + 1,
                X: Math.random() * 100,
                Y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 5;
        const newMeteors = [];
        for (let j = 0; j < numberOfMeteors; j++) {
            newMeteors.push({
                ID: j,
                size: Math.random() * 2 + 1,
                X: Math.random() * 100,
                Y: Math.random() * 20,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 3 + 3,
                delay: Math.random() * 10, // Add random delay for animation
            });
        }
        setMeteors(newMeteors);
    };

    const handleResize = () => {
        generateStars();
    };

    useEffect(() => {
        generateStars();
        generateMeteors();

        window.addEventListener('resize', handleResize);

        // Refresh every 10 seconds
        const interval = setInterval(() => {
            generateStars();
            generateMeteors();
        }, 10000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.ID}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.X}%`,
                        top: `${star.Y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.ID}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size}px`,
                        height: `${meteor.size}px`,
                        left: `${meteor.X}%`,
                        top: `${meteor.Y}%`,
                        opacity: meteor.opacity,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
};