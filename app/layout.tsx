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

// METADATOS REALES PARA GOOGLE
export const metadata: Metadata = {
  title: "Vytalya | Estética Avanzada y Sueroterapia en Pachuca",
  description: "Especialistas en Bótox, Ácido Hialurónico, HIFU y Sueroterapia a domicilio en Pachuca, Hidalgo. Realza tu belleza natural con protocolos de vanguardia.",
  keywords: ["Bótox Pachuca", "Sueroterapia Pachuca", "HIFU Pachuca", "Estética avanzada Hidalgo", "Vytalya"],
  authors: [{ name: "Vytalya" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/gallery/vytalya.jpg", // Esto hará que tu logo salga en la pestañita del navegador
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
    <html lang="es"> {/* Cambiado de 'en' a 'es' para SEO en español */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}