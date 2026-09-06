import { Zap, MessageCircle, Laptop, Sliders } from './icons';

const ITEMS = [
    {
        icon: Zap,
        title: 'Soporte rápido',
        text: 'Te ayudamos cuando aparece un problema.',
    },
    {
        icon: MessageCircle,
        title: 'Sin tecnicismos',
        text: 'Te explicamos todo de forma clara y sencilla.',
    },
    {
        icon: Laptop,
        title: 'Atención remota',
        text: 'Resolvemos muchos problemas sin esperar una visita.',
    },
    {
        icon: Sliders,
        title: 'Planes a medida',
        text: 'Pagas por el soporte que realmente necesita tu negocio.',
    },
];

export default function TrustBar() {
    return (
        <section className="border-y border-slate-100 bg-slate-50">
            <div className="container grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:py-12 lg:grid-cols-4">
                {ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.title} className="flex items-start gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-navyblue shadow-sm">
                                <Icon className="w-5 h-5" />
                            </span>
                            <div>
                                <p className="text-[15px] font-semibold text-navy">{item.title}</p>
                                <p className="mt-1 text-sm leading-snug text-slate-500">{item.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}