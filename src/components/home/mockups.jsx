export const WindowDots = () => (
    <span className="flex gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
    </span>
);

export const MockupShell = ({ title, children, className = '' }) => (
    <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card ${className}`}>
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
            <WindowDots />
            <p className="text-[11px] font-semibold text-slate-700 truncate">{title}</p>
            <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500/70" aria-hidden="true" />
        </div>
        {children}
    </div>
);

const Sidebar = ({ active = 0 }) => {
    const items = ['Inicio', 'Ventas', 'Productos', 'Clientes', 'Reportes'];
    return (
        <div className="hidden sm:flex w-24 md:w-28 flex-col gap-1 border-r border-slate-100 bg-slate-50/60 px-3 py-4 shrink-0">
            {items.map((item, i) => (
                <div
                    key={item}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] font-medium ${
                        i === active ? 'bg-navy text-white' : 'text-slate-500'
                    }`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${i === active ? 'bg-emerald-400' : 'bg-slate-300'}`}
                        aria-hidden="true"
                    />
                    {item}
                </div>
            ))}
            <div className="mt-auto rounded-lg bg-navy px-3 py-2">
                <p className="text-[10px] font-semibold text-white">R11</p>
                <p className="text-[9px] text-slate-300">Dashboard</p>
            </div>
        </div>
    );
};

const Bars = ({ values, className = '' }) => (
    <div className={`flex items-end gap-1.5 ${className}`} aria-hidden="true">
        {values.map((v, i) => (
            <span
                key={i}
                className={`flex-1 rounded-sm ${i === values.length - 2 ? 'bg-navyblue' : 'bg-slate-200'}`}
                style={{ height: `${v}%` }}
            />
        ))}
    </div>
);

export function DashboardMockup() {
    const sales = [
        { name: 'Café con leche', qty: 2, total: 'S/ 16.00' },
        { name: 'Sandwich club', qty: 1, total: 'S/ 22.00' },
        { name: 'Jugo de naranja', qty: 3, total: 'S/ 27.00' },
    ];

    return (
        <div className="relative">
            <div
                className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-slate-100 via-blue-50 to-emerald-50/60 blur-2xl"
                aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
                <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
                    <WindowDots />
                    <p className="text-[11px] font-semibold text-slate-700">R11 · Dashboard</p>
                    <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                        En línea
                    </span>
                </div>

                <div className="flex">
                    <Sidebar active={0} />

                    <div className="flex-1 p-4">
                        <div className="flex items-end justify-between gap-4">
                            <div>
                                <p className="text-[10px] text-slate-500">Ventas del día</p>
                                <p className="text-xl md:text-2xl font-bold tracking-tight text-navy">
                                    S/ 24,850
                                </p>
                            </div>
                            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3" aria-hidden="true">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                    <polyline points="17 6 23 6 23 12" />
                                </svg>
                                +12%
                            </span>
                        </div>

                        <div className="mt-3 flex gap-1.5">
                            {['Ventas', 'Stock', 'Citas'].map((chip, i) => (
                                <span
                                    key={chip}
                                    className={`rounded-md px-2 py-1 text-[9px] font-medium ${
                                        i === 0 ? 'bg-navy text-white' : 'bg-slate-100 text-slate-500'
                                    }`}
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>

                        <div className="mt-3 grid grid-cols-3 gap-2.5">
                            {[
                                { label: 'Productos', value: '1,204' },
                                { label: 'Clientes', value: '386' },
                                { label: 'Pedidos', value: '92' },
                            ].map((k) => (
                                <div key={k.label} className="rounded-lg border border-slate-100 bg-slate-50/70 px-2.5 py-2">
                                    <p className="text-[9px] text-slate-500">{k.label}</p>
                                    <p className="text-sm font-bold text-navy">{k.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-3 overflow-hidden rounded-lg border border-slate-100">
                            {sales.map((s, i) => (
                                <div
                                    key={s.name}
                                    className={`flex items-center justify-between px-3 py-2 ${
                                        i !== sales.length - 1 ? 'border-b border-slate-100' : ''
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                                        <p className="text-[10px] leading-none text-slate-600">{s.name}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[9px] text-slate-400">x{s.qty}</span>
                                        <span className="text-[10px] font-semibold text-slate-800">{s.total}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -right-3 -top-4 hidden md:flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                </svg>
                <p className="text-[10px] font-medium text-slate-700">Venta registrada</p>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden md:flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-card">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <p className="text-[10px] font-medium text-slate-700">Stock actualizado</p>
            </div>
        </div>
    );
}

