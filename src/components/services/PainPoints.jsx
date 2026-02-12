import React from 'react';

const PainPoints = () => {
    return (
        <section className="max-w-4xl mx-auto py-16 text-center px-6" id="pain-point">
            <h2 className="text-4xl text-white mb-8 font-bold">¿Te suena familiar?</h2>
            <ul className="list-disc list-inside text-gray-300 text-xl space-y-4">
                <li>¿Tu computadora está lenta y detiene tu productividad?</li>
                <li>¿Necesitas un software específico que el mercado no ofrece?</li>
                <li>¿Buscas un socio tecnológico que entienda tus necesidades?</li>
            </ul>
            <p className="mt-8 text-2xl text-cyan-300 font-semibold">R11 centraliza todas tus necesidades tecnológicas en un solo lugar.</p>
        </section>
    );
};

export default PainPoints;
