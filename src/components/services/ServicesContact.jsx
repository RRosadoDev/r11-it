'use client'
import React, { useEffect, useState } from 'react'

const ServicesContact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
        if (!hCaptcha) {
            event.preventDefault();
            setResult("Por favor completa el captcha");
            return
        }
        setResult("Enviando...");
        const formData = new FormData(event.target);

        // ----- Enter your Web3 Forms Access key below---------
        formData.append("access_key", "50b2fe65-b00b-4b9e-ad62-3ba471098be2");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) {
                scriptSrc += `&hl=${lang}`;
            }
            if (onload) {
                scriptSrc += `&onload=${onload}`;
            }
            if (render) {
                scriptSrc += `&render=${render}`;
            }

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);

    return (
        <section id="contact" className="max-w-7xl mx-auto py-20 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Contacto</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    ¿Tienes algún proyecto en mente o necesitas soporte técnico?
                    Escribe y te responderé a la brevedad.
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-[#111] p-8 rounded-lg border border-gray-800 shadow-lg shadow-cyan-900/10">
                <form onSubmit={onSubmit} className="space-y-2">
                    <input type="hidden" name="subject" value="Nuevo mensaje - Formulario Servicios R11" />

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nombre"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email@email.com"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Cómo puedo ayudarte..."
                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            required
                        ></textarea>
                    </div>

                    {/* Captcha Container */}
                    <div className="flex justify-start md:justify-start transform scale-[0.77] sm:scale-100 origin-top-left mb-6">
                        <div className="h-captcha" data-captcha="true"></div>
                    </div>

                    <button
                        type='submit'
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] flex justify-center items-center gap-2"
                    >
                        Enviar Mensaje
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>

                    {result && (
                        <div className={`mt-4 p-4 rounded-lg text-center ${result.includes("error") || result.includes("captcha") ? "bg-red-900/30 text-red-300 border border-red-800" : "bg-green-900/30 text-green-300 border border-green-800"}`}>
                            {result}
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}

export default ServicesContact
