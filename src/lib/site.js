export const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER || '51999999999';

export const WA_MESSAGES = {
    default: 'Hola R11, quisiera consultar sobre sus servicios.',
    soporte: 'Hola R11, necesito ayuda con el soporte de TI de mi negocio.',
    software: 'Hola R11, estoy interesado en desarrollar un sistema para mi negocio.',
    cotizacion: 'Hola R11, quisiera solicitar una cotización para mi negocio.',
    ventas: 'Hola R11, quiero mejorar las ventas de mi negocio.',
    inventario: 'Hola R11, quiero controlar el inventario de mi negocio.',
    citas: 'Hola R11, quiero organizar las citas de mi negocio.',
    gestion: 'Hola R11, quiero automatizar procesos de mi negocio.',
    ayuda: 'Hola R11, necesito ayuda con un problema tecnológico.',
    soporte_planes: 'Hola R11, quisiera consultar los planes de soporte para mi negocio.',
};

export const waLink = (message = WA_MESSAGES.default) =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

export const waTarget = {
    target: '_blank',
    rel: 'noopener noreferrer',
};