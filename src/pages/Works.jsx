import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Expanded projects data (20 items)
const projects = [
    { id: 1, title: 'GRUNDSCHULE KRAMPNITZ', category: 'Architecture', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'STADTWIRTSCHAFT CHEMNITZ', category: 'Urbandesign', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop' },
    { id: 3, title: 'HORSAALZENTRUM UNIVERSITAT HAMBURG-SCIENCE CITY', subtitle: '2. PREIS', category: 'Architecture', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, title: 'NEUBAU BUNDESMINISTERIUM', subtitle: '1.PREIS', category: 'Architecture', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop' },
    { id: 5, title: 'GRUNDSCHULE KRAMPNITZ Variant', category: 'Architecture', image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1974&auto=format&fit=crop' },
    { id: 6, title: 'STADTWIRTSCHAFT CHEMNITZ Variant', category: 'Urbandesign', image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop' },
    { id: 7, title: 'HORSAALZENTRUM UNIVERSITAT Variant', subtitle: '2. PREIS', category: 'Architecture', image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop' },
    { id: 8, title: 'NEUBAU BUNDESMINISTERIUM Variant', subtitle: '1.PREIS', category: 'Interiors', image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2070&auto=format&fit=crop' },
    { id: 9, title: 'SEOUL CULTURAL CENTER', category: 'Architecture', image: 'https://images.unsplash.com/photo-1518005020250-685942823050?q=80&w=2070&auto=format&fit=crop' },
    { id: 10, title: 'BUSAN MARITIME MUSEUM', category: 'Urbandesign', image: 'https://images.unsplash.com/photo-1493397869560-2794d25fa19b?q=80&w=2070&auto=format&fit=crop' },
    { id: 11, title: 'JEJU ART VILLAGE', category: 'Architecture', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop' },
    { id: 12, title: 'TOKYO VERTICAL GARDEN', category: 'Architecture', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop' },
    { id: 13, title: 'SHANGHAI TECH HUB', category: 'Urbandesign', image: 'https://images.unsplash.com/photo-1449156001934-19069d67ed0f?q=80&w=2070&auto=format&fit=crop' },
    { id: 14, title: 'COPENHAGEN HARBOR BATH', category: 'Interiors', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop' },
    { id: 15, title: 'OSLO OPERA HOUSE ANNEX', category: 'Architecture', image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop' },
    { id: 16, title: 'BERLIN CREATIVE QUARTER', category: 'Design Forschung', image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop' },
    { id: 17, title: 'PARIS MODERN ATELIER', category: 'Interiors', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop' },
    { id: 18, title: 'LONDON ECO TOWER', category: 'Architecture', image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2070&auto=format&fit=crop' },
    { id: 19, title: 'GOTHENBURG SMART CITY', category: 'Akquise/wettbewerb', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop' },
    { id: 20, title: 'ZURICH MOUNTAIN RETREAT', category: 'Architecture', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop' },
];

const categories = ['ALL', 'Urbandesign', 'Architecture', 'Interiors', 'Design Forschung', 'Akquise/wettbewerb'];

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');

    const filteredProjects = activeCategory === 'ALL'
        ? projects
        : projects.filter(p => p.category === activeCategory);

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
                {filteredProjects.map((project) => (
                    <Link to={`/works/${project.id}`} key={project.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-bold text-sm uppercase leading-tight tracking-tight">
                                {project.title}
                            </h3>
                            {project.subtitle && (
                                <p className="text-xs text-muted-foreground mt-1 uppercase">
                                    {project.subtitle}
                                </p>
                            )}
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Works;
