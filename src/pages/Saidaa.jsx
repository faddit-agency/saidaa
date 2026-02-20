import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

// Keys for tabs
const tabKeys = ['about', 'team', 'principles'];

const Saidaa = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('about');

    const teamMembers = [
        {
            id: 1,
            name: 'JOHNYUN BAEK',
            role: t('saidaa.team.role'),
            bio: t('saidaa.team.bio'),
            education: ['MLA, Landscape Architecture, Harvard University', 'B.S. Landscape Architecture, Seoul National University'],
            experience: ['2019-present SAIDAA, CEO', '2015-2018 E.D.A. Office, Partner', '2010-2014 Designer, AS+GG Architecture'],
            illustration: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=f8f9fa',
            photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
        },
        ...Array.from({ length: 7 }).map((_, i) => ({
            id: i + 2,
            name: `TEAM MEMBER ${i + 1}`,
            role: t('saidaa.team.role_architect'),
            quote: t('saidaa.team.quote'),
            illustration: `https://api.dicebear.com/7.x/avataaars/svg?seed=Member${i}&backgroundColor=f8f9fa`,
            photo: `https://images.unsplash.com/photo-${1500648767791 + i}-00dcc91aaaff?q=80&w=2069&auto=format&fit=crop`
        }))
    ];

    const principles = Array.from({ length: 7 }).map((_, i) => ({
        title: t(`saidaa.principles.p${i + 1}_title`),
        content: t(`saidaa.principles.p${i + 1}_content`)
    }));

    return (
        <div className="container mx-auto pt-4 pb-24">
            {/* Sub-navigation */}
            <div className="flex overflow-x-auto no-scrollbar md:justify-end gap-8 mb-16 text-sm uppercase tracking-wide pb-2">
                {tabKeys.map((tabKey) => (
                    <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={cn(
                            'transition-colors hover:text-foreground whitespace-nowrap',
                            activeTab === tabKey ? 'font-bold text-foreground underline decoration-2 underline-offset-4' : 'text-muted-foreground'
                        )}
                    >
                        {t(`saidaa.tabs.${tabKey}`)}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'about' && (
                    <motion.div
                        key="about"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-12 uppercase">{t('saidaa.about.title')}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16 text-sm leading-relaxed text-muted-foreground">
                            <div className="space-y-6">
                                <p>{t('saidaa.about.p1')}</p>
                                <p>{t('saidaa.about.p2')}</p>
                            </div>
                            <div className="space-y-6">
                                <p>{t('saidaa.about.p3')}</p>
                                <p>{t('saidaa.about.p4')}</p>
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

                {activeTab === 'team' && (
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
                                    <p className="text-[10px] text-muted-foreground mb-8 tracking-[0.3em] uppercase">{teamMembers[0].role}</p>

                                    <div className="text-[13px] leading-relaxed text-muted-foreground mb-12">
                                        <p>{teamMembers[0].bio}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] text-muted-foreground uppercase tracking-wider">
                                    <div>
                                        <h3 className="font-bold text-foreground mb-3">{t('saidaa.team.education_title')}</h3>
                                        {teamMembers[0].education.map((item, idx) => (
                                            <p key={idx} className="mb-1">{item}</p>
                                        ))}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-3">{t('saidaa.team.experience_title')}</h3>
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
                            <p className="text-xs text-muted-foreground mb-4">{t('saidaa.team.insight_text')}</p>
                            <div className="flex justify-center gap-4">
                                <button className="px-6 py-2 border border-border text-[10px] font-bold tracking-widest hover:bg-muted transition-colors uppercase">{t('common.ourInsight')}</button>
                                <button className="px-6 py-2 border border-border text-[10px] font-bold tracking-widest hover:bg-muted transition-colors uppercase">{t('common.contact')}</button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'principles' && (
                    <motion.div
                        key="principles"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">{t('saidaa.principles.title')}</h1>
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
