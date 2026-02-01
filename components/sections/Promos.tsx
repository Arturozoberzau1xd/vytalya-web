'use client';

import SectionTitle from "@/components/ui/SectionTitle";
import { Percent, Calendar, Sparkles, ShieldCheck } from "lucide-react";

const beneficios = [
  {
    titulo: "Apertura Vytalya",
    descripcion: "Obtén un 15% de descuento en cualquier tratamiento de nuestro catálogo por tiempo limitado.",
    icono: <Percent size={24} />,
    tag: "PROMO"
  },
  {
    titulo: "Valoración Especial",
    descripcion: "Tu primera consulta de diagnóstico es el punto de partida para tu plan personalizado.",
    icono: <Calendar size={24} />,
    tag: "CITA"
  },
  {
    titulo: "Garantía de Calidad",
    descripcion: "Solo utilizamos productos certificados y tecnología de última generación.",
    icono: <ShieldCheck size={24} />,
    tag: "ELITE"
  }
];

export default function Promos({ whatsappPhone }: { whatsappPhone: string }) {
  return (
    <section id="promos" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Círculo de luz decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-gold/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Special Offers"
          title="Promociones y Beneficios"
          subtitle="Diseñamos planes a tu medida con beneficios exclusivos para potenciar tus resultados."
        />

        {/* Banner Principal del 15% */}
        <div className="mt-16 relative group">
          <div className="absolute inset-0 bg-gold/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity rounded-[3rem]" />
          <div className="relative border border-gold/30 bg-black/40 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-4 py-1 rounded-full border border-gold/50 text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
                  Oferta Exclusiva
                </span>
                <h3 className="text-4xl md:text-6xl font-light text-white mb-6 italic">
                  15% <span className="text-gold font-semibold">OFF</span>
                </h3>
                <p className="text-white/60 text-sm md:text-base font-light max-w-md leading-relaxed">
                  Celebramos tu belleza natural con un descuento especial en todos nuestros servicios clínicos y estéticos. Válido agendando mediante WhatsApp.
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href={`https://wa.me/${whatsappPhone}?text=Hola Vytalya, quiero aplicar mi cupón del 15% de descuento ✨`}
                  target="_blank"
                  className="block w-full md:w-64 text-center py-5 rounded-full bg-gold text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-[0_10px_30px_rgba(197,164,126,0.3)]"
                >
                  Reclamar Descuento
                </a>
              </div>
            </div>
            
            {/* Decoración abstracta al fondo del banner */}
            <Sparkles className="absolute -bottom-4 -right-4 text-gold/10 w-48 h-48 -rotate-12" />
          </div>
        </div>

        {/* Grid de Beneficios Secundarios */}
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {beneficios.map((b) => (
            <div 
              key={b.titulo}
              className="p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform inline-block">
                {b.icono}
              </div>
              <h4 className="text-white font-light text-lg tracking-wide mb-3 italic">
                {b.titulo}
              </h4>
              <p className="text-white/40 text-xs leading-relaxed font-light">
                {b.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}