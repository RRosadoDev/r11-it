'use client'
import React, { useState, useEffect } from 'react';

const ServicesNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Servicios', href: '#services' },
        { label: 'Contacto', href: '#contact' },
        { label: 'Portfolio', href: '/portfolio' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? 'bg-[#0d0d0d]/80 backdrop-blur-md shadow-lg py-4 border-b border-gray-800'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="flex justify-between items-center max-w-7xl mx-auto px-6 relative">
                    <div className="z-50">
                        <a href="#hero">
                            <img src="/assets/logo_dark.png" alt="R11 Logo" className="h-8 md:h-12 w-auto object-contain cursor-pointer" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Burger Button */}
                    <button
                        className="md:hidden text-cyan-400 z-50 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Side Menu Drawer (Outside Nav) */}
            <div
                className={`fixed top-0 bottom-0 right-0 w-64 bg-[#0d0d0d] border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Close Button Inside Drawer */}
                <div className="flex justify-end p-6">
                    <button onClick={closeMenu} className="text-cyan-400 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col items-center mt-10 space-y-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className="text-xl text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Backdrop for Drawer (Outside Nav) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeMenu}
                ></div>
            )}
        </>
    );
};

export default ServicesNavbar;
