'use client'
import { Eyebrow, H2, Sub } from './ui';
import { Sparkles, ClipboardList, CheckCircle2 } from './icons';
import Reveal from './Reveal';

const BENEFITS = [
    { icon: ClipboardList, label: 'Menos tareas manuales' },
    { icon: CheckCircle2, label: 'Menos errores' },
    { icon: Sparkles, label: 'Mayor control sobre tu negocio' },
];

export default function SoftwareSection() {
    return (
        <section id="software" className="bg-white py-20 md:py-28">
            <div className="container">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <Eyebrow>Software para tu negocio</Eyebrow>
                    <H2 className="mt-3">
                        Si tu negocio tiene una forma particular de trabajar, tu software también
                        debería tenerla.
                    </H2>
                    <Sub>
                        Desarrollamos sistemas adaptados a los procesos reales de tu empresa para
                        reducir tareas manuales, evitar errores y darte mayor control sobre tu
                        negocio.
                    </Sub>
                </Reveal>

                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {BENEFITS.map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <Reveal key={b.label} delay={i * 80}>
                                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5">
                                    <Icon className="w-4 h-4 text-navyblue" />
                                    <span className="text-sm font-medium text-slate-700">{b.label}</span>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}