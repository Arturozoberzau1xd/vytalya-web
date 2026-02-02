'use client';

import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { Syringe, Zap, Activity, Sparkles, ArrowUpRight, Home } from "lucide-react";

// 1. CONFIGURACIÓN DE CATEGORÍAS (CATÁLOGO INFERIOR)
const categoriasServicios = [
  {
    titulo: "Estética Avanzada",
    icono: <Syringe size={20} className="text-gold" />,
    servicios: [
      { nombre: "Plasma Rico en Plaquetas", desc: "Bioestimulación celular natural.", img: "/gallery/plasma.jpg" },
      { nombre: "Mesoterapia", desc: "Nutrición profunda facial y corporal.", img: "/gallery/meso.jpg" },
      { nombre: "Dermapen", desc: "Inducción de colágeno avanzada.", img: "/gallery/dermapen.jpg" },
      { nombre: "Peeling Químico", desc: "Renovación celular profunda.", img: "/gallery/pel.jpg" }
    ]
  },
  {
    titulo: "Tecnología",
    icono: <Zap size={20} className="text-gold" />,
    servicios: [
      { nombre: "Radiofrecuencia Corporal", desc: "Tensado y remodelación corporal.", img: "/gallery/corporal.jpg" },
      { nombre: "Fototerapia Facial", desc: "Terapia de luz LED regeneradora.", img: "/gallery/face.jpg"}
    ]
  },
  {
    titulo: "Clínica & Salud",
    icono: <Activity size={20} className="text-gold" />,
    servicios: [
      { nombre: "Clínica de Heridas", desc: "Cuidado y cicatrización especializada.", img: "/gallery/heridas.jpg" },
      { nombre: "Eliminación de Verrugas", desc: "Procedimiento clínico seguro." , img: "/gallery/verr.jpg"},
      { nombre: "Hidratación & Vitaminado", desc: "Boost de vitalidad celular.", img: "/gallery/sueroterapia.jpg"},
      { nombre: "Microdermoabrasión", desc: "Exfoliación mecánica profunda.", img: "/gallery/micro.jpg" }
    ]
  },
  {
    titulo: "Bienestar Vytalya",
    icono: <Sparkles size={20} className="text-gold" />,
    servicios: [
      { nombre: "Facial Anti-acné", desc: "Control y limpieza profunda.", img: "/gallery/antac.jpg" },
      { nombre: "Spa Ocular", desc: "Revitalización de la mirada.", img: "/gallery/eyes.jpg" },
      { nombre: "Limpieza Profunda", desc: "Protocolo esencial de salud cutánea.", img: "/gallery/prof.jpg" },
      { nombre: "Bótox (Zona extra)", desc: "Aplicación complementaria.", img: "/gallery/botox.jpg" }
    ]
  }
];

// 2. CONFIGURACIÓN DE DESTACADOS
const destacados = [
  {
    title: "Bótox",
    description: "Suaviza líneas de expresión con resultados naturales y frescos.",
    image: "/gallery/botox.jpg",
    seo: "Aplicación de Bótox en Pachuca - Especialistas en armonización facial"
  },
  {
    title: "Ácido hialurónico",
    description: "Armonización, volumen y perfilado con hidratación profunda.",
    image: "/gallery/acido.jpg",
    seo: "Rellenos con Ácido Hialurónico en Pachuca - Perfilado de labios y rostro"
  },
  {
    title: "Sueroterapia",
    description: "Vitaminas y minerales vía intravenosa para energía inmediata.",
    image: "/gallery/sueroterapia.jpg",
    seo: "Sueroterapia en Pachuca - Hidratación y vitaminas a domicilio"
  },
  {
    title: "Radiofrecuencia Corporal",
    description: "Tecnología no invasivo con ondas electromagnéticas",
    image: "/gallery/hifufacial.jpg",
    seo: "Radiofrecuencia y HIFU en Pachuca - Tensado de piel sin cirugía"
  },
];

