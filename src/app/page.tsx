import HeroBanner from "@/components/Banner/banner";
import VisacontConvite from "@/components/escpecialista/especialista";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/Footer/footer";
import ImpostoRenda from "@/components/imposto/imposto";
import Navbar from "@/components/menu/navbar";
import ServicesSection from "@/components/servico/servico";


export default function Home() {
  return (
    <>
     <Navbar />
     <HeroBanner />
     <ServicesSection />
     <VisacontConvite />
     <ImpostoRenda />
     <FAQ />
     <Footer/>
     
    </>
  );
}
