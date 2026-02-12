import MainEntry from "@/components/MainEntry";

// 1. Exportamos los metadatos para SEO básico y Redes Sociales
export const metadata = {
  title: 'R11 | Soluciones IT & Desarrollo a Medida',
  description: 'Desarrollo web con React/Next.js, mantenimiento de hardware e instalación de redes seguras. Optimizamos tu infraestructura tecnológica.',
  keywords: 'desarrollo web, mantenimiento preventivo, instalación de redes, Next.js, soporte técnico IT, R11',
};

export default function Page() {
    // Definimos el JSON-LD de forma limpia
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "IT Consulting & Software Development",
        "provider": {
            "@type": "LocalBusiness",
            "name": "R11",
            "url": "https://it.r11.online",
            "image": "https://it.r11.online/assets/logo.png"
        },
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios IT",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Desarrollo de Software a Medida" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Mantenimiento Proactivo de Hardware" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Instalación de Redes y VPN" }
                }
            ]
        }
    };

    return (
        <>
            {/* 2. El script de datos estructurados para Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <MainEntry />
        </>
    );
};
