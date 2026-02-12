export default function About() {
    const tools = [
        { name: 'vscode', icon: '/assets/vscode.png', },
        { name: 'mysql', icon: '/assets/mysql.png', },
        { name: 'sqlserver', icon: '/assets/sql-server.png', },
        { name: 'git', icon: '/assets/git.png', },
        { name: 'docker', icon: '/assets/docker.png', },
        { name: 'postman', icon: '/assets/postman.png', },
    ];

    const data = [
        {
            name: 'Lenguajes',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'PHP, Laravel, Livewire, JavaScript, Vue Js, Next Js',
        },
        {
            name: 'Educación',
            icon1: '/assets/edu-icon.png',
            icon2: '/assets/edu-icon-dark.png',
            description: 'Bachiller en ingeniería de sistemas',
        },
        {
            name: 'Proyectos',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: 'He participado en el análisis y desarrollo de proyectos empresariales.',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            {/* <h4 className="text-center mb-2 text-lg font-Ovo">Introducción</h4> */}
            <h2 className="text-center text-5xl font-Ovo">Sobre mí</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='/assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        {/* <img src="/assets/circular-text.png" alt="" className="w-full animate-spin_slow" /> */}
                        <img src="/assets/software-engineer.png" alt="" className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="flex-2">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        Soy un apasionado de la tecnología con experiencia en el ciclo completo de servicios de TI, desde el desarrollo de software hasta la gestión de infraestructura y soporte técnico. 
                        Me he centrado en aportar valor a las organizaciones mediante soluciones robustas, escalables y seguras, permitiendo que las empresas se enfoquen en su crecimiento mientras yo aseguro que su tecnología funcione a la perfección.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Herramientas que uso</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}