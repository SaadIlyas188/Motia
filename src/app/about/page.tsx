'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageHero } from '@/components/ui/PageHero';
import { PullQuote } from '@/components/ui/PullQuote';

const details = [
  { label: 'University', value: 'Beaconhouse National University' },
  { label: 'Programme', value: 'MA Fashion Futures' },
  { label: 'Year', value: '2023–2024' },
  { label: 'Supervisor', value: 'Dr. Amina Patel' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="about" />

      {/* Two-column bio */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <Image
              src="https://picsum.photos/seed/motia-about-full/600/800"
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
            className="space-y-6"
          >
            <p className="font-body text-[16px] text-motia-text leading-[1.9]">
              I am Shiza Khan — a South Asian researcher, designer, and artist. My work sits at the intersection of cultural memory, fashion, and sensory experience — exploring how the objects we inherit carry more than their material weight.
            </p>
            <p className="font-body text-[16px] text-motia-text leading-[1.9]">
              This project began with a scent. The scent of motia — Arabian jasmine — which has been present in my family for as long as anyone can remember. My nano tended jasmine plants in her courtyard. My mother wore jasmine in her hair. I grew up with the flower as a constant, quiet companion.
            </p>
            <p className="font-body text-[16px] text-motia-text leading-[1.9]">
              Through this practice-led thesis, I have tried to understand what the flower carries — not botanically, but emotionally, culturally, and sensorially. The research has produced both a written thesis and a body of artistic practice: a textile collection, a photoshoot, pressed flower compositions, and this website.
            </p>
            <p className="font-body text-[16px] text-motia-text leading-[1.9]">
              My broader practice is concerned with the domestic, the inherited, and the feminine — with the things women pass to each other in silence. I believe that sensory memory is a legitimate form of knowledge, and that the most profound cultural archives are often the quietest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research question pull quote */}
      <PullQuote>
        How has the Arabian jasmine flower, as experienced through my nano and my mother, shaped my understanding of memory, care, and cultural identity — and how can this personal relationship reveal broader meanings of the flower within lived traditions and intergenerational practice?
      </PullQuote>

      {/* Academic details */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto py-16 md:py-24">
        <div className="border-t border-motia-divider pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {details.map((d) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <p className="font-body text-[12px] uppercase tracking-[0.08em] text-motia-muted mb-2">
                  {d.label}
                </p>
                <p className="font-body text-[16px] text-motia-text">
                  {d.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto pb-20 md:pb-28">
        <div className="border-t border-motia-divider pt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="font-body text-[12px] uppercase tracking-[0.08em] text-motia-muted mb-3">
              Contact
            </p>
            <p className="font-body text-[16px] text-motia-text mb-4">
              For inquiries about this research or collaboration opportunities, please get in touch.
            </p>
            <a
              href="mailto:hello@motia-project.com"
              className="font-body text-[15px] text-motia-accent hover:text-motia-text transition-colors duration-300 underline underline-offset-4 decoration-motia-divider"
            >
              hello@motia-project.com
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
