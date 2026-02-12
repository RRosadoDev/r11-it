import LenisScroll from "@/components/portfolio/LenisScroll";
import Navbar from "@/components/portfolio/Navbar";
import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Work from "@/components/portfolio/Work";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Services />
            <Work />
            <Contact />
            <Footer />
        </>
    )
};
