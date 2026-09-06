/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["var(--font-outfit)", "sans-serif"],
                Ovo: ["var(--font-ovo)", "serif"],
                Inter: ["var(--font-inter)", "sans-serif"]
            },
            colors: {
                lightHover: '#081B2E',
                darkHover: '#001A33',
                darkTheme: '#000E1C',
                whatsapp: '#25D366',
                navy: '#0F172A',
                navyblue: '#1E40AF'
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
                'card': '0 10px 30px rgba(15, 23, 42, 0.06)',
                'card-hover': '0 16px 40px rgba(15, 23, 42, 0.10)',
                'focus': '0 0 0 3px rgba(30, 64, 175, 0.10)',
            },
            borderRadius: {
                card: '12px',
                btn: '8px',
                lg2: '16px',
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}