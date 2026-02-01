'use client';

import { useEffect, useRef } from 'react';

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;     // 0..1
  size: number;
  rot: number;
};

export default function InteractiveRays() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const addSparks = (x: number, y: number, amount: number) => {
      const arr = sparksRef.current;
      for (let i = 0; i < amount; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 0.6 + Math.random() * 2.2;
        arr.push({
          x,
          y,
          vx: Math.cos(a) * s,
          vy: Math.sin(a) * s,
          life: 1,
          size: 6 + Math.random() * 12,
          rot: Math.random() * Math.PI,
        });
      }
      // límite para performance
      if (arr.length > 380) arr.splice(0, arr.length - 380);
    };

    const step = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      const arr = sparksRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= 0.02;

        if (p.life <= 0) {
          arr.splice(i, 1);
          continue;
        }

        // “rayito”: línea + glow
        const alpha = Math.max(0, Math.min(1, p.life));
        const len = p.size * (0.6 + (1 - p.life) * 0.5);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);

        ctx.globalAlpha = alpha * 0.9;
        ctx.lineCap = 'round';

        // glow
        ctx.shadowBlur = 14;
        ctx.shadowColor = 'rgba(199,184,144,0.95)'; // --gold
        ctx.strokeStyle = 'rgba(199,184,144,0.95)';
        ctx.lineWidth = 2.2;

        ctx.beginPath();
        ctx.moveTo(-len * 0.5, 0);
        ctx.lineTo(len * 0.5, 0);
        ctx.stroke();

        // puntito
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 18;
        ctx.fillStyle = 'rgba(199,184,144,0.95)';
        ctx.beginPath();
        ctx.arc(0, 0, 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      // suave en hover
      addSparks(e.clientX, e.clientY, 2);
    };

    const onDown = (e: PointerEvent) => {
      // más intenso en click/tap
      addSparks(e.clientX, e.clientY, 18);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });

    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}
