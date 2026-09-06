import LegacyEntry from "@/components/legacy/MainEntry";

export const metadata = {
    title: 'R11 | Versión Anterior',
    description: 'Version previa del sitio R11, conservada como referencia del desarrollador.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function Page() {
    return <LegacyEntry />;
};