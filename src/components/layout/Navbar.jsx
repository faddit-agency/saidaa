import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.works', path: '/works' },
    { key: 'nav.saidaa', path: '/saidaa' },
    { key: 'nav.zeroSaidaa', path: '/zero-saidaa' },
    { key: 'nav.news', path: '/news' },
    { key: 'nav.contact', path: '/contact' },
];

const languages = [
    { code: 'ko', label: 'KR' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
];

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const currentLangLabel = languages.find(l => l.code === (i18n.language?.substring(0, 2) || 'en'))?.label || 'EN';

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
                {/* Logo */}
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

                {/* Desktop Navigation Container */}
                <div className={cn("hidden md:flex items-center gap-8", isHome && "ml-auto")}>
                    <nav className="flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.key}
                                to={item.path}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-green-500',
                                    isHome ? 'text-white' : 'text-foreground',
                                    location.pathname === item.path && 'font-bold'
                                )}
                            >
                                {t(item.key)}
                            </Link>
                        ))}
                    </nav>

                    {/* Language Switcher Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className={cn(
                                "flex items-center space-x-2 text-xs font-bold transition-all hover:text-green-500 border-l pl-8",
                                isHome ? "text-white border-white/30" : "text-foreground border-foreground/20"
                            )}
                        >
                            <Globe size={14} />
                            <span>{currentLangLabel}</span>
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className={cn(
                                        "absolute top-full right-0 mt-2 py-2 min-w-[80px] shadow-xl border overflow-hidden",
                                        isHome ? "bg-[#181818] border-white/10" : "bg-white border-border"
                                    )}
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={cn(
                                                "w-full text-left px-4 py-2 text-[11px] font-bold uppercase tracking-wider hover:bg-green-500/10 transition-colors",
                                                i18n.language?.substring(0, 2) === lang.code ? "text-green-500" : (isHome ? "text-white/70" : "text-muted-foreground")
                                            )}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

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
                                    key={item.key}
                                    to={item.path}
                                    className={cn(
                                        'text-2xl font-bold tracking-tighter hover:text-green-500 transition-colors',
                                        location.pathname === item.path && 'text-green-600'
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t(item.key)}
                                </Link>
                            ))}

                            {/* Mobile Language Switcher - Also using the globe motif */}
                            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                                <div className="flex items-center space-x-2 text-xs font-bold tracking-widest opacity-40 uppercase">
                                    <Globe size={14} />
                                    <span>Language</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                changeLanguage(lang.code);
                                                setIsOpen(false);
                                            }}
                                            className={cn(
                                                "text-sm font-bold uppercase tracking-widest",
                                                i18n.language?.substring(0, 2) === lang.code ? "text-green-500" : "opacity-70"
                                            )}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
