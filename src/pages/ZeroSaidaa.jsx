import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Expanded Zero-Saidaa Items Data (20 items)
const zeroItems = [
    { id: 1, title: 'GRUNDSCHULE KRAMPNITZ', category: 'Research', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'STADTWIRTSCHAFT CHEMNITZ', category: 'Consulting', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop' },
    { id: 3, title: 'HORSAALZENTRUM UNIVERSITAT HAMBURG-SCIENCE CITY', subtitle: '2. PREIS', category: 'Experiment', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, title: 'NEUBAU BUNDESMINISTERIUM', subtitle: '1.PREIS', category: 'Research', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop' },
    { id: 5, title: 'CARBON CAPTURE LAB', category: 'Research', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop' },
    { id: 6, title: 'URBAN AGRICULTURE PILOT', category: 'Consulting', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop' },
    { id: 7, title: 'CIRCULAR ECONOMY HUB', category: 'Experiment', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070&auto=format&fit=crop' },
    { id: 8, title: 'HYDROGEN POWER STATION', category: 'Research', image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop' },
    { id: 9, title: 'RENEWABLE ENERGY GRID', category: 'Consulting', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop' },
    { id: 10, title: 'SMART WATER MANAGEMENT', category: 'Experiment', image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2070&auto=format&fit=crop' },
    { id: 11, title: 'BIODIVERSITY CORRIDOR', category: 'Research', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2072&auto=format&fit=crop' },
    { id: 12, title: 'WASTE TO ENERGY PLANT', category: 'Consulting', image: 'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=2074&auto=format&fit=crop' },
    { id: 13, title: 'PASSIVE HOUSE PROTOTYPE', category: 'Experiment', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop' },
    { id: 14, title: 'NET ZERO NEIGHBORHOOD', category: 'Research', image: 'https://images.unsplash.com/photo-1449156001934-19069d67ed0f?q=80&w=2070&auto=format&fit=crop' },
    { id: 15, title: 'GREEN TRANSPORT SYSTEM', category: 'Consulting', image: 'https://images.unsplash.com/photo-1519003300449-424ad040507b?q=80&w=2070&auto=format&fit=crop' },
    { id: 16, title: 'ECO DISTILLERY SYSTEM', category: 'Experiment', image: 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?q=80&w=2070&auto=format&fit=crop' },
    { id: 17, title: 'SOLAR FOREST INITIATIVE', category: 'Research', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop' },
    { id: 18, title: 'VERTICAL FARMING UNIT', category: 'Consulting', image: 'https://images.unsplash.com/photo-1518005020250-685942823050?q=80&w=2070&auto=format&fit=crop' },
    { id: 19, title: 'RECYCLED MATERIAL LAB', category: 'Experiment', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop' },
    { id: 20, title: 'ALGAE BIOREACTOR WALL', category: 'Research', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop' },
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
