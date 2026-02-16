import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen overflow-hidden">
            {/* Carousel Background Images - Slide from right to left */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={images[currentIndex]}
                        alt="Architecture"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </motion.div>
            </AnimatePresence>

            {/* Vertical SAIDAA Text - Rotated 180 degrees, fills viewport height */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute left-0 top-0 h-full hidden md:flex items-center z-10"
            >
                <img
                    src="/logo-white.png"
                    alt="SAIDAA"
                    className="h-[15vh] lg:h-[25vh] xl:h-[30vh] object-contain"
                    style={{
                        transform: 'rotate(180deg)',
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Home;
