'use client'
import { Eyebrow, H2, OutlineBtn } from './ui';
import { ShoppingCart, Package, CalendarDays, LayoutDashboard } from './icons';
import { PosMockup, InventoryMockup, AppointmentsMockup, ManagementMockup } from './mockups';
import Reveal from './Reveal';
import { waLink, WA_MESSAGES } from '@/lib/site';

const CASES = [
    {
        icon: ShoppingCart,
        title: 'Vende y cobra con mayor facilidad',
        text: 'Controla tus ventas, cajas y operaciones desde un sistema pensado para el día a día de tu negocio.',
        tags: ['Restaurantes', 'Tiendas', 'Bodegas', 'Ferreterías'],
        ideal: 'Ideal para',
        cta: 'Quiero mejorar mis ventas',
        href: WA_MESSAGES.ventas,
        mockup: <PosMockup />,
        flip: false,
    },
    {
        icon: Package,
        title: 'Deja de adivinar cuánto stock tienes',
        text: 'Controla entradas, salidas y existencias para saber qué tienes disponible y cuándo necesitas reponer. Menos errores, mayor control, alertas e información siempre actualizada.',
        tags: ['Ferreterías', 'Comercios', 'Bodegas'],
        ideal: 'Ideal para',
        cta: 'Quiero controlar mi inventario',
        href: WA_MESSAGES.inventario,
        mockup: <InventoryMockup />,
        flip: true,
    },
    {
        icon: CalendarDays,
        title: 'Organiza tus citas sin depender de agendas y mensajes',
        text: 'Gestiona reservas y citas desde un solo lugar para reducir olvidos y facilitar el trabajo de tu personal.',
        tags: ['Clínicas', 'Consultorios', 'Profesionales', 'Centros de atención'],
        ideal: 'Ideal para',
        cta: 'Quiero organizar mis citas',
        href: WA_MESSAGES.citas,
        mockup: <AppointmentsMockup />,
        flip: false,
    },
    {
        icon: LayoutDashboard,
        title: 'Ten tu negocio bajo control',
        text: 'Creamos herramientas para centralizar información y facilitar tareas administrativas que hoy consumen demasiado tiempo.',
        tags: ['Clientes', 'Ventas', 'Compras', 'Inventario', 'Reportes'],
        ideal: 'Puede incluir',
        cta: 'Cuéntame qué necesito automatizar',
        href: WA_MESSAGES.gestion,
        mockup: <ManagementMockup />,
        flip: true,
    },
];

function CaseRow({ item }) {
    const Icon = item.icon;
    const mockupOrder = item.flip ? 'lg:order-first' : '';
    const contentOrder = item.flip ? 'lg:order-last' : '';

    return (
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal className={`order-2 ${contentOrder}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-navyblue">
                    <Icon className="w-6 h-6" />
                </span>
                <h3 className="mt-5 text-2xl md:text-[28px] font-bold leading-[1.15] text-navy">
                    {item.title}
                </h3>
                <p className="mt-4 text-base leading-[1.65] text-slate-600">{item.text}</p>
                <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                        {item.ideal}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-7">
                    <OutlineBtn href={waLink(item.href)}>{item.cta}</OutlineBtn>
                </div>
            </Reveal>

            <Reveal delay={120} className={`order-1 ${mockupOrder}`}>
                {item.mockup}
            </Reveal>
        </div>
    );
}

export default function UseCases() {
    return (
        <section id="soluciones" className="bg-slate-50 py-20 md:py-28">
            <div className="container">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <Eyebrow>Casos de uso</Eyebrow>
                    <H2 className="mt-3">Software pensado para tu forma de trabajar</H2>
                    <p className="mt-4 text-base md:text-[17px] leading-[1.65] text-slate-600">
                        No vendemos «programación»: resolvemos problemas concretos de tu negocio.
                    </p>
                </Reveal>

                <div className="mt-14 space-y-12 lg:space-y-16">
                    {CASES.map((item) => (
                        <CaseRow key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}