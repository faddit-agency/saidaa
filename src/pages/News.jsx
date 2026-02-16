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
    },
    {
        id: 7,
        date: '2024. 11. 30.',
        category: 'NEWS',
        title: 'Expanding our Seoul Office',
        description: 'SAIDAA is growing! We have officially moved to a new and larger space in the heart of Seoul to accommodate our expanding team and research departments...',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 8,
        date: '2024. 11. 10.',
        category: 'RESEARCH',
        title: 'Climate Adaptation Strategies for Coastal Cities',
        description: 'Our latest whitepaper focuses on resilient urban planning for coastal regions facing rising sea levels and extreme weather events...',
        image: 'https://images.unsplash.com/photo-1518005020250-685942823050?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 9,
        date: '2024. 10. 25.',
        category: 'PUBLICATION',
        title: 'Architectural Monograph: Ten Years of SAIDAA',
        description: 'A retrospective look at our firm\'s evolution over the past decade, featuring in-depth case studies of our most impactful projects...',
        image: 'https://images.unsplash.com/photo-1582522435722-636603d15a51?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 10,
        date: '2024. 10. 05.',
        category: 'AWARDS',
        title: 'Green World Award for Urban Forestry',
        description: 'Honored to receive the Green World Award for our innovative approach to integrating vertical forests into high-rise residential projects...',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 11,
        date: '2024. 09. 15.',
        category: 'EXHIBITION',
        title: 'Designing with Wood: A Sustainable Future',
        description: 'Visit our latest exhibition at the Seoul Design Plaza, showcasing the beauty and structural potential of mass timber construction...',
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 12,
        date: '2024. 09. 01.',
        category: 'TALK',
        title: 'The Future of Urban Living in Mega-Cities',
        description: 'Johnyun Baek joined a panel of leading urbanists at the World Cities Summit to discuss the challenges and opportunities of rapid urbanization in Asia...',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 13,
        date: '2024. 08. 15.',
        category: 'NEWS',
        title: 'New Partnership Announced with Global Tech Firm',
        description: 'We are excited to announce a strategic partnership aimed at developing smart-city solutions that prioritize sustainability and human well-being...',
        image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 14,
        date: '2024. 08. 01.',
        category: 'RESEARCH',
        title: 'Post-Occupancy Evaluation of Low-Carbon Social Housing',
        description: 'Understanding the real-world performance of our sustainable residential projects through detailed user feedback and data analysis...',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop'
    },
    {
        id: 15,
        date: '2024. 07. 15.',
        category: 'PUBLICATION',
        title: 'The Materiality of Light: Philosophical Perspectives on Architecture',
        description: 'A new essay by our design director exploring the role of natural light in creating meaningful and transformative architectural spaces...',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2072&auto=format&fit=crop'
    },
    {
        id: 16,
        date: '2024. 07. 01.',
        category: 'AWARDS',
        title: 'MIPIM Asia Gold Award for Mixed-Use Development',
        description: 'Proud to announce that the Chemnitz Stadtwirtschaft project has been awarded Gold in the best mixed-use project category...',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop'
    },
    {
        id: 17,
        date: '2024. 06. 15.',
        category: 'EXHIBITION',
        title: 'Prototypes for a Shared Future: Interactive Installation',
        description: 'Experience a range of full-scale architectural prototypes that test new ways of living and working together in the modern city...',
        image: 'https://images.unsplash.com/photo-1449156001934-19069d67ed0f?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 18,
        date: '2024. 06. 01.',
        category: 'TALK',
        title: 'Masterclass on Circular Design at the Royal Academy of Arts',
        description: 'Johnyun Baek delivered a masterclass for emerging architects on the principles of circularity in architectural design and practice...',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 19,
        date: '2024. 05. 20.',
        category: 'NEWS',
        title: 'SAIDAA Nominated for Global Young Architect Award',
        description: 'We are thrilled to be finalists for this prestigious award that recognizes innovative practices pushing the boundaries of the profession...',
        image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 20,
        date: '2024. 05. 05.',
        category: 'RESEARCH',
        title: 'AI in Architecture: New Frontier for Generative Design',
        description: 'Exploring how artificial intelligence can be used as a creative tool to enhance architectural design and optimize building performance...',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop'
    },
];

const News = () => {
    return (
        <div className="container mx-auto pt-4 pb-24">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">
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
