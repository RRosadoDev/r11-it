'use client'
import React, { useState, useEffect, useRef } from 'react';

const ServicesGrid = () => {
    const services = [
        {
            title: "Desarrollo a Medida",
            description: "Creación de aplicaciones web, herramientas y soluciones personalizadas para tus desafíos.",
            icon: (                
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    strokeWidth={1.5} 
                    className="w-16 h-16" 
                    shapeRendering="geometricPrecision" 
                    textRendering="geometricPrecision" 
                    imageRendering="optimizeQuality" 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    viewBox="0 0 512 380.24"
                >
                    <path fill="currentColor" d="M34.66 0h442.68C496.4 0 512 15.6 512 34.66v310.92c0 19.06-15.6 34.66-34.66 34.66H34.66C15.6 380.24 0 364.64 0 345.58V34.66C0 15.6 15.6 0 34.66 0zm173.92 264.36c5.76 5.04 6.34 13.81 1.3 19.57-5.05 5.76-13.81 6.35-19.57 1.3l-52.73-46.19c-5.76-5.05-6.35-13.81-1.3-19.58.43-.49.89-.94 1.37-1.36l52.66-46.14c5.76-5.04 14.52-4.46 19.57 1.31 5.04 5.76 4.46 14.52-1.3 19.57l-40.82 35.76 40.82 35.76zm113.11 20.87c-5.76 5.05-14.52 4.46-19.57-1.3-5.04-5.76-4.46-14.53 1.3-19.57l40.82-35.76-40.82-35.76c-5.76-5.05-6.34-13.81-1.3-19.57 5.05-5.77 13.81-6.35 19.57-1.31l52.66 46.14c.48.42.94.87 1.37 1.36 5.05 5.77 4.46 14.53-1.3 19.58l-52.73 46.19zm-65.95-124.31c1.74-7.47 9.22-12.12 16.69-10.38 7.47 1.74 12.12 9.22 10.38 16.69l-30.13 129.04c-1.74 7.48-9.22 12.13-16.69 10.39-7.47-1.74-12.12-9.22-10.38-16.69l30.13-129.05zM22.03 97.05v251.91a9.56 9.56 0 0 0 9.59 9.59H481.8a9.56 9.56 0 0 0 9.59-9.59V97.05H22.03zm422.32-58.09c9.46 0 17.12 7.67 17.12 17.12 0 9.46-7.66 17.12-17.12 17.12-9.45 0-17.12-7.66-17.12-17.12 0-9.45 7.67-17.12 17.12-17.12zm-116.03 0c9.46 0 17.12 7.67 17.12 17.12 0 9.46-7.66 17.12-17.12 17.12-9.45 0-17.11-7.66-17.11-17.12 0-9.45 7.66-17.12 17.11-17.12zm58.02 0c9.45 0 17.12 7.67 17.12 17.12 0 9.46-7.67 17.12-17.12 17.12-9.45 0-17.12-7.66-17.12-17.12 0-9.45 7.67-17.12 17.12-17.12z"/>
                </svg>
            )
        },
        {
            title: "Mantenimiento Proactivo",
            description: "Limpieza, optimización y reparación de hardware para una operación sin interrupciones.",
            icon: (
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth={1.5} 
                    className="w-16 h-16" 
                    shapeRendering="geometricPrecision" 
                    textRendering="geometricPrecision" 
                    imageRendering="optimizeQuality" 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    viewBox="0 0 512 387.72">
                        <path fill="currentColor" d="M150.22 108.7c1.83-4.93 5.06-8.44 9.68-10.55 4.62-2.12 9.42-2.3 14.31-.46l26.66 9.86c6.82-10.84 15.86-20.88 25.22-29.62L213.23 49.9c-2.17-4.72-2.37-9.47-.6-14.24 1.79-4.83 5.02-8.25 9.74-10.41L257.56 9.1c4.5-2.07 9.17-2.28 14.1-.54 4.85 1.74 8.36 4.97 10.52 9.7l11.78 25.66c12.65-2.55 25.71-3.44 38.58-2.52l11.09-29.25c1.6-4.83 4.68-8.31 9.36-10.46 4.62-2.12 9.37-2.23 14.33-.42l35.97 13.37c4.94 1.83 8.45 5.06 10.57 9.68 2.11 4.61 2.29 9.42.45 14.31l-9.86 26.66c10.83 6.82 20.87 15.86 29.62 25.22l28.02-12.86c4.73-2.17 9.48-2.37 14.25-.6 4.83 1.79 8.25 5.02 10.41 9.74l16.15 35.19c2.07 4.51 2.27 9.16.53 14.1-1.73 4.84-4.96 8.36-9.69 10.52l-25.66 11.78c2.59 12.84 3.36 25.83 2.67 38.91l29.1 10.76c4.83 1.61 8.31 4.68 10.46 9.37 2.12 4.61 2.23 9.36.42 14.33l-13.22 36.3c-1.92 4.74-5.22 8.11-9.83 10.22-4.62 2.12-9.35 2.45-14.17.79l-26.81-10.19c-6.96 10.9-15.76 20.79-25.21 29.62l12.86 28.03c2.17 4.72 2.37 9.46.6 14.24-1.79 4.83-5.02 8.25-9.74 10.41l-35.19 16.15c-4.51 2.07-9.17 2.27-14.1.53-4.85-1.74-8.36-4.96-10.53-9.69l-11.77-25.66c-12.85 2.6-25.83 3.36-38.91 2.67l-10.76 29.1c-1.61 4.83-4.75 8.34-9.48 10.51-4.79 2.2-9.5 2.29-14.22.37l-36.3-13.23c-4.75-1.91-8.11-5.21-10.23-9.82-2.12-4.62-2.44-9.35-.78-14.17l10.18-26.8c-3.54-2.23-7-4.7-10.36-7.34l26.49-13.34c6.17-2.96 11.28-3.39 16.08-2.81 3.25 1.6 6.58 3.03 9.99 4.3 13.15 4.88 27.11 7.07 41.81 6.79 44.52-1.39 84.89-30.26 100.39-72.05 10.24-27.62 8.85-57.83-3.4-84.52-18.79-40.93-58.49-65.37-103.67-64.48-29.42.94-58.38 14.24-78.28 35.93-12.77 14.29-21.5 30.83-25.84 48.31-3.74 6.68-7.38 12.01-10.86 13.67l.03.06-28.85 14.16c-.02-3.47.08-6.93.32-10.35l-29.24-11.09c-4.83-1.61-8.31-4.68-10.46-9.37-2.12-4.62-2.23-9.36-.42-14.33l13.37-35.97zM76.47 387.6c-21.09 1.29-42.99-7.8-60.19-23.99 86.39.08 69.92-104.82-16.28-69.23 11.8-42.95 50.13-59.96 91.4-51.04 21.83 4.7 34.79 8.63 55.41-.7l73.31-35.99c39.09-18.59 31.6-88.19 97.31-92.18 21.09-1.3 42.96 7.81 60.2 23.99-86.4-.09-69.93 104.81 16.28 69.22-11.8 42.95-50.14 59.96-91.4 51.04-18.11-3.94-31.98-11.92-58.34.87l-69.29 34.89c-13.73 7.24-18.37 11.98-26 25.4-18.67 32.83-28.28 65.03-72.41 67.72z"/>
                </svg>
            )
        },
        {
            title: "Software & Setup",
            description: "Instalación y configuración de programas críticos, sistemas operativos y redes.",
            icon: (
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth={1.5} 
                    className="w-16 h-16"
                    shapeRendering="geometricPrecision" 
                    textRendering="geometricPrecision" 
                    imageRendering="optimizeQuality" 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    viewBox="0 0 512 344.74"
                >
                    <path fill="currentColor" d="M57.18 0h384.51c6.08 0 11.05 4.96 11.05 11.05v33.42h-16.08V27.16c0-5.36-4.37-9.76-9.76-9.76H72c-5.36 0-9.79 4.38-9.76 9.76v108.86c-5.54.98-10.92 2.41-16.11 4.26V11.05C46.13 4.96 51.1 0 57.18 0zm51.66 201.4c-.91-.91-1.97-1.36-3.21-1.36-1.23 0-2.31.45-3.2 1.36l-4.88 4.86a35.04 35.04 0 0 0-4.14-2.25 45.04 45.04 0 0 0-4.43-1.72v-7.49c0-1.26-.43-2.32-1.31-3.2-.87-.88-1.93-1.31-3.2-1.31h-9.4c-1.2 0-2.24.43-3.15 1.31-.89.88-1.34 1.94-1.34 3.2v6.86c-1.57.37-3.1.83-4.56 1.4-1.48.57-2.88 1.22-4.21 1.94l-5.4-5.33c-.85-.89-1.88-1.35-3.13-1.35-1.23 0-2.3.46-3.2 1.35l-6.58 6.6c-.91.9-1.35 1.96-1.35 3.2 0 1.23.44 2.31 1.35 3.2l4.87 4.89c-.85 1.3-1.59 2.69-2.25 4.14-.66 1.44-1.23 2.93-1.73 4.42h-7.48c-1.27 0-2.33.43-3.2 1.31-.88.88-1.32 1.94-1.32 3.2v9.4c0 1.2.44 2.25 1.31 3.15.88.9 1.94 1.35 3.21 1.35h6.85c.37 1.57.83 3.09 1.4 4.55.57 1.48 1.22 2.91 1.94 4.3l-5.33 5.31c-.89.85-1.35 1.88-1.35 3.13 0 1.23.46 2.3 1.35 3.21l6.6 6.67c.9.84 1.97 1.26 3.2 1.26 1.23 0 2.31-.42 3.2-1.26l4.89-4.96c1.31.84 2.69 1.58 4.14 2.25 1.45.66 2.93 1.23 4.42 1.72v7.49c0 1.26.43 2.32 1.31 3.2.88.88 1.94 1.31 3.2 1.31h9.4c1.2 0 2.25-.43 3.16-1.31.89-.88 1.34-1.94 1.34-3.2v-6.86c1.57-.37 3.09-.83 4.56-1.4 1.48-.57 2.91-1.22 4.29-1.94l5.32 5.33c.85.89 1.89 1.35 3.16 1.35 1.27 0 2.32-.46 3.17-1.35l6.67-6.59c.85-.91 1.26-1.98 1.26-3.21s-.41-2.31-1.26-3.2l-4.96-4.89c.85-1.3 1.59-2.69 2.25-4.14.66-1.45 1.23-2.93 1.72-4.42h7.49c1.26 0 2.32-.43 3.2-1.31.88-.88 1.31-1.94 1.31-3.2v-9.4c0-1.2-.43-2.25-1.31-3.16-.88-.89-1.94-1.33-3.2-1.33h-6.85c-.38-1.51-.84-3.02-1.41-4.52-.57-1.51-1.22-2.92-1.94-4.25l5.33-5.4c.89-.85 1.36-1.88 1.36-3.13 0-1.23-.46-2.3-1.36-3.21l-6.59-6.57zM78.6 218.09c2.53 0 4.92.48 7.18 1.43 2.25.98 4.21 2.28 5.87 3.93 1.65 1.67 2.95 3.62 3.93 5.87.95 2.27 1.43 4.65 1.43 7.18 0 2.52-.48 4.91-1.43 7.18-.98 2.24-2.28 4.2-3.93 5.87-1.66 1.64-3.62 2.95-5.87 3.92-2.26.96-4.65 1.44-7.18 1.44-2.52 0-4.91-.48-7.17-1.44-2.25-.97-4.21-2.28-5.87-3.92-1.65-1.67-2.96-3.62-3.93-5.87-.96-2.27-1.43-4.66-1.43-7.18 0-2.53.47-4.91 1.43-7.18.97-2.25 2.28-4.2 3.93-5.87 1.66-1.65 3.62-2.95 5.87-3.93 2.26-.95 4.65-1.43 7.17-1.43zm1.38-62.13c44.16 0 79.97 35.81 79.97 79.98 0 44.16-35.81 79.97-79.97 79.97C35.81 315.91 0 280.1 0 235.94c0-44.17 35.81-79.98 79.98-79.98zm310.83-88.93h107.34c7.62 0 13.85 6.22 13.85 13.85v247.94c0 7.61-6.23 13.84-13.85 13.84H390.81c-7.62 0-13.85-6.23-13.85-13.84V80.88c0-7.63 6.23-13.85 13.85-13.85zm86.63 58.4h12.74v4.64h-12.74v-4.64zm-32.97 159.92c8.3 0 15.05 6.74 15.05 15.04 0 8.31-6.75 15.06-15.05 15.06s-15.05-6.75-15.05-15.06c.02-8.3 6.75-15.04 15.05-15.04zm-48.76-173.04h97.54c1.6 0 2.89 1.3 2.89 2.88v17.79a2.91 2.91 0 0 1-2.89 2.89h-97.54c-1.6 0-2.89-1.31-2.89-2.89v-17.79a2.89 2.89 0 0 1 2.89-2.88zm-41.88 172.07H169.1c7.17-13.13 11.53-28 12.24-43.8h172.49v43.8zM199.3 299.64h100.27c.26 17.34 7.41 32.89 26.76 45.1H172.54c15.48-11.22 26.83-24.86 26.76-45.1z"/>
                </svg>
            )
        },
        {
            title: "Instalación de redes",
            description: "Instalación de redes locales y de internet.",
            icon: (
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth={1.5} 
                    className="w-16 h-16"
                    shapeRendering="geometricPrecision" 
                    textRendering="geometricPrecision" 
                    imageRendering="optimizeQuality" 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    viewBox="0 0 512 467.22"
                >
                    <path fill="currentColor" d="M412.553 233.391h26.573c11.135 0 20.329 9.196 20.329 20.329v26.647c0 11.21-9.119 20.329-20.329 20.329h-26.573c-11.133 0-20.329-9.196-20.329-20.329V253.72c0-11.217 9.112-20.329 20.329-20.329zM38.349 409.235h158.887c1.46-8.102 8.57-14.283 17.081-14.283h21.917v-47.055H31.249C14.057 347.897 0 333.82 0 316.648v-99.209c0-17.214 14.035-31.249 31.249-31.249h35.198v-27.585H32.756c-17.222 0-31.254-14.033-31.254-31.254V31.254C1.502 14.027 15.529 0 32.756 0h448C497.942 0 512 14.084 512 31.254v96.097c0 17.182-14.077 31.254-31.244 31.254h-35.9v27.585h34.398c17.177 0 31.249 14.099 31.249 31.249v99.209c0 17.207-14.043 31.249-31.249 31.249H274.266v47.055h21.915c8.464 0 15.606 6.213 17.076 14.283h158.889c5.319 0 9.671 4.356 9.671 9.67v24.362c0 5.314-4.357 9.671-9.671 9.671H313.262c-1.465 8.087-8.595 14.282-17.081 14.282h-81.864c-8.461 0-15.604-6.214-17.076-14.282H38.349c-5.314 0-9.67-4.352-9.67-9.671v-24.362c0-5.319 4.351-9.67 9.67-9.67zM406.823 186.19v-27.585H104.479v27.585h302.344zm5.73-140.54h26.573c11.135 0 20.329 9.196 20.329 20.329v26.647c0 11.21-9.119 20.329-20.329 20.329h-26.573c-11.133 0-20.329-9.196-20.329-20.329V65.979c0-11.217 9.112-20.329 20.329-20.329zm0 14.728h26.573a5.613 5.613 0 015.601 5.601v26.647c0 3.083-2.519 5.601-5.601 5.601h-26.573a5.613 5.613 0 01-5.601-5.601V65.979a5.612 5.612 0 015.601-5.601zM122.641 228.799h35.049v24.139h-35.049v-24.139zm0 52.35h35.049v24.139h-35.049v-24.139zm0-240.091h35.049v24.139h-35.049V41.058zm0 52.35h35.049v24.139h-35.049V93.408zM67.938 228.799h35.049v24.139H67.938v-24.139zm0 52.35h35.049v24.139H67.938v-24.139zm0-240.091h35.049v24.139H67.938V41.058zm0 52.35h35.049v24.139H67.938V93.408zm-35.182-78.68h308.425v129.149H32.756c-9.092 0-16.527-7.437-16.527-16.526V31.254c0-9.097 7.43-16.526 16.527-16.526zm323.152 0h124.848c9.087 0 16.516 7.434 16.516 16.526v96.097c0 9.085-7.434 16.526-16.516 16.526H355.908V14.728zM31.249 200.92h309.932v132.247H31.249c-9.089 0-16.519-7.437-16.519-16.519v-99.209c0-9.09 7.43-16.519 16.519-16.519zm324.659 0h123.346c9.082 0 16.519 7.429 16.519 16.519v99.209c0 9.082-7.437 16.519-16.519 16.519H355.908V200.92zM217.59 404.772h75.318c5.945 0 10.809 4.896 10.809 10.809v31.011c0 5.913-4.896 10.809-10.809 10.809H217.59c-5.913 0-10.809-4.864-10.809-10.809v-31.011c0-5.946 4.864-10.809 10.809-10.809zm194.963-156.653h26.573a5.613 5.613 0 015.601 5.601v26.647c0 3.083-2.519 5.601-5.601 5.601h-26.573a5.613 5.613 0 01-5.601-5.601V253.72a5.612 5.612 0 015.601-5.601z"/>
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
                setActiveIndex((prev) => (prev + 1) % services.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [isDragging, services.length]);


    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        if (diff > 50) { // Swipe Left (Next)
            setActiveIndex((prev) => (prev + 1) % services.length);
            setIsDragging(false);
        } else if (diff < -50) { // Swipe Right (Prev)
            setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
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
            setActiveIndex((prev) => (prev + 1) % services.length);
            setIsDragging(false);
        } else if (startX - e.clientX < -60) { // Prev
            setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
            setIsDragging(false);
        }
    }

    const getCardStyle = (index) => {
        const total = services.length;
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
                {services.map((service, index) => {
                    const style = getCardStyle(index);
                    return (
                        <div
                            key={index}
                            className="absolute w-[80%] md:w-[40%] h-full top-0 p-4 cursor-pointer select-none"
                            style={style}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="bg-[#0f1115] border border-gray-800 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center shadow-2xl shadow-cyan-900/20 card-glow">
                                <div className="mx-auto w-24 h-24 text-cyan-400 bg-cyan-900/10 rounded-full flex items-center justify-center flex-shrink-0 animate-float">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl text-white mb-2 font-bold tracking-wide">{service.title}</h4>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                                {/* Decoration lines */}
                                <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-transparent mt-3 rounded-full"></div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-12 space-x-3 z-20">
                {services.map((_, index) => (
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
