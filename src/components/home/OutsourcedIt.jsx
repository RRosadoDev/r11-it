'use client'
import { H2, Sub } from './ui';
import { CircleCheck, ArrowRight, WaIcon, ShieldCheck } from './icons';
import Reveal from './Reveal';
import { waLink, WA_MESSAGES, waTarget } from '@/lib/site';

const ITEMS = [
    'Soporte tecnológico',
    'Mantenimiento de equipos',
    'Redes y conectividad',
    'Automatización',
    'Software a medida',
    'Acompañamiento continuo',
];

export default function OutsourcedIt() {
    return (
        <section className="bg-white py-20 md:py-28">
            <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal>
                    <H2>
                        Tu empresa no necesita contratar un departamento de TI para{' '}
                        <span className="text-navyblue">tener uno.</span>
                    </H2>
                    <Sub>
                        Con R11 tienes un aliado tecnológico al que puedes acudir cuando necesites
                        resolver un problema, mejorar un proceso o encontrar una forma más sencilla
                        de trabajar.
                    </Sub>

                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {ITEMS.map((item) => (
                            <div key={item} className="flex items-center gap-2.5">
                                <CircleCheck className="w-5 h-5 text-emerald-500" />
                                <span className="text-[15px] font-medium text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-9">
                        <a
                            href={waLink(WA_MESSAGES.soporte)}
                            {...waTarget}
                            className="inline-flex h-11 md:h-12 items-center justify-center gap-2 rounded-lg bg-navy px-6 font-semibold text-[15px] text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-card-hover"
                        >
                            Quiero contar con soporte para mi negocio
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={140}>
                    <div className="relative overflow-hidden rounded-3xl bg-navy p-8 md:p-10 text-white">
                        <div
                            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-50/10 blur-2xl"
                            aria-hidden="true"
                        />
                        <div className="relative">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                    </span>
                                    <div>
                                        <p className="font-bold">Tu departamento de TI</p>
                                        <p className="text-xs text-slate-300">Contigo cuando lo necesitas</p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                                    Aliado tecnológico
                                </span>
                            </div>

                            <div className="mt-8 space-y-2.5">
                                {ITEMS.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                                    >
                                        <CircleCheck className="w-4 h-4 text-emerald-400" />
                                        <span className="text-sm text-slate-100">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={waLink(WA_MESSAGES.soporte_planes)}
                                {...waTarget}
                                className="mt-8 flex h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp font-semibold text-[15px] text-white transition-colors hover:bg-[#1fb959]"
                            >
                                <WaIcon className="w-[18px] h-[18px]" />
                                Consultar planes de soporte
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}