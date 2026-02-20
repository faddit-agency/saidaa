import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto pt-4 pb-24">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Top Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                    <div className="aspect-[4/3] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
                            alt="Team photo"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="aspect-[4/3] overflow-hidden md:mt-12">
                        <img
                            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                            alt="Office interior"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="aspect-[4/3] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                            alt="Workspace"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Contact Title */}
                <h1 className="text-3xl font-bold mb-16 uppercase tracking-tight">{t('contact.title')}</h1>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {/* Left Columns - Stacked in MD */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{t('contact.office')}</h3>
                                <div className="text-sm text-muted-foreground space-y-1 leading-relaxed">
                                    <p>SAIDAA Arklitekter ApS</p>
                                    <p>Blågårdsgade 8, 2. sal</p>
                                    <p>2200 København N</p>
                                    <p className="pt-4 font-bold text-foreground">Tel.: (+45) 35 35 36 31</p>
                                    <p className="text-foreground">E-mail: hello@saidaa.com</p>
                                    <p>CVR no.: 3377 1304</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{t('contact.businessDev')}</h3>
                                <div className="text-sm text-muted-foreground space-y-4">
                                    <p>{t('contact.inquiries')}</p>
                                    <div>
                                        <p className="font-bold text-foreground">Jon Borberg</p>
                                        <p>Business Development Manager</p>
                                        <p className="text-foreground">jb@saidaa.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{t('contact.bank')}</h3>
                                <div className="text-sm text-muted-foreground space-y-1 leading-relaxed">
                                    <p>Vestjysk Bank</p>
                                    <p>Torvet 4-5</p>
                                    <p>7620 Lemvig</p>
                                    <p className="pt-4">Tel.: (+45) 96 63 20 00</p>
                                    <p>Reg. no.: 7606</p>
                                    <p>Account no.: 1427688</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{t('contact.press')}</h3>
                                <div className="text-sm text-muted-foreground space-y-4">
                                    <p>{t('contact.mediaInquiries')}</p>
                                    <div>
                                        <p className="font-bold text-foreground">Liv Elbirk</p>
                                        <p>Senior Communications Manager</p>
                                        <p className="text-foreground">le@saidaa.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Map Placeholder */}
                    <div className="w-full">
                        <div className="aspect-[4/3] bg-[#0c1a2c] flex items-center justify-center relative overflow-hidden group border border-border">
                            {/* Simple SVG Map-like background */}
                            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
                                <path d="M50 50 L150 150 L250 50 L350 150" stroke="white" strokeWidth="1" fill="none" />
                                <path d="M0 100 L400 100 M100 0 L100 300 M300 0 L300 300" stroke="white" strokeWidth="0.5" fill="none" />
                                <circle cx="200" cy="150" r="10" fill="red" className="animate-pulse" />
                            </svg>
                            <div className="relative z-10 text-center p-6 bg-black/40 backdrop-blur-sm">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white underline decoration-red-500 underline-offset-8">{t('contact.findUs')}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
