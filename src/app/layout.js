import { Outfit, Ovo, Inter } from "next/font/google";
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
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://it.r11-dev.com'),
  title: 'R11 | Soporte TI y Software a Medida para tu Negocio',
  description: 'Soporte de TI y desarrollo de software a medida para pequeñas y medianas empresas. Atendemos tus computadoras, internet, sistemas de ventas, inventarios y citas. WhatsApp: te ayudamos sin tecnicismos.',
  keywords: 'soporte técnico para empresas, soporte TI para PYMEs, mantenimiento de computadoras, desarrollo de software a medida, sistemas para empresas, sistema de inventarios, sistema POS, software para restaurantes, software para ferreterías, sistema para clínicas, automatización de procesos, R11',
  openGraph: {
    title: 'R11 | Soporte TI y Software a Medida para tu Negocio',
    description: 'La tecnología de tu negocio funcionando sin complicaciones. Soporte TI, sistemas de gestión y software a medida para PYMEs.',
    url: 'https://it.r11-dev.com',
    siteName: 'R11',
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
        <html lang="es">
            <body className={`${outfit.variable} ${ovo.variable} ${inter.variable} font-Outfit leading-8 dark:bg-darkTheme dark:text-white overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}