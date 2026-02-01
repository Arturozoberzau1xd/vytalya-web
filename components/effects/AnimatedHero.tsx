'use client';

import { useMemo } from 'react';
import Image from "next/image";
import InteractiveRays from './InteractiveRays';

export default function AnimatedHero() {
  const whatsappLink = useMemo(() => {
    const phone = '7713309333'; 
    const text = encodeURIComponent('Hola, quiero información y agendar una cita ✨');
    return `https://wa.me/${phone}?text=${text}`;
  }, []);

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-dark-bg flex items-center">
      
      {/* 1. CONTENEDOR DE LA IMAGEN (Alineado a la derecha) */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[45%] z-0 pointer-events-none">
        {/* La imagen propiamente dicha */}
        <Image
          src="/gallery/heroe.jpg"
          alt="Estética Premium"
          fill
          className="object-cover object-center opacity-60 grayscale-[20%]"
          priority
        />
        
        {/* DESVANECIMIENTO (Overlay): Esto hace que la imagen se funda con el negro hacia la izquierda */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/40 to-transparent" />
        
        {/* Opcional: Desvanecimiento inferior para que no se corte de golpe con la siguiente sección */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
      </div>

      {/* 2. MANCHAS DE LUZ (Smoke Blobs) - Las mantenemos para dar atmósfera */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute -left-24 -top-28 h-[520px] w-[520px] rounded-full opacity-30 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(197,164,126,0.15) 0%, transparent 70%)' }}
        />
      </div>

      {/* 3. RAYITOS INTERACTIVOS */}
      <InteractiveRays />

      {/* 4. CONTENIDO PRINCIPAL */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 w-full">
        {/* Contenedor del texto limitado para que no choque con la cara de la modelo en pantallas grandes */}
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest uppercase text-gold ml-18">
  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
  Belleza & Descanso
</div>

          <h1 className="mt-8 text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
            Sueroterapia, Bótox, <br />
            <span className="text-gold italic font-normal text-6xl md:text-8xl">Ácido Hialurónico</span>
          </h1>

          <p className="mt-8 text-lg text-white/60 font-light max-w-xl leading-relaxed">
            Atención profesional, valoración previa y una experiencia premium. 
            Agenda tu cita de valoración por WhatsApp.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              className="rounded-full bg-gold-gradient px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-gold/20"
            >
              Agendar por WhatsApp
            </a>

            <a
              href="#servicios"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>

          {/* Características inferiores */}
          <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-4 text-[9px] tracking-[0.25em] uppercase font-bold text-white/30 md:grid-cols-4">
            {['Protocolos', 'Certificados', 'Natural', 'Premium'].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <div className="h-[1px] w-6 bg-gold/30" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}