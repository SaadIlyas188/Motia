'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageHero } from '@/components/ui/PageHero';
import { PullQuote } from '@/components/ui/PullQuote';

const abstractParagraphs = [
  "This practice-led thesis examines the Arabian jasmine, known in South Asian traditions as motia, as a sensory, cultural, and symbolic medium through which memory, identity, and personal experience are understood and expressed. Rooted in the flower's delicate fragrance and its ephemeral form, the research positions motia not simply as a botanical subject but as a living repository of emotional inheritance, familial care, and intergenerational connection.",
  "The inquiry begins with personal history. Growing up, the scent of Arabian jasmine was never merely a fragrance. It was a presence woven into daily life through the hands of my nano, who tended jasmine plants with quiet dedication and threaded the flowers into garlands, and through my mother, who carried the scent as an expression of care, devotion, and home. These lived experiences gave rise to the central research question: how has the Arabian jasmine flower, as experienced through my nano and my mother, shaped my understanding of memory, care, and cultural identity, and how can this personal relationship reveal broader meanings of the flower within lived traditions and intergenerational practice?",
  "The purpose of this study is to examine how such an intimate, inherited relationship with motia opens onto wider cultural questions, specifically how everyday objects carry layered emotional and symbolic value, and how sensory memory sustains tradition across generations. Drawing on autoethnographic reflection, oral histories gathered through conversations with my nano and my mother, and secondary sources in cultural studies, ethnobotany, and memory studies, the thesis approaches motia as a site where the personal and the collective converge.",
  "The research holds three aims: to document and analyse the personal significance of the Arabian jasmine as a vessel of memory and familial care; to situate this experience within broader cultural and symbolic frameworks, particularly those rooted in South Asian tradition; and to translate these findings into a body of artistic practice that engages the tactile, olfactory, and visual qualities of the flower as a form of storytelling.",
  "Outcomes take the form of a written thesis and a corresponding body of artwork. Through material and sensory exploration, motia emerges as both subject and language — a carrier of inherited femininity, tenderness, purity, and resilience. Together, the written and practice-based components address the central question of whether embodied, personal experience with a culturally significant object can constitute a legitimate and meaningful form of knowledge.",
  "This research contributes to conversations at the intersection of art practice, cultural memory, and sensory experience. It proposes that intimate, domestic histories, sustained through scent, ritual, and form, carry genuine cultural weight. In giving that weight a visible and tangible presence, the work ultimately asks how fleeting beauty holds memory, and what it means to inherit something that was never spoken aloud.",
];

const aims = [
  {
    num: '01',
    text: 'To document and analyse the personal significance of the Arabian jasmine as a vessel of memory and familial care.',
  },
  {
    num: '02',
    text: 'To situate this experience within broader cultural and symbolic frameworks, particularly those rooted in South Asian tradition.',
  },
  {
    num: '03',
    text: 'To translate these findings into a body of artistic practice that engages the tactile, olfactory, and visual qualities of the flower as a form of storytelling.',
  },
];

export default function ProjectPage() {
  return (
    <>
      <PageHero
        title="the project"
        subtitle="A practice-led thesis examining Arabian jasmine as a medium of memory, identity, and intergenerational care."
      />

      <section className="px-6 md:px-10 max-w-[1280px] mx-auto pb-20 md:pb-28">
        <div className="max-w-[640px]">
          {/* Paragraphs 1-2 */}
          {abstractParagraphs.slice(0, 2).map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-body text-[16px] text-motia-text leading-[1.8] mb-8"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Pull quote between paragraphs 2 and 3 */}
        <PullQuote>
          Motia, I found, sits at the point where a personal feeling and a shared cultural life become the same thing.
        </PullQuote>

        <div className="max-w-[640px]">
          {/* Paragraphs 3-4 */}
          {abstractParagraphs.slice(2, 4).map((p, i) => (
            <motion.p
              key={i + 2}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-body text-[16px] text-motia-text leading-[1.8] mb-8"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Full-bleed image between paragraphs 4 and 5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="my-16 -mx-6 md:-mx-10 lg:mx-0"
        >
          <Image
            src="https://picsum.photos/seed/motia-flower-closeup/1400/600"
            alt="Close-up of motia flowers"
            width={1400}
            height={600}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="max-w-[640px]">
          {/* Paragraphs 5-6 */}
          {abstractParagraphs.slice(4).map((p, i) => (
            <motion.p
              key={i + 4}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-body text-[16px] text-motia-text leading-[1.8] mb-8"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Three aims */}
        <div className="mt-20 border-t border-motia-divider pt-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-display italic text-[28px] md:text-[36px] font-light text-motia-text mb-14"
          >
            research aims
          </motion.h2>

          <div className="space-y-12">
            {aims.map((aim) => (
              <motion.div
                key={aim.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex gap-8 items-start"
              >
                <span className="font-display text-[48px] md:text-[64px] font-light text-motia-divider leading-none flex-shrink-0">
                  {aim.num}
                </span>
                <p className="font-body text-[16px] text-motia-text leading-[1.8] pt-4 max-w-[520px]">
                  {aim.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
