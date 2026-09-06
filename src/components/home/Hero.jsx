'use client'
import { WhatsAppBtn, OutlineBtn } from './ui';
import { CheckCircle2, Sparkles } from './icons';
import { DashboardMockup } from './mockups';
import Reveal from './Reveal';
import { waLink, WA_MESSAGES } from '@/lib/site';

export default function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden pt-[112px] pb-16 md:pt-[136px] lg:pb-24">
            <div
                className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-blue-50 blur-3xl"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-[-10%] left-[-8%] h-[360px] w-[360px] rounded-full bg-emerald-50/70 blur-3xl"
                aria-hidden="true"
            />

            <div className="container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal>
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5">
                        <Sparkles className="w-4 h-4 text-navyblue" />
                        <span className="text-xs font-semibold tracking-wide text-navyblue">
                            Software para negocios
                        </span>
                    </div>

                    <h1 className="mt-6 text-[40px] md:text-[52px] lg:text-[60px] font-bold tracking-[-0.03em] leading-[1.05] text-navy">
                        La tecnología de tu negocio,{' '}
                        <span className="text-navyblue">funcionando sin complicaciones.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base md:text-lg leading-[1.65] text-slate-600">
                        Soporte de TI y software a medida para pequeñas y medianas empresas. Resolvemos
                        tus problemas tecnológicos, automatizamos tus tareas y te acompañamos cuando
                        más nos necesitas.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <WhatsAppBtn href={waLink(WA_MESSAGES.default)}>
                            Hablar con R11 por WhatsApp
                        </WhatsAppBtn>
                        <OutlineBtn href={waLink(WA_MESSAGES.cotizacion)}>
                            Solicitar una cotización
                        </OutlineBtn>
                    </div>

                    <p className="mt-5 flex items-start gap-2 text-sm text-slate-500">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500" />
                        Cuéntanos qué necesitas. Te orientamos sin compromiso y sin tecnicismos.
                    </p>

                    <p className="mt-6 text-sm font-medium text-slate-400">
                        Soluciones pensadas para pequeñas y medianas empresas.
                    </p>
                </Reveal>

                <Reveal delay={150} className="lg:justify-self-end">
                    <DashboardMockup />
                </Reveal>
            </div>
        </section>
    );
}