import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const newsItems = [
    {
        id: 1,
        date: '2025. 2. 3.',
        category: 'AWARDS',
        title: 'Home.Earth Nærheden selected as a finalist for Best Residential Project at the MIPIM Awards',
        description: 'To us, this recognition reflects the strength of working together across disciplines and shared ambitions. Together, we have developed and delivered 158 homes that are now fully built, leased, and in operation...',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop'
    },
    {
        id: 2,
        date: '2025. 2. 2.',
        category: 'RESEARCH',
        title: 'In the process: Shaping Augustenborg\'s next chapter',
        description: 'Augustenborg is one of Denmark\'s most coherent ducal towns – shaped by centuries of interplay between power, landscape, and architecture. The castle, the castle church, the palaces, the Baroque ensemble, and the parklands...',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        date: '2025. 1. 29.',
        category: 'PUBLICATION',
        title: 'Reuse on-site – new publication: How do we design when materials come first?',
        description: 'Reuse On-Site (Genbrug på Matriklen) explores a reverse design process – one that begins with existing building materials and rethinks how architecture can emerge from what is already there...',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 4,
        date: '2025. 1. 15.',
        category: 'EXHIBITION',
        title: 'Living Cities: Urban Design for a Shared Future',
        description: 'Our latest exhibition at the Danish Architecture Centre explores how we can create more inclusive and resilient cities. The installation presents a range of pilot projects that test new forms of co-living and shared infrastructure...',
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 5,
        date: '2025. 1. 5.',
        category: 'TALK',
        title: 'Keynote at the Sustainable Building Summit',
        description: 'Johnyun Baek shared insights into SAIDAA\'s zero-carbon research initiatives and how circular economy principles can be scaled in large-scale residential developments...',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 6,
        date: '2024. 12. 15.',
        category: 'AWARDS',
        title: 'SAIDAA wins Nordic Architecture Award for Innovation',
        description: 'We are incredibly proud to receive this recognition for our work on the Wood City project, which demonstrates the potential of mass timber construction in high-density urban areas...',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    }
];

const News = () => {
    return (
        <div className="container mx-auto pt-4 pb-24">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {newsItems.map((item, i) => (
                        <Link to={`/news/${item.id}`} key={item.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: (i % 3) * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col cursor-pointer"
                            >
                                <div className="aspect-[4/3] overflow-hidden bg-muted mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                        {item.date}
                                    </p>
                                    <h2 className="text-xl font-bold leading-snug tracking-tight group-hover:text-green-600 transition-colors">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                    <div className="pt-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] border-b border-muted-foreground/30 pb-1 group-hover:border-foreground transition-colors">
                                            Read more
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default News;