export default function Services({ whatsappPhone }: { whatsappPhone: string }) {
  return (
    <section 
      id="servicios" 
      className="mx-auto max-w-full overflow-hidden px-4 md:px-6 py-24 relative"
    >
      {/* --- BLOQUE SEO INVISIBLE PARA GOOGLE --- */}
      <div className="sr-only">
        <h2>Clínica de Estética en Pachuca - Vytalya</h2>
        <p>Especialistas en aplicación de Bótox, Ácido Hialurónico y Sueroterapia a domicilio en Pachuca de Soto, Hidalgo. Ubicados en San Javier.</p>
        <ul>
          <li>Tratamientos de Bótox en Pachuca</li>
          <li>Sueroterapia premium a domicilio en Pachuca</li>
          <li>HIFU y Radiofrecuencia en Pachuca</li>
          <li>Plasma Rico en Plaquetas y Mesoterapia</li>
        </ul>
      </div>

      {/* Luces de fondo */}
      <div className="absolute top-0 -right-20 w-64 md:w-[500px] h-64 md:h-[500px] bg-gold/5 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 -left-20 w-64 md:w-[500px] h-64 md:h-[500px] bg-gold/5 blur-[100px] -z-10 rounded-full" />

      <SectionTitle
        eyebrow="Elite Aesthetic"
        title="Nuestros Servicios"
        subtitle="Protocolos avanzados que fusionan ciencia y belleza para resultados extraordinarios."
      />

      {/* BLOQUE 1: TARJETAS DESTACADAS */}
      <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {destacados.map((s) => (
          <GlassCard key={s.title} className="p-0 flex flex-col h-full group overflow-hidden border-white/5">
            <div className="relative h-52 md:h-64 w-full">
              <Image 
                src={s.image} 
                alt={s.seo} // Usamos la propiedad SEO para que Google vea "Bótox en Pachuca"
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90" />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow relative">
              <h3 className="text-lg md:text-xl font-light tracking-[0.2em] text-white mb-3 italic uppercase">
                {s.title}
              </h3>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-white/50 font-light mb-8 flex-grow">
                {s.description}
              </p>
              <a
                href={`https://wa.me/${whatsappPhone}?text=Hola Vytalya, quiero información sobre ${s.title}`}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full border border-gold/40 bg-gold/5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gold text-center transition-all hover:bg-gold hover:text-black"
              >
                Agendar
              </a>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* BLOQUE 2: CATÁLOGO COMPLETO */}
      <div className="mt-24 grid gap-10 lg:grid-cols-2 max-w-7xl mx-auto">
        {categoriasServicios.map((cat) => (
          <div key={cat.titulo} className="space-y-6">
            <div className="flex items-center gap-4 border-b border-white/5 pb-4">
              <div className="p-2 rounded-xl bg-gold/10 border border-gold/20 text-gold shadow-sm">
                {cat.icono}
              </div>
              <h3 className="text-sm font-light tracking-[0.3em] text-white uppercase italic">
                {cat.titulo}
              </h3>
            </div>
            
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {cat.servicios.map((ser) => (
                <a 
                  key={ser.nombre}
                  href={`https://wa.me/${whatsappPhone}?text=Me interesa información sobre ${ser.nombre}`}
                  target="_blank"
                  className="group relative p-5 rounded-[1.8rem] border border-white/10 bg-white/[0.03] overflow-hidden h-32 flex flex-col justify-center transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-30 lg:opacity-0 lg:group-hover:opacity-60 transition-all duration-700">
                    <Image 
                      src={ser.img} 
                      alt={`${ser.nombre} en Clínica Vytalya Pachuca`} // Alt optimizado
                      fill 
                      className="object-cover transition-transform duration-700 scale-110 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-dark-bg/60" /> 
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium text-white group-hover:text-gold transition-colors tracking-wide">
                        {ser.nombre}
                      </h4>
                      <ArrowUpRight 
                        className="text-gold opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all" 
                        size={14} 
                      />
                    </div>
                    <p className="text-[10px] text-white/50 font-light mt-1 line-clamp-2 italic group-hover:text-white/80 transition-colors">
                      {ser.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* BLOQUE 3: BANNER HOME CONCIERGE */}
      <div className="mt-24 max-w-4xl mx-auto">
        <div className="relative p-8 md:p-10 rounded-[2.5rem] border border-gold/20 bg-gradient-to-br from-gold/10 via-transparent to-transparent backdrop-blur-md overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold/10 blur-[80px] rounded-full group-hover:bg-gold/20 transition-colors duration-700" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-6 text-center md:text-left flex-col md:flex-row">
              <div className="h-14 w-14 rounded-2xl border border-gold/30 flex items-center justify-center text-gold bg-black/60 shadow-[0_0_20px_rgba(197,164,126,0.1)]">
                <Home size={28} strokeWidth={1.2} />
              </div>
              <div>
                <h4 className="text-white text-lg font-light tracking-[0.3em] uppercase italic">
                  Vytalya a tu casa
                </h4>
                <p className="text-white/40 text-[13px] font-light mt-2 max-w-md leading-relaxed">
                  Disfruta de nuestra <span className="text-gold/80 font-medium">Sueroterapia Premium en Pachuca</span> y protocolos selectos en la privacidad de tu residencia u oficina.
                </p>
              </div>
            </div>

            <a 
              href={`https://wa.me/${whatsappPhone}?text=Hola Vytalya, me interesa el servicio de Sueroterapia a domicilio en Pachuca ✨`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-gold/5 border border-gold/40 text-[10px] font-bold uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-black transition-all duration-500 shadow-lg"
            >
              Consultar Disponibilidad
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}