export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="/assets/profile-img.png" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hola! Soy Raul Rosado
                <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Desarrollador FullStack.
            </h1>
            <p className="max-w-2xl mx-auto font-Ovo">
                Ingeniero de Sistemas con más de 3 años de experiencia garantizando que tu software sea potente y tu hardware nunca se detenga.
                Especialista en desarrollo de ERPs a medida y soporte técnico de nivel corporativo para asegurar la continuidad de tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#002855] to-[#006241] text-white flex items-center gap-2 dark:border-transparent">
                    Contáctame <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                {/* <a href="../../dev-icon.png" download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    my resume <img src="/assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a> */}
            </div>
        </div>
    )
}