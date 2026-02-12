'use client'
import React, { useEffect, useState } from 'react';

const ServicesHero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const phrases = [
        "desarrollo de software escalable",
        "optimización proactiva de hardware",
        "infraestructura de redes seguras",
        "automatización de procesos it",
        "soluciones tecnológicas a medida"
    ];

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const typeWriter = setTimeout(() => {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                setText(currentPhrase.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else {
                setText(currentPhrase.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        }, typingSpeed);

        return () => clearTimeout(typeWriter);
    }, [charIndex, isDeleting, phraseIndex]);

    return (
        <header className="relative flex flex-col items-center justify-center min-h-screen text-center p-6 overflow-hidden">
            <div className="relative w-full max-w-3xl bg-gray-900 bg-opacity-80 border border-gray-700 rounded-lg p-8 shadow-2xl z-10 backdrop-blur-md overflow-hidden">
                
                {/* LÍNEA DE ESCANEO (Efecto visual) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-scan z-20"></div>

                {/* BARRA SUPERIOR */}
                <div className="flex items-center space-x-2 pb-4 border-b border-gray-800 mb-6">
                    <div className="flex space-x-1.5">
                        <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
                    </div>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-gray-500">
                        R11 IT // Status: <span className="text-green-500 animate-pulse">Online</span>
                    </span>
                </div>

                {/* CONTENIDO PRINCIPAL */}
                <div className="text-left font-mono space-y-4">
                    <div className="text-gray-500 text-xs md:text-sm">
                        {">"} system.init_services_protocol() <br />
                        {">"} loading_modules... [OK]
                    </div>
                    
                    <pre className="text-lg md:text-2xl whitespace-pre-wrap leading-tight">
                        <span className="text-white font-light">R11: Protocolo de </span>
                        <br className="md:hidden" />
                        <span className="text-cyan-400 font-bold underline decoration-cyan-900">{text}</span>
                        <span className="animate-pulse text-cyan-400">|</span>
                    </pre>
                </div>

                {/* LÍNEA DE ESTADO INFERIOR */}
                <div className="mt-8 pt-4 border-t border-gray-800 flex flex-wrap justify-between gap-4 font-mono text-[10px] text-gray-600">
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-500">LATENCY:</span> 14ms
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-500">UPTIME:</span> 99.9%
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-500">ENCRYPTION:</span> AES-256
                    </div>
                </div>
            </div>

            {/* BOTÓN */}
            <a 
                href='#contact'
                className="mt-12 px-10 py-4 bg-transparent border-2 border-cyan-600 hover:bg-cyan-600 text-cyan-400 hover:text-white font-mono font-bold rounded-md tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] z-10 uppercase text-sm"
            >
                {">"} Ejecutar Consultoría
            </a>
        </header>
    );
};

export default ServicesHero;
