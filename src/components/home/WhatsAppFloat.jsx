'use client'
import { useState } from 'react';
import { WaIcon } from './icons';
import { waLink, WA_MESSAGES, waTarget } from '@/lib/site';

export default function WhatsAppFloat() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-[60] md:bottom-6 md:right-6">
            <div className="group relative flex items-center justify-end">
                <div
                    className={`pointer-events-none absolute right-[70px] hidden items-center whitespace-nowrap rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-card transition-all duration-200 md:flex ${
                        open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                    }`}
                    aria-hidden="true"
                >
                    ¿Tienes alguna consulta? Escríbenos.
                </div>

                <a
                    href={waLink(WA_MESSAGES.default)}
                    {...waTarget}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                    aria-label="Hablar por WhatsApp"
                    className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-all duration-200 ease-out hover:scale-105 hover:shadow-xl focus:outline-2 focus:outline-offset-2 focus:outline-whatsapp"
                >
                    <WaIcon className="h-7 w-7" />
                </a>
            </div>
        </div>
    );
}