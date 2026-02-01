// components/sections/Hero.tsx
import Image from "next/image";

interface HeroProps {
  whatsappPhone: string;
}

export default function Hero({ whatsappPhone }: HeroProps) {
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hola, quiero información y agendar una cita ✨")}`;

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      {/* 1. IMAGEN DE FONDO */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gallery/hero.jpg" // Asegúrate de tener esta imagen en public/gallery/
          alt="Estética y Bienestar"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Capa de oscuridad para que el texto sea legible */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* 2. EFECTO DE RESPLANDOR DORADO (Como en la foto) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
      </div>

      {/* 3. CONTENIDO */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
            Sueroterapia, Bótox, <br />
            <span className="text-gold-gradient font-normal italic">Ácido Hialurónico</span>, <br />
            Faciales y Masajes
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-white/80 font-light max-w-xl">
            Atención profesional, valoración previa y una experiencia premium para resaltar tu belleza natural.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-gradient text-black font-semibold rounded-full text-center transition-transform hover:scale-105 active:scale-95"
            >
              Agendar por WhatsApp
            </a>
            
            <a
              href="#servicios"
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-full text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      {/* 4. DECORACIÓN DE LÍNEA DORADA (Opcional, inferior) */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}