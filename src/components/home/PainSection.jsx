'use client'
import { CircleAlert } from './icons';
import Reveal from './Reveal';
import { waLink, WA_MESSAGES, waTarget } from '@/lib/site';

const PAINS = [
    'Una computadora que no enciende.',
    'Una impresora que deja de funcionar.',
    'El internet que se cae justo cuando lo necesitas.',
    'Un sistema que no hace lo que tu negocio necesita.',
];

export default function PainSection() {
    return (
        <section className="bg-slate-50 py-20 md:py-28">
            <div className="container">
                <div className="grid gap-10 items-center lg:grid-cols-2 lg:gap-16">
                    <Reveal>
                        <h2 className="text-[30px] md:text-[38px] lg:text-[42px] font-bold leading-[1.12] tracking-tight text-navy">
                            Sabemos que la tecnología falla{' '}
                            <span className="text-navyblue">justo cuando más la necesitas.</span>
                        </h2>
                        <p className="mt-6 text-base md:text-lg leading-[1.65] text-slate-600">
                            Y mientras buscas quién pueda ayudarte, tu negocio sigue esperando.
                        </p>
                        <p className="mt-4 text-base md:text-lg leading-[1.65] text-slate-600">
                            <span className="font-semibold text-navy">R11 existe para que no tengas
                            que resolver estos problemas solo.</span>
                        </p>
                        <div className="mt-8">
                            <a
                                href={waLink(WA_MESSAGES.ayuda)}
                                {...waTarget}
                                className="inline-flex h-11 md:h-12 items-center justify-center rounded-lg bg-navy px-6 font-semibold text-[15px] text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-card-hover"
                            >
                                Necesito ayuda
                            </a>
                        </div>
                    </Reveal>

                    <div className="grid gap-3">
                        {PAINS.map((pain, i) => (
                            <Reveal key={pain} delay={i * 70}>
                                <div className="flex items-start gap-3 rounded-card border border-slate-200 bg-white px-5 py-4 shadow-sm">
                                    <CircleAlert className="w-5 h-5 mt-0.5 text-rose-400" />
                                    <p className="text-[15px] md:text-base leading-relaxed text-slate-600">
                                        {pain}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}