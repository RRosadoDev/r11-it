'use client'
import SmoothScroll from './SmoothScroll';
import Navbar from './Navbar';
import Hero from './Hero';
import TrustBar from './TrustBar';
import ItSupport from './ItSupport';
import PainSection from './PainSection';
import SoftwareSection from './SoftwareSection';
import UseCases from './UseCases';
import Educational from './Educational';
import Methodology from './Methodology';
import OutsourcedIt from './OutsourcedIt';
import WhyR11 from './WhyR11';
import FinalCta from './FinalCta';
import ContactForm from './ContactForm';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function HomePage() {
    return (
        <div className="font-Inter leading-normal overflow-x-hidden bg-white text-slate-900 antialiased">
            <SmoothScroll />
            <Navbar />
            <main>
                <Hero />
                <TrustBar />
                <ItSupport />
                <PainSection />
                <SoftwareSection />
                <UseCases />
                <Educational />
                <Methodology />
                <OutsourcedIt />
                <WhyR11 />
                <FinalCta />
                <ContactForm />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
}