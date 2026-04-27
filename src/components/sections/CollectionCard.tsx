'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface CollectionCardProps {
  name: string;
  description: string;
  materials: string;
  image: string;
}

export function CollectionCard({
  name,
  description,
  materials,
  image,
}: CollectionCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Image */}
        <div
          className="overflow-hidden cursor-pointer mb-5"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={image}
            alt={name}
            width={600}
            height={800}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-[400ms] ease-in-out hover:scale-[1.02]"
          />
        </div>

        {/* Name */}
        <h3 className="font-display italic text-[20px] text-motia-text mb-2">
          {name}
        </h3>

        {/* Description */}
        <p className="font-body text-[14px] text-motia-muted leading-relaxed mb-3">
          {description}
        </p>

        {/* Materials */}
        <p className="font-body text-[12px] uppercase tracking-[0.08em] text-motia-muted">
          {materials}
        </p>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(28, 23, 20, 0.95)' }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-motia-cream hover:text-motia-accent transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <div
            className="max-w-3xl max-h-[90vh] mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image}
              alt={name}
              width={1200}
              height={1600}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}