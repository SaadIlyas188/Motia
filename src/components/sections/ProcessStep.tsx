'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  images: string[];
  index: number;
}

export function ProcessStep({
  step,
  title,
  description,
  images,
  index,
}: ProcessStepProps) {
  const isEven = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start ${
          isEven ? 'md:direction-rtl' : ''
        }`}
      >
        {/* Text side */}
        <div className={`relative ${isEven ? 'md:order-2 md:direction-ltr' : ''}`}>
          {/* Watermark number */}
          <span className="absolute -top-8 -left-2 font-display text-[80px] md:text-[100px] font-light text-motia-divider/40 leading-none select-none pointer-events-none">
            {step}
          </span>

          <div className="relative pt-10">
            <h3 className="font-display text-[24px] text-motia-text mb-4 leading-tight">
              {title}
            </h3>
            <p className="font-body text-[15px] text-motia-text leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Image side */}
        <div className={`${isEven ? 'md:order-1 md:direction-ltr' : ''}`}>
          {images.length === 1 ? (
            <Image
              src={images[0]}
              alt={title}
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${title} ${i + 1}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}