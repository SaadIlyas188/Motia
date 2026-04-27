'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  category: string;
  image?: string | null;
  index: number;
}

export function TimelineItem({
  date,
  title,
  description,
  category,
  image,
  index,
}: TimelineItemProps) {
  const categoryColors: Record<string, string> = {
    Research: 'text-motia-accent',
    Making: 'text-motia-muted',
    Fieldwork: 'text-motia-accent',
    Collection: 'text-motia-muted',
    Writing: 'text-motia-accent',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: 'easeOut' }}
      className="relative pl-10 md:pl-14 pb-14"
    >
      {/* Dot on timeline */}
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-motia-accent border-2 border-motia-cream" />

      {/* Date */}
      <p className="font-body text-[12px] uppercase tracking-[0.08em] text-motia-muted mb-2">
        {date}
      </p>

      {/* Title */}
      <h3 className="font-display text-[22px] text-motia-text mb-3 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-[15px] text-motia-text leading-relaxed max-w-[560px] mb-3">
        {description}
      </p>

      {/* Category tag */}
      <span
        className={`font-body text-[11px] uppercase tracking-[0.1em] ${
          categoryColors[category] || 'text-motia-muted'
        }`}
      >
        {category}
      </span>

      {/* Optional image */}
      {image && (
        <div className="mt-5 max-w-[400px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </motion.div>
  );
}