import HomePage from "@/components/home/HomePage";

export const metadata = {
  title: 'R11 | Soporte TI y Software a Medida para tu Negocio',
  description: 'Soporte de TI y desarrollo de software a medida para pequeñas y medianas empresas. Atendemos tus computadoras, internet, sistemas de ventas, inventarios y citas.',
  keywords: 'soporte técnico para empresas, soporte TI para PYMEs, mantenimiento de computadoras, soporte informático, desarrollo de software a medida, sistema de inventarios, sistema POS, software para restaurantes, software para ferreterías, sistema para clínicas, automatización de procesos, R11',
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "R11",
        "description": "Servicios de TI y desarrollo de software a medida para pequeñas y medianas empresas.",
        "url": "https://it.r11-dev.com",
        "image": "https://it.r11-dev.com/assets/logo.png",
        "areaServed": "PE",
        "priceRange": "$$",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Soporte de TI para empresas" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Mantenimiento de computadoras" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Instalación y configuración de redes WiFi" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Desarrollo de software a medida" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Sistemas de gestión e inventarios" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Punto de venta (POS)" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Sistemas de citas y reservas" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Automatización de procesos" }
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HomePage />
        </>
    );
};