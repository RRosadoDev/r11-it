'use client'
import { WhatsAppBtn, OutlineBtn } from './ui';
import Reveal from './Reveal';
import { waLink, WA_MESSAGES } from '@/lib/site';

export default function FinalCta() {
    return (
        <section className="relative overflow-hidden bg-navy py-20 md:py-28">
            <div
                className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
                aria-hidden="true"
            />
            <div
                className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
                aria-hidden="true"
            />

            <div className="container relative">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="text-[30px] md:text-[40px] lg:text-[44px] font-bold leading-[1.1] tracking-tight text-white">
                        Cuéntanos qué problema tiene tu negocio.
                    </h2>
                    <p className="mt-6 text-base md:text-lg leading-[1.65] text-slate-300">
                        Puede ser una computadora, tu conexión a internet, un sistema, inventario,
                        ventas o una tarea que haces manualmente todos los días.
                    </p>
                    <p className="mt-3 text-base md:text-lg leading-[1.65] text-slate-300">
                        Explícanos qué está pasando y te diremos cómo podemos ayudarte.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                        <WhatsAppBtn href={waLink(WA_MESSAGES.default)}>
                            Hablar con R11 por WhatsApp
                        </WhatsAppBtn>
                        <OutlineBtn href={waLink(WA_MESSAGES.cotizacion)} onDark>
                            Solicitar cotización
                        </OutlineBtn>
                    </div>

                    <p className="mt-6 text-sm text-slate-400">
                        Sin compromiso. Sin tecnicismos. Sin obligarte a contratar nada.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}