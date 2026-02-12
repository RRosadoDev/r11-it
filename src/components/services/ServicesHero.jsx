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
        const typingSpeed = isDeleting ? 75 : 150;

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
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        }, typingSpeed);

        return () => clearTimeout(typeWriter);
    }, [charIndex, isDeleting, phraseIndex, phrases]);

    return (
        <header className="relative flex flex-col items-center justify-center min-h-screen text-center p-6">
            <div className="relative w-full max-w-3xl bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-8 shadow-lg z-10 backdrop-blur-sm">
                <div className="flex items-center space-x-2 pb-4 border-b border-gray-700 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-auto mono-font text-gray-500">R11 Terminal</span>
                </div>
                <pre className="text-left mono-font text-lg whitespace-pre-wrap leading-relaxed">
                    <span className="text-gray-500">system@r11:~$</span> <span className="text-cyan-400">exec --priority</span>
                    <br />
                    <span className="text-white">R11: Protocolo de </span>
                    <span className="text-green-400 font-bold">{text}</span>
                    <span className="animate-pulse text-green-400">_</span>
                </pre>
            </div>
            <a 
                href='#contact'
                className="mt-10 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 z-10 hover:shadow-cyan-500/20"
            >
                INICIAR CONSULTORÍA
            </a>
        </header>
    );
};

export default ServicesHero;
