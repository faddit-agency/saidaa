import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const zeroData = {
    "1": {
        title: "ZERO-CARBON RESEARCH",
        location: "KRAMPNITZ",
        heroImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
        diagramImage: "https://images.unsplash.com/photo-1518005020250-675f210fe3a2?q=80&w=1974&auto=format&fit=crop",
        sections: [
            {
                heading: "Driving towards a sustainable future",
                content: `ZERO-SAIDAA is our dedicated sustainability initiative focused on achieving carbon neutrality in architectural design and urban planning. We believe that architecture should not just minimize harm, but actively contribute to the regeneration of our environment.

Through material innovation, energy-efficient systems, and biophilic design, we aim to eliminate the carbon footprint of every project we undertake. Our research focuses on circular economy principles, where materials are reused and energy is harvested directly from the environment.`
            }
        ]
    }
};

const ZeroSaidaaDetail = () => {
    const { id } = useParams();
    const project = zeroData[id] || zeroData["1"];

    return (
        <div className="pb-24">
            {/* Back Button */}
            <div className="container mx-auto py-6">
                <Link to="/zero-saidaa" className="inline-flex items-center text-xs font-bold tracking-widest hover:text-green-600 transition-colors uppercase">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back to Zero-Saidaa
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Hero Section */}
                <div className="container mx-auto mb-16">
                    <div className="relative w-full aspect-[16/7] overflow-hidden">
                        <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute right-8 md:right-16 bottom-12 text-right text-white">
                            <p className="text-xs font-bold tracking-[0.2em] mb-2 uppercase opacity-80">{project.location}</p>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
                                {project.title.split(' ').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto mb-24">
                    <div className="w-full">
                        <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">{project.sections[0].heading}</h2>
                        <div className="text-sm text-muted-foreground leading-[1.8] space-y-6">
                            {project.sections[0].content.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Diagram Image */}
                <div className="container mx-auto">
                    <div className="w-full aspect-[16/10] overflow-hidden bg-muted">
                        <img
                            src={project.diagramImage}
                            alt="Architectural Diagram"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ZeroSaidaaDetail;
