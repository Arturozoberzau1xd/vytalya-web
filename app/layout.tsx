import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// CONFIGURACIÓN DE METADATOS INTEGRADA
export const metadata: Metadata = {
  title: "Vytalya | Estética Avanzada y Sueroterapia en Pachuca",
  description: "Especialistas en Bótox, Ácido Hialurónico, HIFU y Sueroterapia a domicilio en Pachuca, Hidalgo. Realza tu belleza natural con protocolos de vanguardia.",
  keywords: ["Bótox Pachuca", "Sueroterapia Pachuca", "HIFU Pachuca", "Estética avanzada Hidalgo", "Vytalya"],
  authors: [{ name: "Vytalya" }],
  // ELIMINAMOS VIEWPORT DE AQUÍ (Next.js lo maneja solo o en constante aparte)
  icons: {
    icon: "/gallery/vytalya.jpg",
  },
  // ASÍ SE PONE EL CÓDIGO DE GOOGLE EN NEXT.JS:
  verification: {
    google: "gZjIScHi8I_ts5qtn8c8btl8oI48r1XVxhF9iERkGYM",
  },
  openGraph: {
    title: "Vytalya | Clínica de Estética Elite",
    description: "Protocolos avanzados y atención personalizada en Pachuca.",
    type: "website",
    locale: "es_MX",
    siteName: "Vytalya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}