'use client'
import { Eyebrow, H2, Sub } from './ui';
import { Search, PenLine, CheckCircle2 } from './icons';
import Reveal from './Reveal';

const STEPS = [
    {
        icon: Search,
        title: 'Entendemos primero tu problema',
        text: 'Analizamos cómo trabaja tu negocio antes de proponer cualquier cosa.',
    },
    {
        icon: PenLine,
        title: 'Después proponemos una solución',
        text: 'Buscamos la alternativa más sencilla que realmente aporte valor.',
    },
    {
        icon: CheckCircle2,
        title: 'Solo desarrollamos lo que necesitas',
        text: 'Nada de costos innecesarios: construimos únicamente lo que te ayuda.',
    },
];

export default function Educational() {
    return (
        <section className="bg-white py-20 md:py-28">
            <div className="container">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <Eyebrow>¿Software a medida?</Eyebrow>
                    <H2 className="mt-3">
                        No necesitas un sistema complicado. Necesitas uno que{' '}
                        <span className="text-navyblue">resuelva tu problema.</span>
                    </H2>
                    <Sub>
                        Antes de desarrollar cualquier cosa, analizamos cómo trabaja tu negocio y
                        buscamos la solución más sencilla que realmente aporte valor.
                    </Sub>
                </Reveal>

                <div className="mt-14 grid gap-10 md:grid-cols-3">
                    {STEPS.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <Reveal key={step.title} delay={i * 90}>
                                <div className="flex flex-col items-center text-center">
                                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-navyblue">
                                        <Icon className="w-7 h-7" />
                                    </span>
                                    <p className="mt-5 text-sm font-bold text-navyblue">Paso {i + 1}</p>
                                    <h3 className="mt-1.5 text-lg font-semibold text-navy">{step.title}</h3>
                                    <p className="mt-2.5 max-w-xs text-[15px] leading-relaxed text-slate-500">
                                        {step.text}
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