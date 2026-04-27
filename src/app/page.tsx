'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PullQuote } from '@/components/ui/PullQuote';
import { BackgroundWaves } from '@/components/ui/BackgroundWaves';
import collectionData from '@/data/collection.json';

const teasers = [
  {
    num: '01',
    title: 'Memory',
    desc: 'A personal and scholarly inquiry into what a flower carries across generations.',
    href: '/project',
  },
  {
    num: '02',
    title: 'Collection',
    desc: 'Eight garments drawn from the motia flower — its colour, texture, and brief life.',
    href: '/collection',
  },
  {
    num: '03',
    title: 'Process',
    desc: 'From gathering jasmine to threading garlands to the final photoshoot.',
    href: '/process',
  },
];

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-motia-cream px-6">
        <BackgroundWaves />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-display italic text-[72px] md:text-[90px] font-light text-motia-text leading-none"
        >
          motia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="mt-5 font-body text-[14px] font-light tracking-widest uppercase text-motia-muted"
        >
          a study of memory, fragrance, and inherited femininity
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-8 h-px w-16 bg-motia-divider"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="mt-8 font-body text-[15px] text-motia-text leading-[1.8] max-w-[520px] text-center"
        >
          Arabian jasmine is known as motia in South Asian traditions. This is a
          practice-led thesis — a piece of writing and a body of artwork — that
          asks what a flower carries, and what it means to inherit something
          never spoken aloud.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-motia-divider mx-auto"
          />
        </motion.div>
      </section>

      {/* Section 2 — Three-column teaser */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {teasers.map((t) => (
            <motion.div
              key={t.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p className="font-display text-[13px] text-motia-muted mb-4">
                {t.num}
              </p>
              <div className="h-px bg-motia-divider mb-5" />
              <h3 className="font-display italic text-[28px] text-motia-text mb-3">
                {t.title}
              </h3>
              <p className="font-body text-[15px] text-motia-muted leading-relaxed mb-5">
                {t.desc}
              </p>
              <Link
                href={t.href}
                className="inline-flex items-center gap-2 font-body text-[13px] uppercase tracking-[0.08em] text-motia-text group"
              >
                Explore
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3 — Pull Quote */}
      <PullQuote dark>
        The flower became a language for things inherited yet rarely spoken
        of — femininity, tenderness, purity, and resilience.
      </PullQuote>

      {/* Section 4 — About teaser */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <Image
              src="https://picsum.photos/seed/motia-about-portrait/600/800"
              alt="Portrait of the researcher"
              width={600}
              height={800}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="font-body text-[15px] md:text-[16px] text-motia-text leading-[1.8] mb-6">
              This project is a practice-led thesis by a South Asian woman
              exploring the Arabian jasmine — motia — as a carrier of memory,
              familial care, and intergenerational feminine inheritance. The
              research produces both a written thesis and a body of artistic
              practice: a fashion collection, a photoshoot, and artwork.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-[13px] uppercase tracking-[0.08em] text-motia-text group"
            >
              About the project
              <ArrowRight
                size={14}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 5 — Collection preview */}
      <section className="py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1280px] mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-display italic text-[28px] md:text-[36px] font-light text-motia-text"
          >
            the collection
          </motion.h2>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 px-6 md:px-10 pb-4" style={{ width: 'max-content' }}>
            {collectionData.slice(0, 6).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-[280px] md:w-[320px] flex-shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={320}
                  height={427}
                  loading="lazy"
                  className="w-full h-auto object-cover mb-4"
                />
                <p className="font-display italic text-[20px] text-motia-text">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Footer teaser */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display italic text-[28px] md:text-[36px] lg:text-[42px] font-light text-motia-text text-center leading-tight max-w-[700px] mx-auto"
        >
          The research. The collection. The process. The story.
        </motion.p>
      </section>
    </>
  );
}
