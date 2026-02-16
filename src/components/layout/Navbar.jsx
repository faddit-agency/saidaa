import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'WORKS', path: '/works' },
    { name: 'SAIDAA', path: '/saidaa' },
    { name: 'ZERO-SAIDAA', path: '/zero-saidaa' },
    { name: 'NEWS', path: '/news' },
    { name: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 shadow-sm',
                isHome
                    ? (isOpen ? 'bg-[#181818]' : 'bg-transparent shadow-none')
                    : 'bg-white'
            )}
        >
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Logo - dynamic version as per user's "opposite" request */}
                <Link
                    to="/"
                    className={cn(
                        "hover:opacity-80 transition-opacity flex",
                        isHome && "md:hidden"
                    )}
                >
                    <img
                        src={isHome ? "/logo-black.png" : "/logo-white.png"}
                        alt="SAIDAA"
                        className="h-4"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={cn("hidden md:flex space-x-8", isHome && "ml-auto")}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-green-500',
                                isHome ? 'text-white' : 'text-foreground',
                                location.pathname === item.path && 'font-bold'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={cn("md:hidden p-2 ml-auto", isHome ? "text-white" : "text-foreground")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={cn(
                            "md:hidden absolute top-full left-0 right-0 border-t shadow-xl overflow-hidden",
                            isHome ? "bg-[#181818] text-white border-white/10" : "bg-white text-foreground border-border"
                        )}
                    >
                        <nav className="flex flex-col p-6 space-y-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={cn(
                                        'text-2xl font-bold tracking-tighter hover:text-green-500 transition-colors',
                                        location.pathname === item.path && 'text-green-600'
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
