'use client'
import React, { useState, useEffect, useRef } from 'react';

const ServicesGrid = () => {
    const rawServices = [
        {
            title: "Desarrollo a Medida",
            description: "Creación de aplicaciones web, herramientas y soluciones personalizadas para tus desafíos.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 18" />
                </svg>
            )
        },
        {
            title: "Mantenimiento Proactivo",
            description: "Limpieza, optimización y reparación de hardware para una operación sin interrupciones.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.033a17.255 17.255 0 015.905-5.906c-2.427-.456-4.991-1.433-7.38-2.922-2.197-1.369-4.259-2.964-6.148-4.743.327-.328.68-.639 1.05-.929 1.11-.868 2.377-1.558 3.737-2.022 2.95-.99 6.074-.99 9.023 0 1.25.42 2.45.975 3.593 1.666-.09.38-.184.764-.282 1.155a21.14 21.14 0 00-.73 8.35c.18 1.186.446 2.352.793 3.488.583 1.884 1.446 3.655 2.54 5.253a9.294 9.294 0 01-2.934 3.033c-2.887 1.768-6.527 1.815-9.458.125l-.234-.131z" />
                </svg>
            )
        },
        {
            title: "Software & Setup",
            description: "Instalación y configuración de programas críticos, sistemas operativos y redes.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            )
        },
        {
            title: "Instalación de redes",
            description: "Instalación de redes locales y de internet.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 18" />
                </svg>
            )
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const containerRef = useRef(null);

    // Auto-advance loop? Maybe nice, but let's stick to user interaction first, or slow auto
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) {
                setActiveIndex((prev) => (prev + 1) % rawServices.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [isDragging, rawServices.length]);


    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        if (diff > 50) { // Swipe Left (Next)
            setActiveIndex((prev) => (prev + 1) % rawServices.length);
            setIsDragging(false);
        } else if (diff < -50) { // Swipe Right (Prev)
            setActiveIndex((prev) => (prev - 1 + rawServices.length) % rawServices.length);
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // Mouse support for desktop swipe
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    }
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        if (startX - e.clientX > 60) { // Next
            setActiveIndex((prev) => (prev + 1) % rawServices.length);
            setIsDragging(false);
        } else if (startX - e.clientX < -60) { // Prev
            setActiveIndex((prev) => (prev - 1 + rawServices.length) % rawServices.length);
            setIsDragging(false);
        }
    }


    const getCardStyle = (index) => {
        const total = rawServices.length;
        // Calculate shortest distance in circular array
        let diff = (index - activeIndex + total) % total;
        if (diff > total / 2) diff -= total;

        const isActive = diff === 0;
        const xOffset = diff * 110; // Spacing logic
        const scale = isActive ? 1 : 0.85;
        const rotateY = isActive ? 0 : diff > 0 ? -25 : 25; // Turn inwards to center
        const zIndex = isActive ? 20 : 10 - Math.abs(diff);

        // Hide cards that are not the active one or immediate neighbors
        const isVisible = Math.abs(diff) <= 1;
        const opacity = isVisible ? (isActive ? 1 : 0.6) : 0;
        const blur = isActive ? '0px' : '2px';

        return {
            transform: `perspective(1000px) translateX(${xOffset}%) scale(${scale}) rotateY(${rotateY}deg)`,
            zIndex: zIndex,
            opacity: opacity,
            filter: `blur(${blur})`,
            transition: 'all 0.5s ease-out',
            pointerEvents: isVisible ? 'auto' : 'none'
        };
    };

    return (
        <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden py-10">
            <h2 className="text-4xl text-white text-center mb-10 font-bold z-20">Servicios</h2>

            <div
                ref={containerRef}
                className="relative w-full h-[60vh] max-w-5xl flex items-center justify-center perspective-container"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
            >
                {rawServices.map((service, index) => {
                    const style = getCardStyle(index);
                    return (
                        <div
                            key={index}
                            className="absolute w-[80%] md:w-[40%] h-full top-0 p-4 cursor-pointer select-none"
                            style={style}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="bg-[#0f1115] border border-gray-800 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center shadow-2xl shadow-cyan-900/20 card-glow">
                                <div className="mx-auto mb-8 w-24 h-24 text-cyan-400 bg-cyan-900/10 rounded-full flex items-center justify-center flex-shrink-0 animate-float">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl text-white mb-6 font-bold tracking-wide">{service.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>

                                {/* Decoration lines */}
                                <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-transparent mt-8 rounded-full"></div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-12 space-x-3 z-20">
                {rawServices.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-cyan-500 w-8' : 'bg-gray-600 hover:bg-gray-500'}`}
                    />
                ))}
            </div>

            <style jsx>{`
                .perspective-container {
                    perspective: 1200px; 
                    transform-style: preserve-3d;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
    );
};

export default ServicesGrid;
