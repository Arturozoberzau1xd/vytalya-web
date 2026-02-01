'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header({ brandName }: { brandName: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Promos', href: '#promos' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-white/5 py-3 md:py-4' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* LOGO + NOMBRE */}
        <a href="#" className="flex items-center gap-3 md:gap-4 group shrink-0">
          {/* Contenedor del logo: Ajustado a h-10/w-10 para que no rompa el layout */}
          <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border border-gold/20 shrink-0">
            <Image 
              src="/gallery/vytalya.jpg" 
              alt="Vytalya Logo"
              fill
              className="object-cover transition-transform group-hover:scale-110"
              priority
            />
          </div>
          
          {/* Nombre de la marca: Reducido un poco en móvil para evitar desborde */}
          <div className="flex flex-col">
            <span className="text-sm md:text-xl font-light tracking-[0.3em] md:tracking-[0.4em] text-white italic whitespace-nowrap">
              {brandName.toUpperCase()}
            </span>
            <span className="block h-px w-0 bg-gold transition-all group-hover:w-full"></span>
          </div>
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="#servicios" 
            className="border border-gold/40 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-black transition-all"
          >
            Reservar
          </a>
        </nav>

        {/* BOTÓN MÓVIL */}
        <button 
          className="md:hidden text-white p-2 shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div className={`
        absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden md:hidden
        ${mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[10px] uppercase tracking-[0.3em] text-white/80 hover:text-gold"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center border border-gold/40 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] text-gold"
          >
            Agendar Cita
          </a>
        </div>
      </div>
    </header>
  );
}