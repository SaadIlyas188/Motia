'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BackgroundWaves } from '@/components/ui/BackgroundWaves';
import { MotiaShower } from '@/components/ui/MotiaShower';

const sections = [
  {
    num: '01',
    title: 'Photoshoot',
    desc: 'The final collection photographed — garments shaped by the memory of Motia.',
    href: '/photoshoot',
  },
  {
    num: '02',
    title: 'Thesis',
    desc: 'A practice-led study of memory, identity, and intergenerational practice through Arabian jasmine.',
    href: '/thesis',
  },
  {
    num: '03',
    title: 'About',
    desc: 'Shiza Khan — researcher, designer, and the voice behind this project.',
    href: '/about',
  },
];

export default function Home() {
  return (
    <>
      <MotiaShower />
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-motia-cream px-6 pt-12 pb-6">
        <BackgroundWaves />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-display italic text-[58px] md:text-[90px] font-light text-motia-text leading-none"
        >
          motia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="mt-4 md:mt-5 font-body text-[10px] md:text-[14px] font-light tracking-widest uppercase text-motia-muted text-center"
        >
          Arabian Jasmine — Memory, Identity &amp; Intergenerational Practice
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-6 md:mt-8 h-px w-12 md:w-16 bg-motia-divider"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="mt-6 font-body text-[13px] md:text-[15px] text-motia-text leading-[1.8] max-w-[320px] md:max-w-[560px] text-center"
        >
          Arabian jasmine is known as <em>Motia</em> in South Asian traditions. A practice-led thesis that asks what a flower carries, and what it means to inherit something never spoken aloud.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-5 font-body text-[11px] md:text-[13px] text-motia-muted"
        >
          A Practice-Led Thesis by Shiza Khan
        </motion.p>
      </section>

      {/* Navigation cards */}
      <section className="px-5 md:px-10 max-w-[1280px] mx-auto py-12 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Link href={s.href} className="group block border-t border-motia-divider pt-5">
                <p className="font-body text-[11px] uppercase tracking-[0.1em] text-motia-muted mb-2">
                  {s.num}
                </p>
                <h2 className="font-display italic text-[26px] md:text-[32px] text-motia-text group-hover:text-motia-accent transition-colors duration-300 mb-2">
                  {s.title}
                </h2>
                <p className="font-body text-[13px] md:text-[15px] text-motia-muted leading-[1.7]">
                  {s.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-14 md:py-28 px-6 md:px-10 bg-motia-linen">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display italic text-[20px] md:text-[32px] font-light leading-[1.5] max-w-[700px] mx-auto text-center text-motia-text"
        >
          &ldquo;Can something as personal and embodied as this be taken seriously as knowledge?&rdquo;
        </motion.blockquote>
      </section>
    </>
  );
}
