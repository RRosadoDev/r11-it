import Image from 'next/image';
import { WaIcon } from './icons';
import { waLink, WA_MESSAGES, waTarget } from '@/lib/site';

const NAV = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Soporte TI', href: '#soporte' },
    { label: 'Software a medida', href: '#software' },
    { label: 'Cómo trabajamos', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="container py-14">
                <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
                    <div>
                        <Image
                            src="/assets/logo.png"
                            alt="R11"
                            width={1080}
                            height={695}
                            className="h-10 w-auto object-contain"
                        />
                        <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-slate-500">
                            Tecnología que funciona para tu negocio.
                        </p>
                    </div>

                    <nav aria-label="Enlaces del pie">
                        <p className="text-sm font-semibold text-navy">Navegación</p>
                        <ul className="mt-4 space-y-2.5">
                            {NAV.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-[15px] text-slate-500 transition-colors hover:text-navyblue"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <p className="text-sm font-semibold text-navy">Contacto</p>
                        <ul className="mt-4 space-y-2.5">
                            <li>
                                <a
                                    href={waLink(WA_MESSAGES.default)}
                                    {...waTarget}
                                    className="inline-flex items-center gap-2 text-[15px] text-slate-500 transition-colors hover:text-emerald-600"
                                >
                                    <WaIcon className="w-4 h-4 text-emerald-500" />
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <span className="text-[15px] text-slate-500">
                                    Servicios de TI y Software a Medida
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
                    © {new Date().getFullYear()} R11. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}