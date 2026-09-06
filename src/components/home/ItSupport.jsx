'use client'
import { Eyebrow, H2, Sub } from './ui';
import { Monitor, Settings, Wifi, Headphones, ArrowRight } from './icons';
import Reveal from './Reveal';
import { waLink, WA_MESSAGES, waTarget } from '@/lib/site';

const CARDS = [
    {
        icon: Monitor,
        title: 'Computadoras siempre listas',
        text: 'Mantenimiento preventivo y correctivo para mantener tus equipos rápidos, estables y disponibles cuando los necesitas.',
        cta: 'Necesito revisar mis equipos',
        href: WA_MESSAGES.soporte,
    },
    {
        icon: Settings,
        title: 'Computadoras listas para trabajar',
        text: 'Instalamos y dejamos configurados tus equipos para que tu personal pueda comenzar a trabajar sin perder horas configurando programas.',
        cta: null,
        href: null,
    },
    {
        icon: Wifi,
        title: 'Internet y WiFi sin dolores de cabeza',
        text: 'Organizamos tu red y conexión para que tus equipos puedan trabajar de forma estable en toda tu oficina o negocio.',
        cta: null,
        href: null,
    },
    {
        icon: Headphones,
        title: 'Soporte mensual',
        text: 'No esperes a que aparezca una emergencia. Cuenta con un aliado tecnológico que conozca tu negocio y pueda ayudarte cuando lo necesites.',
        cta: 'Consultar planes de soporte',
        href: WA_MESSAGES.soporte_planes,
    },
];

export default function ItSupport() {
    return (
        <section id="soporte" className="bg-white py-20 md:py-28">
            <div className="container">
                <Reveal className="max-w-2xl">
                    <Eyebrow>Soporte para tu negocio</Eyebrow>
                    <H2 className="mt-3">
                        ¿Tu oficina tiene un problema tecnológico?
                        <span className="text-navyblue"> Nosotros nos encargamos.</span>
                    </H2>
                    <Sub>
                        Computadoras, impresoras, internet, WiFi, programas o instalaciones:
                        solucionamos los problemas tecnológicos que pueden detener el trabajo de tu
                        equipo.
                    </Sub>
                </Reveal>

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                    {CARDS.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <Reveal key={card.title} delay={i * 80}>
                                <article className="group flex h-full flex-col rounded-card border border-slate-200 bg-white p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-card-hover">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-navyblue transition-colors group-hover:bg-navy group-hover:text-white">
                                        <Icon className="w-6 h-6" />
                                    </span>
                                    <h3 className="mt-5 text-lg font-semibold text-navy">{card.title}</h3>
                                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-500">
                                        {card.text}
                                    </p>
                                    {card.cta && (
                                        <a
                                            href={waLink(card.href)}
                                            {...waTarget}
                                            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navyblue transition-colors hover:text-navy"
                                        >
                                            {card.cta}
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    )}
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}