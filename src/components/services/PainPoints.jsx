import React, { useState, useEffect } from 'react';

const PainPoints = () => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState(['', '']);
  
    const events = [
        { id: '01', msg: "Tu hardware no sigue el ritmo de tu productividad." },
        { id: '02', msg: "Software genérico que te obliga a trabajar para él." },
        { id: '03', msg: "Inestabilidad de red en los momentos más críticos." },
        { id: '04', msg: "Equipos con señales de un fallo crítico inminente." },
        { id: '05', msg: "Incertidumbre sobre la seguridad de tus datos." },
        { id: '06', msg: "Ralentización de flujos por falta de mantenimiento." }
    ];

    useEffect(() => {
        let charIndex = 0;
        const txt1 = events[index].msg;
        const txt2 = events[index + 1].msg;
        
        // Reiniciamos los textos visibles
        setDisplayText(['', '']);

        const typingInterval = setInterval(() => {
            charIndex++;
            setDisplayText([
                txt1.substring(0, charIndex),
                txt2.substring(0, charIndex)
            ]);

            if (charIndex >= Math.max(txt1.length, txt2.length)) {
                clearInterval(typingInterval);
                
                // Pausa de 4 segundos para que el usuario lea, luego siguiente par
                setTimeout(() => {
                    setIndex((prev) => (prev + 2 >= events.length ? 0 : prev + 2));
                }, 4000);
            }
        }, 40); // Velocidad: 40ms por letra

        return () => clearInterval(typingInterval);
    }, [index]);

    return (
        <section className="w-full min-h-[450px] md:min-h-[400px] flex items-center justify-center bg-black font-mono px-6 py-12 border-y border-gray-900">
            <div className="max-w-xl w-full">
                <div className="mb-10">
                    <h2 className="text-cyan-400 text-lg md:text-xl mb-2">
                        {">"} analizando_entorno_it...
                    </h2>
                    <p className="text-gray-500 text-xs md:text-sm italic">
                        Detección de irregularidades en curso:
                    </p>
                </div>

                {/* Altura fija para evitar que la página "salte" mientras escribe */}
                <div className="min-h-[160px] md:min-h-[120px] space-y-8">
                    {displayText.map((text, i) => (
                        <div key={i} className="border-l-2 border-red-600/50 pl-4 h-[60px] md:h-[45px]">
                            <p className="text-sm md:text-base text-gray-300">
                                <span className="text-red-500 font-bold mr-2">
                                    [!] EVENT_0{index + i + 1}:
                                </span>
                                {text}
                                {text.length < (events[index + i]?.msg.length || 0) && (
                                    <span className="inline-block w-2 h-4 bg-red-500 ml-1 animate-pulse" />
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-4 border-t border-gray-900 flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-600">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                        Escaneando sistema
                    </span>
                    <span className="text-cyan-400">
                        Iniciar Protocolo R11 {">>>"}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
