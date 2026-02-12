import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
  title: 'R11 | Soluciones IT & Desarrollo a Medida',
  description: 'Expertos en desarrollo web con Laravel/Vue/React/MySQL/SQL Server, mantenimiento proactivo de hardware e infraestructura de redes seguras. Optimizamos tu tecnología.',
  keywords: 'desarrollo web, mantenimiento preventivo, instalación de redes, Laravel, Vue, React, MySQL, SQL Server, soporte técnico IT, R11 online',
  openGraph: {
    title: 'R11 | Consultoría Tecnológica de Alto Nivel',
    description: 'Transformamos tus desafíos en soluciones digitales. Desarrollo, Redes y Mantenimiento.',
    url: 'https://it.r11.online',
    siteName: 'R11 IT',
    images: [
      {
        url: '/assets/logo.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            </body>
        </html>
    );
}
