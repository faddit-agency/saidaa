import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 px-4 md:px-8 lg:px-12 border-t border-border mt-auto bg-background">
            <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                <div className="mb-4 md:mb-0 flex items-center">
                    <img src="/logo-white.png" alt="SAIDAA" className="h-4 mr-2" />
                    <span>© {new Date().getFullYear()} SAIDAA. All Rights Reserved.</span>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-foreground transition-colors p-2 rounded-full border border-border">
                        <span className="sr-only">Facebook</span>
                        f
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors p-2 rounded-full border border-border">
                        <span className="sr-only">LinkedIn</span>
                        in
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors p-2 rounded-full border border-border">
                        <span className="sr-only">Twitter</span>
                        t
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
