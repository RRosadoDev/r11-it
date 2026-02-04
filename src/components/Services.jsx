export default function Services() {
    const services = [
        {
            name: 'Sistemas a medida',
            icon: '/assets/coding.png',
            description: 'Diseño y construcción de sistemas web a medida utilizando Laravel y MySQL. Optimizo procesos de negocio para reducir tiempos operativos.',
            link: '#',
        },
        {
            name: 'Soporte de TI Integral',
            icon: '/assets/computer.png',
            description: 'Mantenimiento preventivo y correctivo de PCs, laptops y servidores. Brindo soporte técnico de primer y segundo nivel para asegurar la continuidad de tus servicios críticos.',
            link: '#',
        },
        {
            name: 'Redes y Conectividad',
            icon: '/assets/network.png',
            description: 'Instalación, configuración y monitoreo de equipos de red y routers. Implemento soluciones de escalamiento y seguridad para garantizar una conectividad interna eficiente y segura.',
            link: '#',
        },
        {
            name: 'Gestión de Datos y Cloud',
            icon: '/assets/cloud-computing.png',
            description: 'Administración de entornos Microsoft 365, gestión de correos corporativos y bases de datos SQL Server/MySQL. Especialista en respaldos y recuperación de información crítica.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            {/* <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4> */}
            <h2 className="text-center text-5xl font-Ovo">Mis servicios</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Soy un Ingeniero de Sistemas con más de 3 años de experiencia en el desarrollo de software escalable y la gestión de infraestructura tecnológica. 
                He colaborado con empresas del sector inmobiliario e industrial, optimizando su operatividad mediante soluciones personalizadas de alta eficiencia.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        {/* <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="/assets/right-arrow.png" alt="" className="w-4" /></a> */}
                    </div>
                ))}
            </div>
        </div>
    )
}