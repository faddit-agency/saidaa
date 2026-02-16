import React from 'react';
import { motion } from 'framer-motion';

const newsItems = [
    {
        id: 1,
        date: '2024.02.15',
        title: 'SAIDAA wins first prize in international competition for Seoul Cultural Center',
        category: 'AWARDS',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop'
    },
    {
        id: 2,
        date: '2024.01.20',
        title: 'New research paper on sustainable urban materials published in Architecture Today',
        category: 'RESEARCH',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        date: '2023.12.05',
        title: 'Our team is expanding: multiple positions open for junior and senior architects',
        category: 'CAREERS',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
    }
];

const News = () => {
    return (
        <div className="container mx-auto pt-4 pb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-tight">NEWS</h1>

                <div className="space-y-12">
                    {newsItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col md:flex-row gap-8 border-b border-border pb-12 cursor-pointer"
                        >
                            <div className="w-full md:w-1/3 aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-2/3 flex flex-col justify-between py-2">
                                <div>
                                    <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-muted-foreground mb-4">
                                        <span>{item.date}</span>
                                        <span className="text-green-600">{item.category}</span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-green-600 transition-colors">
                                        {item.title}
                                    </h2>
                                </div>
                                <div className="mt-8">
                                    <span className="text-xs font-bold uppercase tracking-widest border-b border-foreground pb-1">Read More</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default News;
