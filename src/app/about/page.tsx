'use client';

import { motion } from 'framer-motion';
import { PageHero } from '@/components/ui/PageHero';
import { PullQuote } from '@/components/ui/PullQuote';

const details = [
  { label: 'Name', value: 'Shiza Khan' },
  { label: 'Registration No.', value: 'F2022-057' },
  { label: 'Session', value: '2022–2026' },
  { label: 'Degree', value: 'Bachelor of Design — Fashion Designing' },
  { label: 'University', value: 'Beaconhouse National University' },
  { label: 'Supervisors', value: 'Ms Sonia Kashmiri, Ms Shehrbano Syed, Ms Saman Arif, Ms Sana Khalid' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="about" subtitle="Shiza Khan — Fashion Design student at Beaconhouse National University." />

      {/* Two-column bio */}
      <section className="px-5 md:px-10 max-w-[1280px] mx-auto pb-10 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="bg-motia-linen aspect-[3/4] flex items-center justify-center">
              <p className="font-body text-[12px] text-motia-muted italic">[Portrait of Shiza Khan]</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-4 md:space-y-6"
          >
            <p className="font-body text-[13px] md:text-[16px] text-motia-text leading-[1.9]">
              Shiza Khan is a final-year Fashion Designing student at Beaconhouse National University (Session 2022–2026), working at the intersection of fashion design, cultural memory, and sensory experience. This thesis — submitted as partial fulfilment of her Bachelor of Design — explores how the objects we inherit carry more than their material weight.
            </p>
            <p className="font-body text-[13px] md:text-[16px] text-motia-text leading-[1.9]">
              This project began with a scent. The scent of <em>Motia</em> — Arabian jasmine — which has been present in her family for as long as anyone can remember. Her <em>nano</em> tended jasmine plants with quiet dedication, threading the flowers into garlands. Her mother carried the scent as an expression of care, devotion, and home.
            </p>
            <p className="font-body text-[13px] md:text-[16px] text-motia-text leading-[1.9]">
              Through this practice-led thesis, she has explored what the flower carries — not botanically, but emotionally, culturally, and sensorially. The research produced both a written thesis and a fashion collection of four garments that translate the symbolism, structure, and meaning of <em>Motia</em> into silhouette, layers, and sequencing.
            </p>
            <p className="font-body text-[13px] md:text-[16px] text-motia-text leading-[1.9]">
              Her broader practice is concerned with the domestic, the inherited, and the feminine — with the things women pass to each other in silence. She believes that sensory memory is a legitimate form of knowledge, and that the most profound cultural archives are often the quietest.
            </p>
            <p className="font-body text-[13px] md:text-[16px] text-motia-text leading-[1.9]">
              <em>Motia</em> represents the idea of femininity and the strength that exists within the women of her community. For Shiza, Arabian jasmine holds deep meaning as a symbol of identity — the memory of her <em>nano</em> and her mother woven into the creation of her own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research question pull quote */}
      <PullQuote>
        How has the Arabian jasmine flower, as experienced through my nano and my mother, shaped my understanding of memory, care, and cultural identity?
      </PullQuote>

      {/* Formal submission note */}
      <section className="bg-motia-dark py-8 md:py-10">
        <div className="px-5 md:px-10 max-w-[1280px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-body text-[11px] md:text-[13px] text-motia-muted leading-[1.8]"
          >
            Submitted as partial fulfilment of the requirement for the degree of{' '}
            <span className="text-motia-cream font-medium">Bachelor of Design — Fashion Designing</span>
            <br className="hidden md:block" />
            <span className="md:hidden"> · </span>
            Beaconhouse National University &nbsp;·&nbsp; Registration No. F2022-057 &nbsp;·&nbsp; Session 2022–2026
          </motion.p>
        </div>
      </section>

      {/* Details grid */}
      <section className="px-5 md:px-10 max-w-[1280px] mx-auto py-10 md:py-24">
        <div className="border-t border-motia-divider pt-8 md:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {details.map((d) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.08em] text-motia-muted mb-1 md:mb-2">
                  {d.label}
                </p>
                <p className="font-body text-[13px] md:text-[16px] text-motia-text">
                  {d.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="px-5 md:px-10 max-w-[800px] mx-auto pb-10 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h3 className="font-display italic text-[20px] md:text-[22px] text-motia-text mb-4 md:mb-6">
            Approach and Methods
          </h3>
          <div className="space-y-4 md:space-y-5 font-body text-[13px] md:text-[16px] text-motia-text leading-[1.9]">
            <p>
              Shiza&rsquo;s research methodology combined autoethnography, oral history, and practice-based research. She turned to her own memory, to semi-structured conversations with her <em>nano</em> and her mother, and to sensory analysis of fresh and dried <em>Motia</em> specimens.
            </p>
            <p>
              The most consistent finding was that the <em>Motia</em> plant functions within her family as an object of care provided to other women. Neither her <em>nano</em> nor her mother was formally taught how to thread jasmine garlands; they learned through observing others — embodied knowledge passed without language.
            </p>
            <p>
              This thesis argues that intimate domestic histories, carried through scent, ritual, and form, have real cultural weight. By giving that weight visible and tangible form, the work asks how fleeting beauty holds memory, and what it means to inherit something never spoken aloud.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Acknowledgements */}
      <section className="px-5 md:px-10 max-w-[800px] mx-auto pb-14 md:pb-28">
        <div className="border-t border-motia-divider pt-8 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="font-display italic text-[20px] md:text-[22px] text-motia-text mb-3 md:mb-6">
              Acknowledgements
            </h3>
            <p className="font-body text-[12px] md:text-[15px] text-motia-muted leading-[1.8]">
              Shiza is deeply grateful to Ms Sonia Kashmiri, Ms Shehrbano Syed, Ms Saman Arif, and Ms Sana Khalid for their guidance and encouragement at every stage. She also thanks the staff at Beaconhouse National University, and her family and friends, whose patience and belief carried her through.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
