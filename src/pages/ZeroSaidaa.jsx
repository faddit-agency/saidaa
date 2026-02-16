import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Zero-Saidaa Items Data
const zeroItems = [
    { id: 1, title: 'GRUNDSCHULE KRAMPNITZ', category: 'Research', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'STADTWIRTSCHAFT CHEMNITZ', category: 'Consulting', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop' },
    { id: 3, title: 'HORSAALZENTRUM UNIVERSITAT HAMBURG-SCIENCE CITY', subtitle: '2. PREIS', category: 'Experiment', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, title: 'NEUBAU BUNDESMINISTERIUM', subtitle: '1.PREIS', category: 'Research', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop' },
    { id: 5, title: 'GRUNDSCHULE KRAMPNITZ', category: 'Consulting', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop' },
    { id: 6, title: 'STADTWIRTSCHAFT CHEMNITZ', category: 'Experiment', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop' },
    { id: 7, title: 'HORSAALZENTRUM UNIVERSITAT HAMBURG-SCIENCE CITY', subtitle: '2. PREIS', category: 'Research', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop' },
    { id: 8, title: 'NEUBAU BUNDESMINISTERIUM', subtitle: '1.PREIS', category: 'Consulting', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop' },
];

const categories = ['ALL', 'Research', 'Consulting', 'Experiment'];

const ZeroSaidaa = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');

    const filteredItems = activeCategory === 'ALL'
        ? zeroItems
        : zeroItems.filter(item => item.category === activeCategory);

    return (
        <div className="container mx-auto pt-4 pb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-end gap-6 mb-12 text-sm uppercase tracking-wide">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            'hover:text-foreground transition-colors',
                            activeCategory === cat ? 'font-bold text-foreground underline decoration-2 underline-offset-4' : 'text-muted-foreground'
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {filteredItems.map((item) => (
                    <Link to={`/zero-saidaa/${item.id}`} key={item.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-bold text-sm uppercase leading-tight tracking-tight">
                                {item.title}
                            </h3>
                            {item.subtitle && (
                                <p className="text-xs text-muted-foreground mt-1 uppercase">
                                    {item.subtitle}
                                </p>
                            )}
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ZeroSaidaa;
