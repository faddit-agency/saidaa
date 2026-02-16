import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-border">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                <div className="mb-8 md:mb-0">
                    <img src="/logo-white.png" alt="SAIDAA" className="h-4 mb-4" />
                    <p className="text-xs tracking-wider">© {new Date().getFullYear()} SAIDAA. All Rights Reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-foreground transition-colors uppercase tracking-widest text-[10px]">Facebook</a>
                    <a href="#" className="hover:text-foreground transition-colors uppercase tracking-widest text-[10px]">LinkedIn</a>
                    <a href="#" className="hover:text-foreground transition-colors uppercase tracking-widest text-[10px]">Twitter</a>
                    <a href="#" className="hover:text-foreground transition-colors uppercase tracking-widest text-[10px]">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
