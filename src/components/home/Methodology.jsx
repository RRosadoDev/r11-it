'use client'
import { Eyebrow, H2 } from './ui';
import { MessageCircle } from './icons';
import Reveal from './Reveal';

const STEPS = [
    {
        num: '01',
        title: 'Cuéntanos qué necesitas',
        text: 'Nos explicas qué problema tienes o qué tarea quieres mejorar. No necesitas saber de tecnología.',
    },
    {
        num: '02',
        title: 'Encontramos la mejor solución',
        text: 'Analizamos tu situación y te explicamos qué podemos hacer, cuánto costaría y qué beneficio obtendrás.',
    },
    {
        num: '03',
        title: 'Lo ponemos a funcionar',
        text: 'Implementamos la solución, dejamos todo preparado y explicamos a tu equipo cómo utilizarlo.',
    },
];

export default function Methodology() {
    return (
        <section id="proceso" className="bg-slate-50 py-20 md:py-28">
            <div className="container">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <Eyebrow>Así trabajamos</Eyebrow>
                    <H2 className="mt-3">De un problema tecnológico a una solución clara.</H2>
                    <p className="mt-4 text-base md:text-[17px] leading-[1.65] text-slate-600">
                        Un proceso claro, sin complicaciones técnicas innecesarias.
                    </p>
                </Reveal>

                <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
                    <div
                        className="absolute left-[12%] right-[12%] top-7 hidden border-t-2 border-dashed border-slate-200 md:block"
                        aria-hidden="true"
                    />
                    {STEPS.map((step, i) => (
                        <Reveal key={step.num} delay={i * 110}>
                            <div className="relative flex flex-col items-center text-center">
                                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-bold text-navyblue shadow-sm">
                                    {step.num}
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-navy">{step.title}</h3>
                                <p className="mt-2.5 max-w-xs text-[15px] leading-relaxed text-slate-500">
                                    {step.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-12">
                    <div className="mx-auto flex max-w-lg flex-col items-center gap-2 rounded-card border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
                        <MessageCircle className="w-5 h-5 text-emerald-500" />
                        <p className="text-base font-semibold text-navy">
                            Y si necesitas ayuda después, seguimos aquí.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}