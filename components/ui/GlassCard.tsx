import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string; // Esto permite que aceptes className desde Services.tsx
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`
      relative overflow-hidden rounded-[2.5rem] 
      border border-white/10 bg-white/5 
      backdrop-blur-md transition-all duration-500
      hover:border-gold/30
      ${className} 
    `}>
      {children}
    </div>
  );
}