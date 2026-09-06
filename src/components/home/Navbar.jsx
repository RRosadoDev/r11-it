'use client'
import { useState } from 'react';
import Image from 'next/image';
import { WaIcon, Menu, X } from './icons';
import { waLink, WA_MESSAGES, waTarget } from '@/lib/site';

const LINKS = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Soporte TI', href: '#soporte' },
    { label: 'Software a medida', href: '#software' },
    { label: 'Cómo trabajamos', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="container flex h-[72px] items-center justify-between gap-4">
                <a href="#inicio" aria-label="R11 — ir al inicio" className="shrink-0">
                    <Image
                        src="/assets/logo.png"
                        alt="R11"
                        width={1080}
                        height={695}
                        className="h-9 w-auto object-contain"
                        priority
                    />
                </a>

                <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
                    {LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[15px] font-medium text-slate-600 transition-colors hover:text-navyblue"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href={waLink(WA_MESSAGES.default)}
                        {...waTarget}
                        className="hidden md:inline-flex h-11 items-center gap-2 rounded-lg bg-whatsapp px-4 font-semibold text-[15px] text-white transition-all duration-200 hover:bg-[#1fb959] hover:shadow-card-hover"
                    >
                        <WaIcon className="w-[18px] h-[18px]" />
                        Hablar por WhatsApp
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsOpen((v) => !v)}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isOpen}
                        className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-navy transition-colors hover:bg-slate-50"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden border-t border-slate-200 bg-white">
                    <nav className="container flex flex-col gap-1 py-6" aria-label="Móvil">
                        {LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={close}
                                className="rounded-lg px-4 py-3 text-lg font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-navyblue"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={waLink(WA_MESSAGES.default)}
                            {...waTarget}
                            className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp font-semibold text-white transition-colors hover:bg-[#1fb959]"
                        >
                            <WaIcon className="w-[18px] h-[18px]" />
                            Hablar por WhatsApp
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}