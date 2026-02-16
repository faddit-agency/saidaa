import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className={isHome ? '' : 'flex-grow pt-24 md:pt-32 max-w-[1920px] mx-auto w-full'}>
                <Outlet />
            </main>
            {!isHome && <Footer />}
        </div>
    );
};

export default Layout;
