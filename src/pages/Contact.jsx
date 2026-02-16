import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="container mx-auto pt-4 pb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-tight">CONTACT</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-4">SEOUL OFFICE</h2>
                            <address className="not-italic text-sm text-muted-foreground space-y-1">
                                <p>123 Architecture Lane, Gangnam-gu</p>
                                <p>Seoul, South Korea</p>
                                <p className="pt-4 font-bold text-foreground">T: +82 (0)2 1234 5678</p>
                                <p className="text-foreground">E: info@saidaa.com</p>
                            </address>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-4">NEW BUSINESS</h2>
                            <p className="text-sm text-muted-foreground">
                                For new project inquiries and collaborations:<br />
                                <span className="text-foreground font-medium">projects@saidaa.com</span>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-4">JOIN US</h2>
                            <p className="text-sm text-muted-foreground">
                                We are always looking for talented individuals.<br />
                                <span className="text-foreground font-medium">careers@saidaa.com</span>
                            </p>
                        </div>
                    </div>

                    <div className="grayscale">
                        {/* Map Placeholder */}
                        <div className="aspect-video bg-muted flex items-center justify-center border border-border">
                            <span className="text-xs uppercase tracking-widest text-muted-foreground">Map Integration Coming Soon</span>
                        </div>
                        <div className="mt-8 aspect-square overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
                                alt="Office Space"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