export function PosMockup() {
    const products = [
        { name: 'Lomo saltado', price: 'S/ 28.00' },
        { name: 'Pollo a la brasa', price: 'S/ 32.00' },
        { name: 'Chicha morada', price: 'S/ 6.00' },
    ];

    return (
        <MockupShell title="Punto de venta">
            <div className="grid grid-cols-2 gap-3 p-3.5">
                <div className="space-y-1.5">
                    {products.map((p) => (
                        <div key={p.name} className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 px-2.5 py-2">
                            <div>
                                <p className="text-[9px] font-semibold leading-none text-slate-700">{p.name}</p>
                                <p className="mt-0.5 text-[9px] leading-none text-slate-400">Disponible</p>
                            </div>
                            <p className="text-[10px] font-semibold text-navy">{p.price}</p>
                        </div>
                    ))}
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-2">
                        <p className="text-[9px] font-semibold text-emerald-700">+ Agregar producto</p>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg border border-slate-200 p-2.5">
                    <div className="space-y-1.5">
                        {[
                            { n: 'Lomo saltado x1', t: '28.00' },
                            { n: 'Pollo a la brasa x1', t: '32.00' },
                            { n: 'Chicha x2', t: '12.00' },
                        ].map((item) => (
                            <div key={item.n} className="flex justify-between text-[9px] text-slate-600">
                                <span>{item.n}</span>
                                <span className="text-slate-500">S/ {item.t}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto border-t border-slate-100 pt-2">
                        <div className="flex items-baseline justify-between">
                            <span className="text-[9px] text-slate-500">Total</span>
                            <span className="text-sm font-bold text-navy">S/ 72.00</span>
                        </div>
                        <div className="mt-1.5 grid grid-cols-3 gap-1">
                            {['Efectivo', 'Tarjeta', 'Yape'].map((m) => (
                                <span key={m} className={`rounded-md px-1 py-1 text-center text-[8px] font-semibold ${m === 'Efectivo' ? 'bg-navy text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MockupShell>
    );
}

export function AppointmentsMockup() {
    const appts = [
        { time: '09:00', name: 'María Pérez', status: 'Confirmada', ok: true },
        { time: '11:00', name: 'Pedro Ruiz', status: 'Pendiente', ok: false },
        { time: '14:30', name: 'Ana Torres', status: 'Confirmada', ok: true },
    ];

    return (
        <MockupShell title="Agenda de citas">
            <div className="p-3.5">
                <div className="grid grid-cols-7 gap-1">
                    {['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'].map((d, i) => (
                        <div
                            key={d}
                            className={`flex h-7 flex-col items-center justify-center rounded-md text-[8px] font-semibold ${
                                i === 2 ? 'bg-navy text-white' : 'text-slate-400'
                            }`}
                        >
                            <span className="text-[8px]">{d}</span>
                            <span className="text-[7px] opacity-70">{i === 2 ? '14' : ''}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-2.5 space-y-1.5">
                    {appts.map((a) => (
                        <div key={a.time} className="flex items-center justify-between rounded-lg border border-slate-100 px-2.5 py-1.5">
                            <div className="flex items-center gap-2">
                                <span className="text-[9px] font-semibold text-slate-500">{a.time}</span>
                                <span className="text-[9px] font-medium text-slate-700">{a.name}</span>
                            </div>
                            <span
                                className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                                    a.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                                }`}
                            >
                                {a.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </MockupShell>
    );
}

export function InventoryMockup() {
    const rows = [
        { name: 'Cemento Sol 42.5kg', stock: '86 und', low: false },
        { name: 'Fierro corrugado 1/2"', stock: '40 und', low: false },
        { name: 'Pintura látex blanco', stock: '4 und', low: true },
    ];

    return (
        <MockupShell title="Control de inventario">
            <div className="p-3.5">
                <div className="grid grid-cols-3 gap-1.5">
                    {[
                        { label: 'Existencias', value: '1,204' },
                        { label: 'Entradas', value: '48' },
                        { label: 'Salidas', value: '63' },
                    ].map((k) => (
                        <div key={k.label} className="rounded-lg border border-slate-100 bg-slate-50/70 px-2 py-1.5">
                            <p className="text-[8px] text-slate-500">{k.label}</p>
                            <p className="text-[11px] font-bold text-navy">{k.value}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-2 space-y-1.5">
                    {rows.map((r) => (
                        <div
                            key={r.name}
                            className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 ${
                                r.low ? 'border-amber-200 bg-amber-50/60' : 'border-slate-100'
                            }`}
                        >
                            <p className="text-[9px] font-medium text-slate-700">{r.name}</p>
                            {r.low ? (
                                <span className="flex items-center gap-1 rounded-full bg-amber-100 px-1.5 py-0.5 text-[8px] font-semibold text-amber-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-2.5 h-2.5" aria-hidden="true">
                                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                                    </svg>
                                    Stock bajo
                                </span>
                            ) : (
                                <span className="text-[9px] font-semibold text-slate-600">{r.stock}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </MockupShell>
    );
}

export function ManagementMockup() {
    return (
        <MockupShell title="Central de gestión">
            <div className="p-3.5">
                <div className="grid grid-cols-3 gap-1.5">
                    {[
                        { label: 'Clientes', value: '128' },
                        { label: 'Ventas', value: 'S/ 24k' },
                        { label: 'Compras', value: '42' },
                    ].map((k) => (
                        <div key={k.label} className="rounded-lg border border-slate-100 bg-slate-50/70 px-2 py-1.5">
                            <p className="text-[8px] text-slate-500">{k.label}</p>
                            <p className="text-[11px] font-bold text-navy">{k.value}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-2 rounded-lg border border-slate-100 p-2">
                    <p className="text-[8px] font-semibold text-slate-500">Ventas por mes</p>
                    <div className="mt-1.5 flex h-14 items-end gap-1.5" aria-hidden="true">
                        {[35, 55, 40, 70, 50, 85, 65].map((v, i) => (
                            <span
                                key={i}
                                className={`flex-1 rounded-sm ${i === 5 ? 'bg-navyblue' : 'bg-slate-200'}`}
                                style={{ height: `${v}%` }}
                            />
                        ))}
                    </div>
                    <div className="mt-1.5 flex justify-between text-[7px] text-slate-400">
                        <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
                    </div>
                </div>
            </div>
        </MockupShell>
    );
}