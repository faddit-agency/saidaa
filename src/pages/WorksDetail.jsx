import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projectsData = {
    "1": {
        title: "GRUNDSCHULE KRAMPNITZ",
        location: "BERLIN",
        heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
        diagramImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
        sections: [
            {
                heading: "Connecting people and ideas",
                content: `The Bundenblock is a vast complex of buildings situated in Berlin's Tiergarten district and one of the most significant sites of Germany's recent history. Once a place where military resistance against the Nazi regime emerged, it currently houses the Federal Ministry of Defence. This historic ensemble is going to be expanded with three new buildings on the front of the site.

HPP's design incorporates three new buildings alongside the imposing historical structures, which were built from 1910 onwards. The new additions - two administrative buildings and a canteen pavilion - are designed to be innovative, energy-efficient. The entire site will be transformed into a permeable green campus. Its design instills transparency as well as self-confidence, but also light as a preservation of our democratic and vibrant values.`
            },
            {
                heading: "We Land Office Building",
                content: `At the heart of the newly created campus, two new administrative buildings frame the parade ground on their corner. Their L-shaped layout creates spacious courtyards which, adorned with native trees, perennials, and grasses, offer tranquility and a place for people to meet. The buildings' narrow wings bring the workplace close to the facade, providing daylight, fresh air, and views of the green courtyards and the surrounding area. Photovoltaic systems installed on the green roofs generate sustainable electricity.`
            }
        ]
    }
};

const WorksDetail = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    const getProject = (id) => {
        if (projectsData[id]) return projectsData[id];

        // Dynamic fallback for many IDs
        return {
            title: `PROJECT INNOVATION #${id}`,
            location: "GLOBAL",
            heroImage: `https://images.unsplash.com/photo-${1500648767791 + (parseInt(id) % 1000)}?q=80&w=2069&auto=format&fit=crop`,
            diagramImage: `https://images.unsplash.com/photo-1518005020250-675f210fe3a2?q=80&w=1974&auto=format&fit=crop`,
            sections: [
                {
                    heading: "Designing for the Future",
                    content: `Project #${id} represents SAIDAA's ongoing commitment to excellence in architectural design and urban planning. This initiative explores the intersection of technology, sustainability, and human-centric spaces.`
                },
                {
                    heading: "Innovative Spatial Solutions",
                    content: `The spatial strategy for #${id} emphasizes transparency and connectivity. By utilizing open-plan layouts and strategic glass integrations, we maximize natural light and foster a sense of openness.`
                }
            ]
        };
    };

    const project = getProject(id);

    return (
        <div className="pb-24">
            {/* Back Button */}
            <div className="container mx-auto py-6">
                <Link to="/works" className="inline-flex items-center text-xs font-bold tracking-widest hover:text-green-600 transition-colors uppercase">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    {t('common.backToWorks')}
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

                {/* Content Section 1 */}
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
                <div className="container mx-auto mb-24">
                    <div className="w-full aspect-[16/10] overflow-hidden bg-muted">
                        <img
                            src={project.diagramImage}
                            alt="Architectural Diagram"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Section 2 */}
                {project.sections[1] && (
                    <div className="container mx-auto">
                        <div className="w-full">
                            <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">{project.sections[1].heading}</h2>
                            <div className="text-sm text-muted-foreground leading-[1.8] space-y-6">
                                {project.sections[1].content.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default WorksDetail;
