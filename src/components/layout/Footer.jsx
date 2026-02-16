import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-border mt-auto">
            <div className="container mx-auto">
                <div className="flex flex-col items-start mb-12">
                    <img src="/logo-white.png" alt="SAIDAA" className="h-4 w-auto object-contain mb-4" />
                    <p className="text-[11px] tracking-wider text-muted-foreground">© {new Date().getFullYear()} SAIDAA. All Rights Reserved.</p>
                </div>
                <div className="flex justify-end space-x-8 items-center text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase pt-8 border-t border-border/50">
                    <a href="#" className="hover:text-foreground transition-colors">Facebook</a>
                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
