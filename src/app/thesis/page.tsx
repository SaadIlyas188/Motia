'use client';

import { motion } from 'framer-motion';
import { PullQuote } from '@/components/ui/PullQuote';

export default function ThesisPage() {
  return (
    <>
      {/* ══ SECTION 1 — HERO ══ */}
      <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-end px-5 md:px-10 pb-14 md:pb-28 bg-motia-dark overflow-hidden pt-12 md:pt-0">
        <div className="absolute inset-0 bg-motia-dark">
          <div className="absolute inset-0 bg-gradient-to-t from-motia-dark via-motia-dark/80 to-motia-dark/40" />
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <p className="font-body text-[11px] text-motia-cream italic text-center px-6">[Full-bleed: Real motia specimens on table]</p>
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-4 md:mb-6"
          >
            Practice-Led Thesis
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display italic text-[38px] md:text-[72px] lg:text-[90px] font-light text-motia-cream leading-[1.05]"
          >
            Arabian Jasmine
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 md:mt-4 font-display text-[16px] md:text-[28px] font-light text-motia-sand leading-snug max-w-[280px] md:max-w-[600px]"
          >
            Memory, Identity, and Intergenerational Practice
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 md:mt-8 h-px w-14 md:w-20 bg-motia-muted origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 md:mt-6 font-body text-[12px] md:text-[14px] text-motia-muted"
          >
            Shiza Khan — Beaconhouse National University
          </motion.p>
        </div>
      </section>

      {/* ══ SECTION 2 — THE QUESTION ══ */}
      <section className="px-5 md:px-10 py-14 md:py-36 max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-7 md:mb-10">
            The Question
          </p>
          <h2 className="font-display italic text-[22px] md:text-[38px] lg:text-[44px] font-light text-motia-text leading-[1.4]">
            How has the Arabian jasmine flower, as experienced through my <em>nano</em> and my mother, shaped my understanding of memory, care, and cultural identity?
          </h2>
          <div className="mt-8 md:mt-12 h-px w-10 bg-motia-divider mx-auto" />
          <p className="mt-7 md:mt-10 font-body text-[13px] md:text-[16px] text-motia-muted leading-[1.8] max-w-[320px] md:max-w-[600px] mx-auto">
            This thesis asks whether something as personal and embodied as scent can be taken seriously as knowledge — and whether the quiet, domestic histories carried between women hold real cultural weight.
          </p>
        </motion.div>
      </section>

      {/* ══ SECTION 3 — ORIGIN STORY ══ */}
      <section className="bg-motia-linen py-12 md:py-36">
        <div className="px-5 md:px-10 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-motia-sand aspect-[4/3] md:aspect-[4/5] flex items-center justify-center">
                <p className="font-body text-[11px] text-motia-muted italic text-center px-4">[Real motia specimens on table]</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-4 md:mb-6">
                Origin
              </p>
              <h3 className="font-display italic text-[26px] md:text-[40px] font-light text-motia-text leading-[1.2] mb-5 md:mb-8">
                It begins with a scent.
              </h3>
              <div className="space-y-4 font-body text-[13px] md:text-[15px] text-motia-text leading-[1.8]">
                <p>
                  The scent of <em>Motia</em> was never just a fragrance — it was a presence woven into daily life. My <em>nano</em> nurtured jasmine plants with quiet dedication, threading the flowers into garlands. My mother carried the scent as an expression of care, devotion, and home.
                </p>
                <p>
                  Because of them, <em>Motia</em> means more than beauty. For me, it is memory, intimacy, and the knowledge of another woman — a feeling passed from one woman to another.
                </p>
                <p className="text-motia-muted italic text-[12px] md:text-[14px]">
                  The flower is commonly worn close to the body, placed into the hair. Its structure — the way it blooms, the layered petals — became the design language for this collection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — THREE AIMS ══ */}
      <section className="px-5 md:px-10 py-12 md:py-36 max-w-[1280px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-10 md:mb-14 text-center"
        >
          Three Aims
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-14">
          {[
            { num: '01', text: 'To document what Arabian jasmine has meant in my life and how it has carried memory and familial care.' },
            { num: '02', text: 'To place that experience within the broader cultural and symbolic world it belongs to — particularly within South Asian tradition.' },
            { num: '03', text: "To carry all of this into artistic practice through work that engages the flower's scent, texture, and appearance as a way of telling a story." },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex md:flex-col gap-4 md:gap-0 items-start border-t border-motia-divider pt-5"
            >
              <p className="font-display text-[36px] md:text-[56px] font-light text-motia-sand leading-none shrink-0 md:mb-4">
                {item.num}
              </p>
              <p className="font-body text-[13px] md:text-[15px] text-motia-text leading-[1.8]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 5 — METHODOLOGY ══ */}
      <section className="bg-motia-dark py-12 md:py-36">
        <div className="px-5 md:px-10 max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-4 md:mb-6">
              Methodology
            </p>
            <h3 className="font-display italic text-[22px] md:text-[40px] font-light text-motia-cream leading-[1.2] mb-4 md:mb-6 max-w-[280px] md:max-w-[600px]">
              Memory as method. Conversation as data. Making as knowledge.
            </h3>
            <p className="font-body text-[13px] md:text-[15px] text-motia-muted leading-[1.8] max-w-[320px] md:max-w-[550px] mb-10 md:mb-16">
              Three qualitative frameworks guided this research: autoethnography, oral history, and practice-based research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { label: 'Autoethnography', desc: 'A journal of scent memories — the placement of jasmine in the home, the methods of creating garlands without harming the buds.' },
              { label: 'Oral History', desc: 'Conversations with nano and mother. Motia was discussed as care, not decoration. Neither woman was formally taught to thread garlands — they learned through watching.' },
              { label: 'Sensory Research', desc: 'Fresh and dried Motia examined for odor, petal browning, and physical structure. Scent as a legitimate form of knowledge.' },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t border-motia-muted/30 pt-5"
              >
                <p className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.08em] text-motia-cream mb-2 md:mb-3">
                  {m.label}
                </p>
                <p className="font-body text-[12px] md:text-[14px] text-motia-muted leading-[1.7]">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 md:mt-20 border-l-2 border-motia-accent pl-5 max-w-[320px] md:max-w-[500px]"
          >
            <p className="font-display italic text-[16px] md:text-[20px] text-motia-cream leading-[1.6]">
              The most consistent finding: Motia functions within the family as an act of care provided to other women.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 6 — RESEARCHER IMAGE ══ */}
      <section className="relative">
        <div className="aspect-[4/3] md:aspect-[16/7] bg-motia-linen flex items-center justify-center">
          <p className="font-body text-[11px] text-motia-muted italic text-center px-6">[Researcher looking at garments on crookie, casually sitting on table]</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-5 md:px-10 pt-3 pb-1"
        >
          <p className="font-body text-[11px] text-motia-muted italic">
            Reflective engagement — the autoethnographic approach in practice.
          </p>
        </motion.div>
      </section>

      {/* ══ SECTION 7 — IDEATION ══ */}
      <section className="px-5 md:px-10 py-12 md:py-36 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-20"
        >
          <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-4 md:mb-6">
            Ideation
          </p>
          <h3 className="font-display italic text-[26px] md:text-[40px] font-light text-motia-text leading-[1.2] max-w-[280px] md:max-w-[550px]">
            From memory to material form.
          </h3>
        </motion.div>

        {/* Phase 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-16 items-start mb-12 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-[48px] md:text-[64px] font-light text-motia-sand leading-none">01</p>
            <h4 className="font-display italic text-[20px] md:text-[24px] text-motia-text mt-1 md:mt-2 mb-3">Conceptual Grounding</h4>
            <p className="font-body text-[13px] md:text-[15px] text-motia-text leading-[1.8]">
              Rather than using jasmine as a motif, its qualities became the framework: the softness, the resilience, the way petals layer, the way the flower blooms over time, the way scent lasts longer than form.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-motia-linen aspect-[4/3] flex items-center justify-center">
              <p className="font-body text-[11px] text-motia-muted italic text-center px-4">[Basic sketches of garments]</p>
            </div>
            <p className="mt-2 font-body text-[11px] text-motia-muted italic">
              Initial sketches — softness, resilience, and layered structure.
            </p>
          </motion.div>
        </div>

        {/* Phase 2 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-16 items-start mb-12 md:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="bg-motia-linen aspect-[3/4] flex items-center justify-center">
              <p className="font-body text-[11px] text-motia-muted italic text-center px-4">[Fashion illustrations of 4 garments]</p>
            </div>
            <p className="mt-2 font-body text-[11px] text-motia-muted italic">
              Blooming narrative — protective enclosure to emotional openness.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <p className="font-display text-[48px] md:text-[64px] font-light text-motia-sand leading-none">02</p>
            <h4 className="font-display italic text-[20px] md:text-[24px] text-motia-text mt-1 md:mt-2 mb-3">Silhouette Development</h4>
            <p className="font-body text-[13px] md:text-[15px] text-motia-text leading-[1.8]">
              Each silhouette was constructed to open and reveal itself like the flower. Structural elements represented <em>nano</em> — a form of strength not loud but noticeable. Every iteration sought balance between softness and structure.
            </p>
          </motion.div>
        </div>

        {/* Phase 3 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-[48px] md:text-[64px] font-light text-motia-sand leading-none">03</p>
            <h4 className="font-display italic text-[20px] md:text-[24px] text-motia-text mt-1 md:mt-2 mb-3">Narrative Sequencing</h4>
            <p className="font-body text-[13px] md:text-[15px] text-motia-text leading-[1.8] mb-3">
              The collection blooms: earlier garments enclose the wearer, later ones reveal. This mirrors the flower opening, and the emotional inheritance flowing between generations.
            </p>
            <p className="font-body text-[13px] md:text-[15px] text-motia-text leading-[1.8]">
              Repetition became a design principle — referencing the ritual of threading jasmine garlands, bud after bud after bud.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-motia-linen aspect-[4/3] flex items-center justify-center">
              <p className="font-body text-[11px] text-motia-muted italic text-center px-4">[Different motias from different fabrics on table]</p>
            </div>
            <p className="mt-2 font-body text-[11px] text-motia-muted italic">
              Motia forms from collection fabrics — translating the flower into wearable material.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pull Quote */}
      <PullQuote dark>
        The flower became a language for things inherited yet rarely spoken of — femininity, tenderness, purity, and resilience.
      </PullQuote>

      {/* ══ SECTION 8 — EXECUTION ══ */}
      <section className="px-5 md:px-10 py-12 md:py-36 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-16"
        >
          <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-4 md:mb-6">
            Execution
          </p>
          <h3 className="font-display italic text-[26px] md:text-[40px] font-light text-motia-text leading-[1.2] max-w-[280px] md:max-w-[600px] mb-4 md:mb-6">
            Making by hand. Layer by layer.
          </h3>
          <p className="font-body text-[13px] md:text-[15px] text-motia-muted leading-[1.7] max-w-[320px] md:max-w-[550px]">
            Lightweight, fluid materials reflect jasmine petals. Panels cut by hand, layered to mimic overlapping petals. Hand-stitched elements echo the act of threading flowers.
          </p>
        </motion.div>

        {/* Process grid — 2 cols mobile, 4 cols desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-motia-linen aspect-[3/4] flex items-center justify-center">
                <p className="font-body text-[10px] text-motia-muted italic text-center px-2">[Process {i + 1}]</p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-body text-[11px] text-motia-muted italic text-center">
            Draping and construction process — initial toile through successive iterations on the dress form.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mt-10 md:mt-20">
          {[
            { title: 'Materials', body: 'Fluid fabrics for delicacy, structured construction for strength. Never combined — their contrast is meant to be felt and visible.' },
            { title: 'Colour', body: 'Every colour derived from jasmine and the home spaces it inhabits. A deliberate refusal of exoticism.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-motia-divider pt-5"
            >
              <h4 className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.08em] text-motia-text mb-2 md:mb-3">{item.title}</h4>
              <p className="font-body text-[13px] md:text-[15px] text-motia-muted leading-[1.7]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 9 — MOTIA FORMS ══ */}
      <section className="bg-motia-linen py-12 md:py-36">
        <div className="px-5 md:px-10 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-7 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-motia-sand aspect-[4/3] md:aspect-[5/4] flex items-center justify-center">
                <p className="font-body text-[11px] text-motia-muted italic text-center px-4">[Different motias made from garment fabrics]</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display italic text-[24px] md:text-[34px] font-light text-motia-text leading-[1.3] mb-4 md:mb-6">
                The flower, translated.
              </h3>
              <p className="font-body text-[13px] md:text-[15px] text-motia-text leading-[1.8]">
                Motia forms constructed from the same fabrics used in the collection — maintaining a visual reference to the flower while avoiding exoticised, decorative representations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 10 — THE COLLECTION ══ */}
      <section className="py-12 md:py-36">
        <div className="px-5 md:px-10 max-w-[1280px] mx-auto mb-7 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-4 md:mb-6">
              The Collection
            </p>
            <h3 className="font-display italic text-[26px] md:text-[40px] font-light text-motia-text leading-[1.2] mb-3 md:mb-6 max-w-[280px] md:max-w-[550px]">
              Four garments. One blooming.
            </h3>
            <p className="font-body text-[13px] md:text-[15px] text-motia-muted leading-[1.7] max-w-[320px] md:max-w-[550px]">
              Arranged from enclosed and protective to open and expansive — embodying the blooming of Motia.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="px-5 md:px-10"
        >
          <div className="bg-motia-linen aspect-[4/3] md:aspect-[21/9] max-w-[1280px] mx-auto flex items-center justify-center">
            <p className="font-body text-[11px] text-motia-muted italic text-center px-4">[Final 4 garments on crookie — narrative sequence from enclosed to expansive]</p>
          </div>
          <p className="mt-3 font-body text-[11px] text-motia-muted italic text-center max-w-[320px] md:max-w-[600px] mx-auto">
            The completed collection, Looks 1–4. From protective enclosure (left) to emotional openness (right).
          </p>
        </motion.div>
      </section>

      {/* ══ SECTION 11 — DISPLAY ══ */}
      <section className="bg-motia-dark py-12 md:py-36">
        <div className="px-5 md:px-10 max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-7 md:mb-10">
              Display
            </p>
            <h3 className="font-display italic text-[22px] md:text-[36px] font-light text-motia-cream leading-[1.4] mb-7 md:mb-10">
              Domesticity over runway. Scent as medium. Presence over spectacle.
            </h3>
            <div className="space-y-4 font-body text-[13px] md:text-[15px] text-motia-muted leading-[1.8] text-left md:text-center">
              <p>
                Fresh and dried jasmine fragrance was incorporated into the display — the same olfactory elements of memory the research investigates became part of the viewer&rsquo;s experience.
              </p>
              <p>
                The photographs avoided dramatic lighting. The staging suggested a home, not a runway.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 12 — FINDINGS ══ */}
      <section className="px-5 md:px-10 py-12 md:py-36 max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-4 md:mb-6">
            Findings
          </p>
          <h3 className="font-display italic text-[26px] md:text-[40px] font-light text-motia-text leading-[1.2]">
            What this revealed.
          </h3>
        </motion.div>

        <div className="space-y-7 md:space-y-10">
          {[
            'Motia functions within my family as an act of care — provided to other women, threaded by hand, gifted in silence.',
            'The flower is associated with memories of care, scent triggering emotional recall more powerfully than sight or sound.',
            'While this relationship is personal, it is also shared across South Asian culture — a tradition far larger than one family.',
            'My relationship to Motia does reveal the meaning of the flower within my community — for my relationship to the flower is an example of that tradition itself.',
          ].map((finding, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex gap-4 md:gap-6 items-start"
            >
              <span className="font-display text-[24px] md:text-[32px] font-light text-motia-sand leading-none shrink-0 mt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-body text-[13px] md:text-[17px] text-motia-text leading-[1.8] border-l border-motia-divider pl-4 md:pl-6">
                {finding}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 13 — CLOSING QUOTE ══ */}
      <section className="bg-motia-linen py-14 md:py-36 px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9 }}
          className="max-w-[700px] mx-auto text-center"
        >
          <blockquote className="font-display italic text-[20px] md:text-[32px] lg:text-[38px] font-light text-motia-text leading-[1.45]">
            &ldquo;Intimate domestic histories, carried through scent, ritual, and form, have real cultural weight. The work asks how fleeting beauty holds memory — and what it means to inherit something never spoken aloud.&rdquo;
          </blockquote>
          <div className="mt-7 md:mt-10 h-px w-10 bg-motia-divider mx-auto" />
          <p className="mt-5 font-body text-[11px] md:text-[13px] text-motia-muted uppercase tracking-[0.1em]">
            Shiza Khan
          </p>
        </motion.div>
      </section>

      {/* ══ SECTION 14 — FUTURE ══ */}
      <section className="px-5 md:px-10 py-12 md:py-36 max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-4 md:mb-6">
            What Comes Next
          </p>
          <h3 className="font-display italic text-[24px] md:text-[34px] font-light text-motia-text leading-[1.3] mb-7 md:mb-10">
            This is not the end of the story.
          </h3>
          <div className="space-y-3 md:space-y-4">
            {[
              'Archive the oral history material — a detailed family record before it is lost between generations.',
              'Explore scent as a medium within future fashion displays.',
              'Investigate the relationship between indigenous South Asian botany and regional identity.',
              'Develop this thesis into an exhibition or publication for audiences beyond the degree program.',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-3 md:gap-4 items-start"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-motia-accent mt-2 shrink-0" />
                <p className="font-body text-[13px] md:text-[15px] text-motia-text leading-[1.7]">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ SECTION 15 — ACKNOWLEDGEMENTS ══ */}
      <section className="border-t border-motia-divider">
        <div className="px-5 md:px-10 py-10 md:py-20 max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-motia-muted mb-4 md:mb-6">
              Acknowledgements
            </p>
            <p className="font-body text-[12px] md:text-[14px] text-motia-muted leading-[1.8]">
              Guided by Ms Sonia Kashmiri, Ms Shehrbano Syed, Ms Saman Arif, and Ms Sana Khalid. Supported by the staff at Beaconhouse National University. Made possible by family and friends whose patience and belief carried this through.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
