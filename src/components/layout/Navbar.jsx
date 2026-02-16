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
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'py-2' : 'py-0',
                !isHome && 'bg-white'
            )}
        >
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Logo - visible on mobile/other pages, hidden on home page desktop */}
                <Link
                    to="/"
                    className={cn(
                        "hover:opacity-80 transition-opacity",
                        isHome ? "flex md:hidden" : "flex"
                    )}
                >
                    <img src="/logo-white.png" alt="SAIDAA" className="h-4" />
                </Link>

                {/* Desktop Navigation */}
                <nav className={cn("hidden md:flex space-x-8", isHome && "ml-auto")}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={cn(
                                'text-sm font-medium transition-colors',
                                isHome
                                    ? 'hover:text-green-500 text-white/80'
                                    : 'hover:text-green-600 text-muted-foreground',
                                location.pathname === item.path && (isHome ? 'font-bold text-white' : 'font-bold text-foreground')
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={cn("md:hidden p-2", isHome ? "text-white ml-auto" : "text-foreground")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={cn(
                                        'text-lg font-medium py-2 px-4 rounded-md hover:bg-muted transition-colors',
                                        location.pathname === item.path && 'bg-muted'
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
