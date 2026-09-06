import { WaIcon } from './icons';
import { waTarget } from '@/lib/site';

const base =
    'inline-flex items-center justify-center gap-2 h-11 md:h-12 px-5 md:px-6 rounded-lg font-semibold text-[15px] leading-none transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navyblue';

export const WhatsAppBtn = ({ href, children, className = '', icon = true }) => (
    <a href={href} {...waTarget} className={`${base} bg-whatsapp text-white hover:bg-[#1fb959] hover:shadow-card-hover ${className}`}>
        {icon && <WaIcon className="w-[18px] h-[18px]" />}
        {children}
    </a>
);

export const PrimaryBtn = ({ href, children, className = '' }) => (
    <a href={href} className={`${base} bg-navy text-white hover:bg-slate-800 hover:shadow-card-hover ${className}`}>
        {children}
    </a>
);

export const OutlineBtn = ({ href, children, className = '', onDark = false }) => (
    <a
        href={href}
        className={`${base} ${
            onDark
                ? 'border-white/25 bg-transparent text-white hover:border-white/40 hover:bg-white/10'
                : 'border-slate-200 bg-white text-navy hover:border-slate-300 hover:bg-slate-50'
        } ${className}`}
    >
        {children}
    </a>
);

export const GhostBtn = ({ href, children, className = '' }) => (
    <a href={href} className={`${base} text-navyblue hover:bg-blue-50 font-semibold ${className}`}>
        {children}
    </a>
);

export const H2 = ({ children, className = '' }) => (
    <h2 className={`text-[32px] md:text-[40px] lg:text-[42px] font-bold text-navy leading-[1.12] tracking-tight ${className}`}>
        {children}
    </h2>
);

export const Eyebrow = ({ children, className = '' }) => (
    <p className={`text-xs font-bold uppercase tracking-[0.14em] text-navyblue ${className}`}>
        {children}
    </p>
);

export const Sub = ({ children, className = '' }) => (
    <p className={`mt-4 text-base md:text-[17px] leading-[1.65] text-slate-600 ${className}`}>
        {children}
    </p>
);