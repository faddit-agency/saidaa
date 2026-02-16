import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const tabs = ['About', 'Team', 'Principles'];

const teamMembers = [
    {
        id: 1,
        name: 'JOHNYUN BAEK',
        role: 'CO-FOUNDER AND CEO',
        bioKo: '백종현은 SAIDAA의 공동설립자이자 대표이다. 디자인, 시스템 및 비즈니스 모델 개발 등 다양한 경험을 바탕으로 새로운 공간 라이프스타일 디자인을 통한 사회적 가치의 실현을 추구한다. 과거를 발견하기 전, 서울대학교에서 도시조경학 전공학을 전공하고 하버드대학교 GSD에서 조경학 MA 학위를 취득하며 국내외 다양한 프로젝트를 수행하였다.',
        bioEn: 'Johnyun Baek is a co-founder and CEO of SAIDAA. He has dedicated to exploring spatial and social values with his experience in design, system and business model development. Prior to establishing SAIDAA, he completed his studies in Landscape Architecture at Seoul National University and Harvard Graduate School of Design (GSD).',
        education: ['MLA, Landscape Architecture, Harvard University', 'B.S. Landscape Architecture, Seoul National University'],
        experience: ['2019-present SAIDAA, CEO', '2015-2018 E.D.A. Office, Partner', '2010-2014 Designer, AS+GG Architecture'],
        illustration: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=f8f9fa',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    },
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: i + 2,
        name: `TEAM MEMBER ${i + 1}`,
        role: 'ARCHITECT',
        quote: 'Design is not just what it looks like, but how it works.',
        illustration: `https://api.dicebear.com/7.x/avataaars/svg?seed=Member${i}&backgroundColor=f8f9fa`,
        photo: `https://images.unsplash.com/photo-${1500648767791 + i}-00dcc91aaaff?q=80&w=2069&auto=format&fit=crop`
    }))
];

const principles = [
    {
        title: 'Inspired by Nature',
        content: 'We are surrounded by nature. In Helsinki, our capital, you can find archipelagoes and forests just 15 minutes from the city center. The shapes and innovations of mother nature inspire us in our design work.'
    },
    {
        title: 'Human Touch',
        content: 'Architecture should always respect the "small person" as coined by Alvar Aalto. Human experience is the driving principle of all our work. Empathy is needed to develop new solutions and it helps to solve the key challenges of our society.'
    },
    {
        title: 'Simple but Intelligent',
        content: 'We have learnt to recognise the strongest of our ideas because they are the simplest ones. Simplicity is achieved through a deep understanding of a problem and an intelligent approach in resolving it.'
    },
    {
        title: 'Less Talk',
        content: 'The world is divided into two groups: talkers and doers. We believe in the latter. The built work is what counts the most. This is why we are focused on mastering the construction process, understanding materials, details and craftsmanship.'
    },
    {
        title: 'Tailor Made',
        content: 'Our design approach is creative and flexible, just like jazz music. "Improvise" is our middle name. We don\'t use standard methods and styles. This is why all of our projects are unique.'
    },
    {
        title: 'Hidden Essential',
        content: 'Design is not about surfaces, but it reveals the inherent idea behind the project. The architect\'s job is to define and discover the essential. We have created hundreds of new design concepts so we know what it takes.'
    },
    {
        title: 'Total Design',
        content: 'We see architecture as a holistic environment that can be experienced at all scales ranging from the intimate to the immersive. This is why we welcome projects that allow us to combine the talents of our architects and interior designers.'
    }
];

const Saidaa = () => {
    const [activeTab, setActiveTab] = useState('About');

    return (
        <div className="container mx-auto pt-4 pb-24">
            {/* Sub-navigation */}
            <div className="flex justify-end gap-8 mb-16 text-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            'transition-colors hover:text-foreground',
                            activeTab === tab ? 'font-bold text-foreground' : 'text-muted-foreground'
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'About' && (
                    <motion.div
                        key="about"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-12">About</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16 text-sm leading-relaxed text-muted-foreground">
                            <div className="space-y-6">
                                <p>
                                    SAIDAA is an architecture and research collective on a mission to reconnect people with nature through design at every scale. We aim to transform complex, real-world challenges into designs that leave a lasting positive impact. By bridging research and design, we align data with lived experience, functionality with beauty, economic priorities with ecological responsibility, and hope with action.
                                </p>
                                <p>
                                    Led by Founder Johnyun Baek, our design studio brings together a purpose-driven team: architects, designers, urban planners, landscape architects, and researchers who work holistically across borders, scales, and disciplines.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    For over 10 years, we have worked with innovation and cross-sector partnerships to address some of the most pressing social and environmental challenges in the built environment – from a systemic perspective to the human scale. Our solutions are rooted in the communities and environments they serve – and shaped with care, so they can be both felt and measured.
                                </p>
                                <p>
                                    We don't pretend to have all the answers, but we continue to push boundaries in our pursuit of design solutions that celebrate nature and meet society's needs without compromising the future.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" alt="Architecture landscape" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" alt="Team collaboration" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'Team' && (
                    <motion.div
                        key="team"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-24"
                    >
                        {/* CEO Profile Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border pt-12">
                            <div className="lg:col-span-4 aspect-square bg-muted flex items-center justify-center overflow-hidden">
                                <img src={teamMembers[0].illustration} alt={teamMembers[0].name} className="w-full h-full object-cover" />
                            </div>
                            <div className="lg:col-span-8 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-bold mb-1">{teamMembers[0].name}</h2>
                                    <p className="text-xs text-muted-foreground mb-8 tracking-widest">{teamMembers[0].role}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] leading-relaxed text-muted-foreground mb-12">
                                        <p>{teamMembers[0].bioEn}</p>
                                        <p>{teamMembers[0].bioKo}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] text-muted-foreground uppercase tracking-wider">
                                    <div>
                                        <h3 className="font-bold text-foreground mb-3">EDUCATION</h3>
                                        {teamMembers[0].education.map((item, idx) => (
                                            <p key={idx} className="mb-1">{item}</p>
                                        ))}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-3">EXPERIENCE</h3>
                                        {teamMembers[0].experience.map((item, idx) => (
                                            <p key={idx} className="mb-1">{item}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Grid Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {teamMembers.slice(1).map((member) => (
                                <div key={member.id} className="relative aspect-square group cursor-pointer overflow-hidden bg-[#f8f9fa]">
                                    <div className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                                        <img src={member.illustration} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black">
                                        <div className="h-full flex flex-col justify-end p-4 text-white">
                                            <p className="text-xs font-bold leading-tight mb-2">{member.name}</p>
                                            <p className="text-[10px] italic leading-tight opacity-70 border-t border-white/20 pt-2">{member.quote}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center pt-12">
                            <p className="text-xs text-muted-foreground mb-4">Haha, we are ABC trying to make an effect we get the right people for you on for the architecture. Just insight.</p>
                            <div className="flex justify-center gap-4">
                                <button className="px-6 py-2 border border-border text-[10px] font-bold tracking-widest hover:bg-muted transition-colors uppercase">Our Insight</button>
                                <button className="px-6 py-2 border border-border text-[10px] font-bold tracking-widest hover:bg-muted transition-colors uppercase">Contact</button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'Principles' && (
                    <motion.div
                        key="principles"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Design Principles</h1>
                            </div>
                            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                                {principles.map((p, i) => (
                                    <div key={i} className="space-y-4">
                                        <h3 className="text-xl font-bold">{p.title}</h3>
                                        <p className="text-[13px] leading-relaxed text-muted-foreground">
                                            {p.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Saidaa;
