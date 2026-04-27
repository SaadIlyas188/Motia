'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photoshootImages = [
  { src: 'https://picsum.photos/seed/motia-shoot-1/1400/900', w: 1400, h: 900 },
  { src: 'https://picsum.photos/seed/motia-shoot-2/800/1100', w: 800, h: 1100 },
  { src: 'https://picsum.photos/seed/motia-shoot-3/800/600', w: 800, h: 600 },
  { src: 'https://picsum.photos/seed/motia-shoot-4/800/1000', w: 800, h: 1000 },
  { src: 'https://picsum.photos/seed/motia-shoot-5/800/800', w: 800, h: 800 },
  { src: 'https://picsum.photos/seed/motia-shoot-6/800/1200', w: 800, h: 1200 },
  { src: 'https://picsum.photos/seed/motia-shoot-7/800/700', w: 800, h: 700 },
  { src: 'https://picsum.photos/seed/motia-shoot-8/800/1100', w: 800, h: 1100 },
  { src: 'https://picsum.photos/seed/motia-shoot-9/800/900', w: 800, h: 900 },
  { src: 'https://picsum.photos/seed/motia-shoot-10/800/750', w: 800, h: 750 },
  { src: 'https://picsum.photos/seed/motia-shoot-11/800/1050', w: 800, h: 1050 },
  { src: 'https://picsum.photos/seed/motia-shoot-12/800/800', w: 800, h: 800 },
];

export default function PhotoshootPage() {
  return (
    <>
      {/* Full-width hero image — no text */}
      <div className="pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src={photoshootImages[0].src}
            alt="Photoshoot editorial image"
            width={photoshootImages[0].w}
            height={photoshootImages[0].h}
            priority
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Masonry grid */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto py-16 md:py-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
          {photoshootImages.slice(1).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-4 md:mb-6 break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={`Photoshoot image ${i + 2}`}
                width={img.w}
                height={img.h}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom text */}
      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display italic text-[20px] md:text-[24px] font-light text-motia-muted text-center max-w-[600px] mx-auto"
        >
          Photographed against the quiet of a South Asian garden. The scent was present on set.
        </motion.p>
      </section>
    </>
  );
}
