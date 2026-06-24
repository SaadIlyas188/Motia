'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/photoshoot', label: 'Photoshoot' },
  { href: '/thesis', label: 'Thesis' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── DESKTOP TOP NAV (lg and above, unchanged) ── */}
      <nav
        className={`hidden lg:flex fixed top-8 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
          scrolled
            ? 'bg-motia-cream border-b border-motia-divider'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-16 w-full">
          <Link
            href="/"
            className="font-display italic text-[22px] text-motia-text leading-none"
          >
            motia
          </Link>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[13px] uppercase tracking-[0.08em] transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-motia-text'
                    : 'text-motia-muted hover:text-motia-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── MOBILE TOP BAR — logo only ── */}
      <div
        className={`lg:hidden fixed top-8 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-motia-cream/95 backdrop-blur-sm border-b border-motia-divider' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-center h-12">
          <Link
            href="/"
            className="font-display italic text-[20px] text-motia-text leading-none"
          >
            motia
          </Link>
        </div>
      </div>

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-motia-cream/95 backdrop-blur-sm border-t border-motia-divider"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex items-stretch">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex-1 flex flex-col items-center justify-center py-3 gap-0.5 transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-motia-text'
                  : 'text-motia-muted'
              }`}
            >
              <span
                className={`w-1 h-1 rounded-full mb-0.5 transition-all duration-200 ${
                  pathname === link.href ? 'bg-motia-accent opacity-100' : 'opacity-0'
                }`}
              />
              <span className="font-body text-[11px] uppercase tracking-[0.08em]">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </>
  );
}

