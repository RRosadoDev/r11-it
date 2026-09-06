'use client'
import { Eyebrow, H2 } from './ui';
import { MessageCircle, Target, Handshake, RefreshCw } from './icons';
import Reveal from './Reveal';

const DIFFS = [
    {
        icon: MessageCircle,
        title: 'No hablamos complicado',
        text: 'Te explicamos lo importante sin llenarte de palabras técnicas.',
    },
    {
        icon: Target,
        title: 'Buscamos soluciones, no problemas',
        text: 'Antes de recomendarte algo, entendemos qué necesitas realmente.',
    },
    {
        icon: Handshake,
        title: 'Pensamos en tu negocio',
        text: 'La tecnología debe ayudarte a trabajar mejor, no convertirse en otra preocupación.',
    },
    {
        icon: RefreshCw,
        title: 'Seguimos después de entregar',
        text: 'Queremos convertirnos en tu aliado tecnológico, no desaparecer al terminar un proyecto.',
    },
];

export default function WhyR11() {
    return (
        <section className="bg-slate-50 py-20 md:py-28">
            <div className="container">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <Eyebrow>Diferenciadores</Eyebrow>
                    <H2 className="mt-3">¿Por qué trabajar con R11?</H2>
                </Reveal>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
                    {DIFFS.map((d, i) => {
                        const Icon = d.icon;
                        return (
                            <Reveal key={d.title} delay={i * 80}>
                                <div className="flex h-full flex-col rounded-card border border-slate-200 bg-white p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-navyblue">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <h3 className="mt-4 text-lg font-semibold text-navy">{d.title}</h3>
                                    <p className="mt-2.5 text-[15px] leading-relaxed text-slate-500">
                                        {d.text}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}