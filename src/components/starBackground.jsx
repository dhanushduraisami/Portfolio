import React, { useState, useEffect } from 'react';

export const StarBackground = () => {
    
    const [stars, setStars] = useState([]); 
    const [meteors,setmeteors] = useState([]);
    
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

        const numberOfStars = 5;

        const newMeteors = []; 
        for (let j = 0; j < numberOfStars; j++) { 
            newStars.push({
                ID: j, 
                
                size: Math.random() * 2 + 1,
               
                X: Math.random() * 100, 
                
                Y: Math.random() * 20, 
                
                opacity: Math.random() * 15, 
                
                animationDuration: Math.random() * 3 + 3, 
            });
        }
        setMeteors(newMeteors); 
    };

    
    const handleResize = () => {
          generateStars(); 
    };

    useEffect(() => {
        generateStars(); 
        //generateMeteors();

        window.addEventListener('resize', handleResize); 

        
         return () => {
             window.removeEventListener('resize', handleResize); 
         };
    }, []);
    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none z-0" 
        >
            {/* Map through the stars state to render each individual star */}
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
                        animationDelay: meteor.delay, 
                        animationDuration: `${meteor.animationDuration}s`, 
                    }}
                />
            ))}
        </div>
    );
};