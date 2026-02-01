'use client';

import { Instagram, Facebook, Mail, MapPin, Clock, Phone } from "lucide-react";

interface FooterProps {
  brandName: string;
  whatsappPhone: string;
  instagramUrl?: string;
  facebookUrl?: string;
  email?: string;
  addressLine?: string;
  hoursLine?: string;
}

export default function Footer({
  brandName,
  whatsappPhone,
  // Asegúrate de que estas URLs sean las correctas
  instagramUrl = "https://www.instagram.com/vytalya2/",
  facebookUrl = "https://www.facebook.com/share/1CGUgpSdrv/",
  email = "vytalya2@gmail.com",
  addressLine = "Blvd valle de san Javier #602, Col. Valle de San Javier",
  hoursLine = "Siempre que lo necesites (trabajo bajo cita)",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-dark-bg py-20 px-6 overflow-hidden">
      {/* Efecto de luz decorativa al fondo */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-[300px] w-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. BRAND & BIO */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-widest text-white italic">
              {brandName.toUpperCase()}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Dedicados a resaltar tu belleza natural con protocolos de vanguardia 
              y atención personalizada en un ambiente exclusivo.
            </p>
            <div className="flex gap-4">
              {/* CORRECCIÓN AQUÍ: Añadimos target="_blank" y rel="noopener noreferrer" */}
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/40 hover:text-gold transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/40 hover:text-gold transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* 2. CONTACTO */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gold">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60 font-light">
                <Phone size={18} className="text-gold shrink-0" />
                <a href={`https://wa.me/${whatsappPhone}`} className="hover:text-gold transition-colors">
                  {whatsappPhone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60 font-light">
                <Mail size={18} className="text-gold shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-gold transition-colors lowercase">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* 3. UBICACIÓN */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gold">Ubicación</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60 font-light">
                <MapPin size={18} className="text-gold shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/3fR9kQxJ7Z7Z7Z7Z7" // Reemplaza con tu link real de Google Maps
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {addressLine}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60 font-light">
                <Clock size={18} className="text-gold shrink-0" />
                <span>{hoursLine}</span>
              </li>
            </ul>
          </div>

          {/* 4. LINKS RÁPIDOS */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gold">Navegación</h4>
            <ul className="space-y-3">
              {['Inicio', 'Servicios', 'Promos', 'Ubicación'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Inicio' ? '#' : `#${item.toLowerCase()}`} 
                    className="text-sm text-white/50 hover:text-white transition-colors font-light italic"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LÍNEA DE CRÉDITOS */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-widest text-white/30 uppercase">
            © {currentYear} {brandName} — Todos los derechos reservados.
          </p>
          <p className="text-[10px] tracking-widest text-white/30 uppercase italic">
            Atemporal & Distinguido
          </p>
        </div>
      </div>
    </footer>
  );
}