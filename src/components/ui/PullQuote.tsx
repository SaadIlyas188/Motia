'use client';

import { motion } from 'framer-motion';

interface PullQuoteProps {
  children: React.ReactNode;
  dark?: boolean;
}

export function PullQuote({ children, dark = false }: PullQuoteProps) {
  return (
    <section
      className={`py-14 md:py-32 px-6 md:px-10 ${
        dark ? 'bg-motia-dark' : ''
      }`}
    >
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`font-display italic text-[22px] md:text-[36px] lg:text-[42px] font-light leading-[1.45] max-w-[700px] mx-auto text-center ${
          dark ? 'text-motia-cream' : 'text-motia-text'
        }`}
      >
        &ldquo;{children}&rdquo;
      </motion.blockquote>
    </section>
  );
}