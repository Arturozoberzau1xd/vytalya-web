import AnimatedHero from "@/components/effects/AnimatedHero";
import Header from "@/components/layout/Header";
import Services from "@/components/sections/Services";
import Promos from "@/components/sections/Promos"; 
import Footer from "@/components/layout/Footer";
import Location from "@/components/sections/Location";


export default function Home() {
  const WHATSAPP_PHONE = "7713309333"; // Reemplaza con tu número

  return (
    <main className="relative bg-dark-bg">
      <Header brandName="VYTALYA" />
      {/* 1. HERO CON CHISPAS (AnimatedHero ya trae InteractiveRays dentro) */}
      <AnimatedHero />

      {/* 2. SERVICIOS (Con tus 4-5 tarjetas de cristal) */}
      <Services whatsappPhone={WHATSAPP_PHONE} />

      {/* 3. PROMOS (Componente que crearemos con tu código de paquetes) */}
      <Promos whatsappPhone={WHATSAPP_PHONE} />
      {/* 4. LOCATION */}
      <Location
        whatsappPhone={WHATSAPP_PHONE}
        addressLine="Blvd valle de san Javier #602, Col. valle de san Javier cp 42086"
        cityLine="Pachuca, Hgo."
        hoursLine="Trabajo bajo cita"
        googleMapsUrl="https://maps.app.goo.gl/bH8UfAwYwpbLWzLU9"
        googleMapsEmbedUrl="https://www.google.com/maps/embed?pb=!4v1768593732793!6m8!1m7!1s-MwloT8rRZW-pv_jHzGUDw!2m2!1d20.09416100065729!2d-98.7521089752054!3f276.7711292195646!4f15.147144982859444!5f0.7820865974627469"
      />
      {/* 5. FOOTER */}
      <Footer 
          brandName="NM Estética" 
          whatsappPhone="7713309333"
          addressLine="Pachuca, Hidalgo"
          instagramUrl="https://www.instagram.com/vytalya2/"
      />
      
    </main>
  );
}