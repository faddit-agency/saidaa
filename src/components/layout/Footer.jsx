import React from 'react';

const Footer = () => {
    return (
        <footer class="py-12 px-4 md:px-8 lg:px-12 bg-[#181818] text-white/60">
            <div class="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                <div class="mb-8 md:mb-0">
                    <img src="/logo-white.png" alt="SAIDAA" class="h-4 mb-4" />
                    <p class="text-xs tracking-wider">© {new Date().getFullYear()} SAIDAA. All Rights Reserved.</p>
                </div>
                <div class="flex space-x-6">
                    <a href="#" class="hover:text-white transition-colors uppercase tracking-widest text-[10px]">Facebook</a>
                    <a href="#" class="hover:text-white transition-colors uppercase tracking-widest text-[10px]">LinkedIn</a>
                    <a href="#" class="hover:text-white transition-colors uppercase tracking-widest text-[10px]">Twitter</a>
                    <a href="#" class="hover:text-white transition-colors uppercase tracking-widest text-[10px]">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
