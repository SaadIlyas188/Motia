'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photoshootImages = [
  { src: '/images/photoshoot/hero.jpg', alt: 'Final collection editorial hero shot', w: 1400, h: 900 },
  { src: '/images/photoshoot/look-1.jpg', alt: 'Look 1 — enclosed and protective silhouette', w: 800, h: 1100 },
  { src: '/images/photoshoot/look-2.jpg', alt: 'Look 2 — layered petal forms', w: 800, h: 1100 },
  { src: '/images/photoshoot/look-3.jpg', alt: 'Look 3 — opening silhouette', w: 800, h: 1100 },
  { src: '/images/photoshoot/look-4.jpg', alt: 'Look 4 — open and expansive form', w: 800, h: 1100 },
  { src: '/images/photoshoot/detail-1.jpg', alt: 'Detail — fabric petal construction', w: 800, h: 800 },
  { src: '/images/photoshoot/detail-2.jpg', alt: 'Detail — hand-stitched elements', w: 800, h: 800 },
  { src: '/images/photoshoot/detail-3.jpg', alt: 'Detail — layering and draping', w: 800, h: 800 },
  { src: '/images/photoshoot/editorial-1.jpg', alt: 'Editorial — garment in motion', w: 800, h: 1000 },
  { src: '/images/photoshoot/editorial-2.jpg', alt: 'Editorial — domestic setting', w: 800, h: 1000 },
  { src: '/images/photoshoot/editorial-3.jpg', alt: 'Editorial — scent and presence', w: 800, h: 1000 },
  { src: '/images/photoshoot/editorial-4.jpg', alt: 'Editorial — final group shot', w: 1400, h: 900 },
];

export default function PhotoshootPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 md:pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-motia-linen flex items-center justify-center"
        >
          <p className="font-body text-[12px] text-motia-muted italic">[Hero: Photoshoot editorial image]</p>
        </motion.div>
      </section>

      {/* Title */}
      <section className="px-5 md:px-10 max-w-[1280px] mx-auto pt-10 md:pt-24 pb-8 md:pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display italic text-[36px] md:text-[64px] font-light text-motia-text leading-[1.1]"
        >
          photoshoot
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 md:mt-6 font-body text-[13px] md:text-[15px] text-motia-muted max-w-[320px] md:max-w-[600px] leading-[1.75]"
        >
          Four garments expressing the blooming of Motia — from enclosed, protective forms to open and expansive silhouettes. Photographed in a domestic setting. The scent of jasmine was present on set.
        </motion.p>
      </section>

      {/* Masonry grid */}
      <section className="px-5 md:px-10 max-w-[1280px] mx-auto py-6 md:py-16">
        <div className="columns-2 md:columns-2 lg:columns-3 gap-2 md:gap-6">
          {photoshootImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-2 md:mb-6 break-inside-avoid"
            >
              <div className="bg-motia-linen aspect-[3/4] flex items-center justify-center">
                <p className="font-body text-[9px] md:text-[12px] text-motia-muted italic text-center px-2 md:px-4">[{img.alt}]</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom quote */}
      <section className="px-5 md:px-10 pb-14 md:pb-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display italic text-[17px] md:text-[24px] font-light text-motia-muted text-center max-w-[280px] md:max-w-[600px] mx-auto leading-[1.6]"
        >
          The decision to use staging that suggested domesticity over runway was a means of working against the exoticisation of jasmine.
        </motion.p>
      </section>
    </>
  );
}
