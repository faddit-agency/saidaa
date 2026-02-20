import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Expanded projects data (20 items) with example diagrams
const projects = [
    {
        id: 1,
        title: 'GRUNDSCHULE KRAMPNITZ',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
        diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='40' y='40' width='120' height='30' fill='black'/%3E%3Crect x='40' y='130' width='120' height='30' fill='black'/%3E%3Crect x='40' y='70' width='30' height='60' fill='black'/%3E%3Crect x='130' y='70' width='30' height='60' fill='black'/%3E%3C/svg%3E"
    },
    {
        id: 2,
        title: 'STADTWIRTSCHAFT CHEMNITZ',
        category: 'Urbandesign',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop',
        diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='black' stroke-width='15'/%3E%3Crect x='90' y='40' width='20' height='120' fill='black'/%3E%3Crect x='40' y='90' width='120' height='20' fill='black'/%3E%3C/svg%3E"
    },
    {
        id: 3,
        title: 'HORSAALZENTRUM UNIVERSITAT HAMBURG-SCIENCE CITY',
        subtitle: '2. PREIS',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop',
        diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Cpath d='M40 40 L160 40 L100 160 Z' fill='black'/%3E%3Crect x='120' y='120' width='40' height='40' fill='black'/%3E%3C/svg%3E"
    },
    {
        id: 4,
        title: 'NEUBAU BUNDESMINISTERIUM',
        subtitle: '1.PREIS',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
        diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='30' y='30' width='60' height='140' fill='black'/%3E%3Crect x='110' y='30' width='60' height='140' fill='black'/%3E%3Crect x='90' y='80' width='20' height='40' fill='black'/%3E%3C/svg%3E"
    },
    { id: 5, title: 'GRUNDSCHULE KRAMPNITZ Variant', category: 'Architecture', image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1974&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='50' y='50' width='100' height='100' fill='black'/%3E%3C/svg%3E" },
    { id: 6, title: 'STADTWIRTSCHAFT CHEMNITZ Variant', category: 'Urbandesign', image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Ccircle cx='100' cy='100' r='50' fill='black'/%3E%3C/svg%3E" },
    { id: 7, title: 'HORSAALZENTRUM UNIVERSITAT Variant', subtitle: '2. PREIS', category: 'Architecture', image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Cpath d='M50 50 H150 V150 H50 Z' fill='black'/%3E%3C/svg%3E" },
    { id: 8, title: 'NEUBAU BUNDESMINISTERIUM Variant', subtitle: '1.PREIS', category: 'Interiors', image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='40' y='40' width='40' height='120' fill='black'/%3E%3Crect x='120' y='40' width='40' height='120' fill='black'/%3E%3C/svg%3E" },
    { id: 9, title: 'SEOUL CULTURAL CENTER', category: 'Architecture', image: 'https://images.unsplash.com/photo-1518005020250-685942823050?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Ccircle cx='100' cy='100' r='70' fill='black'/%3E%3C/svg%3E" },
    { id: 10, title: 'BUSAN MARITIME MUSEUM', category: 'Urbandesign', image: 'https://images.unsplash.com/photo-1493397869560-2794d25fa19b?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='20' y='20' width='160' height='160' fill='black'/%3E%3C/svg%3E" },
    { id: 11, title: 'JEJU ART VILLAGE', category: 'Architecture', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Cpath d='M100 20 L180 180 L20 180 Z' fill='black'/%3E%3C/svg%3E" },
    { id: 12, title: 'TOKYO VERTICAL GARDEN', category: 'Architecture', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='60' y='10' width='80' height='180' fill='black'/%3E%3C/svg%3E" },
    { id: 13, title: 'SHANGHAI TECH HUB', category: 'Urbandesign', image: 'https://images.unsplash.com/photo-1449156001934-19069d67ed0f?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='20' y='80' width='160' height='40' fill='black'/%3E%3C/svg%3E" },
    { id: 14, title: 'COPENHAGEN HARBOR BATH', category: 'Interiors', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Ccircle cx='100' cy='100' r='40' fill='black'/%3E%3C/svg%3E" },
    { id: 15, title: 'OSLO OPERA HOUSE ANNEX', category: 'Architecture', image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='40' y='40' width='120' height='120' rx='20' fill='black'/%3E%3C/svg%3E" },
    { id: 16, title: 'BERLIN CREATIVE QUARTER', category: 'Design Forschung', image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Cpath d='M30 30 L170 30 L170 170 L30 170 Z' fill='none' stroke='black' stroke-width='10'/%3E%3Crect x='80' y='80' width='40' height='40' fill='black'/%3E%3C/svg%3E" },
    { id: 17, title: 'PARIS MODERN ATELIER', category: 'Interiors', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='50' y='20' width='100' height='160' fill='black'/%3E%3C/svg%3E" },
    { id: 18, title: 'LONDON ECO TOWER', category: 'Architecture', image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='black' stroke-width='20'/%3E%3C/svg%3E" },
    { id: 19, title: 'GOTHENBURG SMART CITY', category: 'Akquise/wettbewerb', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='20' y='20' width='70' height='70' fill='black'/%3E%3Crect x='110' y='20' width='70' height='70' fill='black'/%3E%3Crect x='20' y='110' width='70' height='70' fill='black'/%3E%3Crect x='110' y='110' width='70' height='70' fill='black'/%3E%3C/svg%3E" },
    { id: 20, title: 'ZURICH MOUNTAIN RETREAT', category: 'Architecture', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop', diagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Cpath d='M20 180 L180 180 L100 20 Z' fill='black'/%3E%3C/svg%3E" },
];

const categories = ['ALL', 'Urbandesign', 'Architecture', 'Interiors', 'Design Forschung', 'Akquise/wettbewerb'];

const Works = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('ALL');

    const filteredProjects = activeCategory === 'ALL'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="container mx-auto pt-4 pb-8">
            {/* Category Filter */}
            <div className="flex overflow-x-auto no-scrollbar md:flex-wrap justify-start md:justify-end gap-6 mb-12 text-sm uppercase tracking-wide pb-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            'hover:text-foreground transition-colors whitespace-nowrap',
                            activeCategory === cat ? 'font-bold text-foreground underline decoration-2 underline-offset-4' : 'text-muted-foreground'
                        )}
                    >
                        {t(`categories.${cat}`)}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {filteredProjects.map((project) => (
                    <Link to={`/works/${project.id}`} key={project.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-muted mb-4 relative">
                                {/* Regular Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                                />
                                {/* Diagram Image on Hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white flex items-center justify-center p-8">
                                    <img
                                        src={project.diagram || project.image}
                                        alt={`${project.title} diagram`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="font-bold text-[11px] md:text-sm uppercase leading-tight tracking-tight">
                                {project.title}
                            </h3>
                            {project.subtitle && (
                                <p className="text-[9px] md:text-xs text-muted-foreground mt-1 uppercase">
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
