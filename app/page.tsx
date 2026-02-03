import AnimatedHero from "@/components/effects/AnimatedHero";
import Header from "@/components/layout/Header";
import Services from "@/components/sections/Services";
import Promos from "@/components/sections/Promos"; 
import Footer from "@/components/layout/Footer";
import Location from "@/components/sections/Location";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vytalya | Bótox, Ácido Hialurónico y Sueroterapia en Pachuca",
  description: "Clínica de estética avanzada en San Javier, Pachuca. Especialistas en rejuvenecimiento facial, armonización y sueroterapia a domicilio. ¡Agenda tu cita!",
  alternates: {
    canonical: "https://vytalya.netlify.app", 
  }
};

export default function Home() {
  const WHATSAPP_PHONE = "7713309333";

  // Objeto de datos estructurados para Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Vytalya Estética Avanzada",
    "image": "https://vytalya.netlify.app/icon.png", 
    "@id": "https://vytalya.netlify.app",
    "url": "https://vytalya.netlify.app",
    "telephone": "+527713309333",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Blvd valle de san Javier #602",
      "addressLocality": "Pachuca",
      "addressRegion": "Hidalgo",
      "postalCode": "42086",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.1031, // Coordenadas aproximadas de San Javier
      "longitude": -98.7565
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/vytalya2/"
    ]
  };

  return (
    <>
      {/* Script invisible para que Google lea tus datos de negocio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative bg-dark-bg">
        <Header brandName="VYTALYA" />
        
        <AnimatedHero />

        <Services whatsappPhone={WHATSAPP_PHONE} />

        <Promos whatsappPhone={WHATSAPP_PHONE} />

        <Location
          whatsappPhone={WHATSAPP_PHONE}
          addressLine="Blvd valle de san Javier #602, Col. valle de san Javier cp 42086"
          cityLine="Pachuca, Hgo."
          hoursLine="Trabajo bajo cita"
          googleMapsUrl="https://maps.app.goo.gl/tu-link-real" // Pon el link real de tu ficha de Maps aquí
          googleMapsEmbedUrl="https://www.google.com/maps/embed?pb=!4v1768593732793!6m8!1m7!1s-MwloT8rRZW-pv_jHzGUDw!2m2!1d20.09416100065729!2d-98.7521089752054!3f276.7711292195646!4f15.147144982859444!5f0.7820865974627469"
        />

        <Footer 
            brandName="VYTALYA" // Corregido para que coincida con tu marca
            whatsappPhone={WHATSAPP_PHONE}
            addressLine="San Javier, Pachuca, Hidalgo"
            instagramUrl="https://www.instagram.com/vytalya2/"
        />
      </main>
    </>
  );
}