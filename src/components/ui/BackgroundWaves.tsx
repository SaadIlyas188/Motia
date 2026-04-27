'use client';

import { useEffect, useRef } from 'react';

interface WaveLine {
  yRatio: number;
  ampRatio: number;
  freq: number;       // wave cycles across viewport width
  harmonic: number;   // secondary frequency multiplier for organic shape
  speed: number;      // radians per second — primary wave
  harmonicSpeed: number;
  phase: number;
  harmonicPhase: number;
  color: string;
  width: number;
  opacity: number;
}

const LINES: WaveLine[] = [
  { yRatio: 0.12, ampRatio: 0.055, freq: 1.1, harmonic: 2.3, speed: 0.22, harmonicSpeed: 0.14, phase: 0.0,  harmonicPhase: 0.8,  color: '#B89880', width: 0.9, opacity: 0.13 },
  { yRatio: 0.28, ampRatio: 0.040, freq: 0.8, harmonic: 1.9, speed: 0.15, harmonicSpeed: 0.09, phase: 1.4,  harmonicPhase: 2.1,  color: '#D9D2C8', width: 1.2, opacity: 0.10 },
  { yRatio: 0.42, ampRatio: 0.065, freq: 1.4, harmonic: 2.7, speed: 0.31, harmonicSpeed: 0.18, phase: 0.6,  harmonicPhase: 1.5,  color: '#8C7B6E', width: 0.6, opacity: 0.08 },
  { yRatio: 0.55, ampRatio: 0.035, freq: 0.9, harmonic: 2.1, speed: 0.19, harmonicSpeed: 0.12, phase: 2.2,  harmonicPhase: 0.4,  color: '#B89880', width: 1.0, opacity: 0.11 },
  { yRatio: 0.67, ampRatio: 0.050, freq: 1.2, harmonic: 2.5, speed: 0.26, harmonicSpeed: 0.16, phase: 1.9,  harmonicPhase: 3.0,  color: '#D9D2C8', width: 0.7, opacity: 0.09 },
  { yRatio: 0.78, ampRatio: 0.045, freq: 1.0, harmonic: 1.7, speed: 0.17, harmonicSpeed: 0.10, phase: 3.1,  harmonicPhase: 1.2,  color: '#8C7B6E', width: 0.8, opacity: 0.10 },
  { yRatio: 0.90, ampRatio: 0.038, freq: 1.3, harmonic: 2.9, speed: 0.29, harmonicSpeed: 0.20, phase: 0.9,  harmonicPhase: 2.7,  color: '#B89880', width: 0.5, opacity: 0.09 },
];

export function BackgroundWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const p = canvas.parentElement;
      if (!p) return;
      w = canvas.width  = p.offsetWidth;
      h = canvas.height = p.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const STEPS = 140; // points per line — smooth enough

    const draw = (ts: number) => {
      const t = ts * 0.001; // seconds
      ctx.clearRect(0, 0, w, h);
      ctx.save();

      for (const line of LINES) {
        const baseY = line.yRatio   * h;
        const amp   = line.ampRatio * h;

        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = line.opacity;
        ctx.lineWidth   = line.width;
        ctx.lineCap     = 'round';

        for (let i = 0; i <= STEPS; i++) {
          const nx = i / STEPS;                          // 0 → 1 across width
          const x  = nx * w;

          // Primary sine wave
          const primary   = amp * Math.sin(nx * Math.PI * 2 * line.freq + t * line.speed + line.phase);
          // Harmonic — lower amplitude, higher frequency, different speed
          const harmonic  = (amp * 0.28) * Math.sin(nx * Math.PI * 2 * line.freq * line.harmonic + t * line.harmonicSpeed + line.harmonicPhase);
          // Tertiary drift — very slow whole-line vertical drift
          const drift     = (amp * 0.12) * Math.sin(t * 0.07 + line.phase * 0.5);

          const y = baseY + primary + harmonic + drift;

          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
