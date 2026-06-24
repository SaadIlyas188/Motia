'use client';

import { useEffect, useState } from 'react';

interface Flower {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  startRotation: number;
  endRotation: number;
  drift: number;
  opacity: number;
}

const MotiaSVG = ({ size, opacity }: { size: number; opacity: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 5 petals rotated around center — jasmine / motia shape */}
    {[0, 72, 144, 216, 288].map((deg) => (
      <ellipse
        key={deg}
        cx="50"
        cy="22"
        rx="10"
        ry="18"
        fill="white"
        transform={`rotate(${deg}, 50, 50)`}
      />
    ))}
    {/* centre */}
    <circle cx="50" cy="50" r="9" fill="#FEF9EE" />
    <circle cx="50" cy="50" r="5" fill="#F5E6C8" />
  </svg>
);

export function MotiaShower() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    setFlowers(
      Array.from({ length: 55 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 4.5,
        duration: 4 + Math.random() * 4,
        size: 14 + Math.random() * 20,
        startRotation: Math.random() * 180,
        endRotation: Math.random() * 360 - 180,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.55 + Math.random() * 0.45,
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes motia-shower {
          0%   { transform: translateY(-60px) translateX(0px) rotate(0deg); opacity: 0; }
          8%   { opacity: 1; }
          85%  { opacity: 0.9; }
          100% { transform: translateY(105vh) translateX(var(--drift)) rotate(var(--end-rot)); opacity: 0; }
        }
        .motia-flower {
          position: fixed;
          top: 0;
          pointer-events: none;
          animation: motia-shower ease-in forwards;
          will-change: transform, opacity;
          z-index: 9999;
        }
      `}</style>

      {flowers.map((f) => (
        <div
          key={f.id}
          className="motia-flower"
          style={{
            left: `${f.left}%`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            '--drift': `${f.drift}px`,
            '--end-rot': `${f.endRotation}deg`,
            transform: `rotate(${f.startRotation}deg)`,
          } as React.CSSProperties}
        >
          <MotiaSVG size={f.size} opacity={f.opacity} />
        </div>
      ))}
    </>
  );
}
