'use client'
import { useEffect, useState } from 'react';
import { Eyebrow, H2 } from './ui';
import { WaIcon, CheckCircle2 } from './icons';
import Reveal from './Reveal';
import { waLink, WA_MESSAGES, waTarget } from '@/lib/site';

function loadCaptcha() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (!captchadiv.length) return;

    let lang = null;
    captchadiv.forEach((item) => {
        lang = item.dataset.lang;
        if (!item.dataset.sitekey) {
            item.dataset.sitekey = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';
        }
    });

    let scriptSrc = 'https://js.hcaptcha.com/1/api.js?recaptchacompat=off';
    if (lang) scriptSrc += `&hl=${lang}`;

    if (!document.querySelector('script[src="' + scriptSrc + '"]')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = scriptSrc;
        document.body.appendChild(script);
    }
}

const inputClass =
    'h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-[15px] text-navy placeholder:text-slate-400 transition-all focus:border-navyblue focus:shadow-focus focus:outline-none';

export default function ContactForm() {
    const [result, setResult] = useState('');

    useEffect(() => {
        loadCaptcha();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();

        const captcha = event.target.querySelector('textarea[name=h-captcha-response]');
        if (captcha && !captcha.value) {
            setResult('Por favor completa el captcha.');
            return;
        }

        setResult('Enviando...');

        const formData = new FormData(event.target);
        const apiKey = process.env.NEXT_PUBLIC_ACCESS_KEY_WEB3FORMS;

        if (!apiKey) {
            setResult('Error de configuración en el servidor.');
            return;
        }

        formData.append('access_key', apiKey);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            }).then((r) => r.json());

            if (res.success) {
                setResult('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                event.target.reset();
            } else {
                setResult('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
            }
        } catch (error) {
            setResult('Error de conexión. Inténtalo más tarde.');
        }
    };

    return (
        <section id="contacto" className="bg-white py-20 md:py-28">
            <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
                <Reveal>
                    <Eyebrow>Contacto</Eyebrow>
                    <H2 className="mt-3">¿En qué podemos ayudarte?</H2>
                    <p className="mt-4 text-base md:text-[17px] leading-[1.65] text-slate-600">
                        Escríbenos y cuéntanos tu caso. Te respondemos con claridad y sin
                        tecnicismos.
                    </p>

                    <div className="mt-8">
                        <a
                            href={waLink(WA_MESSAGES.default)}
                            {...waTarget}
                            className="inline-flex h-12 w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-whatsapp font-semibold text-[15px] text-white transition-all duration-200 hover:bg-[#1fb959] hover:shadow-card-hover"
                        >
                            <WaIcon className="w-[18px] h-[18px]" />
                            Escribirnos por WhatsApp
                        </a>
                        <p className="mt-4 flex items-start gap-2 text-sm text-slate-500">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500" />
                            Tus datos serán utilizados únicamente para responder tu consulta.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={140}>
                    <form
                        onSubmit={onSubmit}
                        className="rounded-card border border-slate-200 bg-white p-7 md:p-9 shadow-card"
                    >
                        <input type="hidden" name="subject" value="Nuevo mensaje - Web R11" />

                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
                                    Nombre
                                </label>
                                <input id="name" name="name" type="text" placeholder="Tu nombre" required className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="whatsapp" className="mb-2 block text-sm font-semibold text-navy">
                                    WhatsApp
                                </label>
                                <input id="whatsapp" name="whatsapp" type="tel" placeholder="999 999 999" inputMode="tel" required className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
                                    ¿Qué necesitas?
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Cuéntanos brevemente qué problema tienes o qué necesitas mejorar."
                                    required
                                    className={`${inputClass} h-auto resize-y py-3`}
                                />
                            </div>

                            <div className="overflow-x-hidden">
                                <div className="flex justify-start md:justify-start origin-top-left">
                                    <div className="h-captcha" data-captcha="true" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="flex h-12 w-full items-center justify-center rounded-lg bg-navy font-semibold text-[15px] text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-card-hover"
                            >
                                Quiero que me contacten
                            </button>
                        </div>

                        {result && (
                            <div
                                className={`mt-5 rounded-lg border p-4 text-center text-sm font-medium ${
                                    result.includes('error') || result.includes('captcha')
                                        ? 'border-rose-200 bg-rose-50 text-rose-700'
                                        : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                                }`}
                                role="status"
                            >
                                {result}
                            </div>
                        )}
                    </form>

                    <p className="mt-4 text-center text-sm text-slate-500">
                        También puedes escribirnos directamente por WhatsApp.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}