'use client'
import React from 'react';
import ServicesNavbar from './services/ServicesNavbar';
import ServicesHero from './services/ServicesHero';
import PainPoints from './services/PainPoints';
import ServicesGrid from './services/ServicesGrid';
import ServicesFooter from './services/ServicesFooter';
import ServicesContact from './services/ServicesContact';

const MainEntry = () => {
    return (
        <div className="min-h-screen bg-[#0d0d0d] text-[#e0e0e0] font-sans selection:bg-cyan-500 selection:text-white">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono&display=swap');
                
                body {
                    font-family: 'Inter', sans-serif;
                }
                .mono-font {
                    font-family: 'JetBrains Mono', monospace;
                }
                .grid-background {
                    background-image: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="%23262626" stroke-width="0.5" /></pattern><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="url(%23smallGrid)" /><path d="M 100 0 L 0 0 L 0 100" fill="none" stroke="%23262626" stroke-width="1" /></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)" /></svg>');
                    background-size: cover;
                }
                .card-glow {
                    transition: all 0.3s ease;
                    box-shadow: 0 0 0px rgba(0, 255, 255, 0.4);
                }
                .card-glow:hover {
                    box-shadow: 0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4);
                    border-color: rgba(0, 255, 255, 0.8);
                }
            `}</style>

            <div className="grid-background h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
                <ServicesNavbar />

                <section className="snap-start min-h-screen">
                    <ServicesHero />
                </section>

                <section className="snap-start min-h-screen flex items-center justify-center">
                    <PainPoints />
                </section>

                <section className="snap-start min-h-screen py-20" id="services">
                    <ServicesGrid />
                </section>

                <section className="snap-start min-h-screen flex flex-col justify-center" id="contact">
                    <ServicesContact />
                    <ServicesFooter />
                </section>
            </div>
        </div>
    );
};

export default MainEntry;
