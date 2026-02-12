import React from 'react';

const ServicesGrid = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-6" id="services">
            <h2 className="text-4xl text-white text-center mb-12 font-bold">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <div className="bg-gray-900 bg-opacity-70 border border-gray-800 rounded-lg p-8 text-center card-glow backdrop-blur-sm cursor-default">
                    <div className="mx-auto mb-6 w-20 h-20 text-cyan-400 flex items-center justify-center">
                        {/* Placeholder Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.033a17.255 17.255 0 015.905-5.906c-2.427-.456-4.991-1.433-7.38-2.922-2.197-1.369-4.259-2.964-6.148-4.743.327-.328.68-.639 1.05-.929 1.11-.868 2.377-1.558 3.737-2.022 2.95-.99 6.074-.99 9.023 0 1.25.42 2.45.975 3.593 1.666-.09.38-.184.764-.282 1.155a21.14 21.14 0 00-.73 8.35c.18 1.186.446 2.352.793 3.488.583 1.884 1.446 3.655 2.54 5.253a9.294 9.294 0 01-2.934 3.033c-2.887 1.768-6.527 1.815-9.458.125l-.234-.131z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl text-white mb-4 font-bold">Mantenimiento Proactivo</h3>
                    <p className="text-gray-400">Limpieza, optimización y reparación de hardware para una operación sin interrupciones.</p>
                </div>

                {/* Service 2 */}
                <div className="bg-gray-900 bg-opacity-70 border border-gray-800 rounded-lg p-8 text-center card-glow backdrop-blur-sm cursor-default">
                    <div className="mx-auto mb-6 w-20 h-20 text-cyan-400 flex items-center justify-center">
                        {/* Placeholder Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                    </div>
                    <h3 className="text-2xl text-white mb-4 font-bold">Software & Setup</h3>
                    <p className="text-gray-400">Instalación y configuración de programas críticos, sistemas operativos y redes.</p>
                </div>

                {/* Service 3 */}
                <div className="bg-gray-900 bg-opacity-70 border border-gray-800 rounded-lg p-8 text-center card-glow backdrop-blur-sm cursor-default">
                    <div className="mx-auto mb-6 w-20 h-20 text-cyan-400 flex items-center justify-center">
                        {/* Placeholder Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 18" />
                        </svg>
                    </div>
                    <h3 className="text-2xl text-white mb-4 font-bold">Desarrollo a Medida</h3>
                    <p className="text-gray-400">Creación de aplicaciones web, herramientas y soluciones personalizadas para tus desafíos.</p>
                </div>

            </div>
        </section>
    );
};

export default ServicesGrid;
