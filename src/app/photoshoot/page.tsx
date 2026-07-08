'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

function LazyImage({ src, alt, fill = true, className = '', sizes, style, priority = false, onClick }: {
  src: string; alt: string; fill?: boolean; className?: string;
  sizes?: string; style?: React.CSSProperties; priority?: boolean;
  onClick?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      {!loaded && <div className="absolute inset-0 skeleton-shimmer" />}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        sizes={sizes}
        style={style}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        onLoad={() => setLoaded(true)}
        placeholder="empty"
      />
    </div>
  );
}

const dresses = [
  {
    id: 'dress-1',
    title: 'Look I',
    subtitle: 'Enclosed & Protective',
    description: 'A silhouette that wraps and shields — the bud before it opens. Layers fold inward, holding warmth and memory close to the body.',
    images: [
      'WhatsApp Image 2026-07-03 at 14.44.22.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.26.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.28 (1).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.28.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.29 (1).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.29 (2).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.29.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.30 (1).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.30 (2).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.30.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.31.jpeg',
    ],
  },
  {
    id: 'dress-2',
    title: 'Look II',
    subtitle: 'Layered Petal Forms',
    description: 'Petals begin to separate — fabric unfurls in soft, overlapping layers that suggest the first moment of opening.',
    images: [
      'WhatsApp Image 2026-07-03 at 14.44.17 (1).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.18 (1).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.18.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.19.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.20.jpeg',
    ],
  },
  {
    id: 'dress-3',
    title: 'Look III',
    subtitle: 'Opening Silhouette',
    description: 'The bloom mid-way — structure meets softness as the form extends outward, releasing its held tension.',
    images: [
      'WhatsApp Image 2026-07-03 at 14.44.05 (1).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.06.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.11 (1).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.11.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.16.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.17.jpeg',
    ],
  },
  {
    id: 'dress-4',
    title: 'Look IV',
    subtitle: 'Open & Expansive',
    description: 'Full bloom — the garment opens completely, free and expansive. A celebration of vulnerability and presence.',
    images: [
      'WhatsApp Image 2026-07-03 at 14.44.01 (1).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.01 (2).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.01.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.02 (1).jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.02.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.03.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.04.jpeg',
      'WhatsApp Image 2026-07-03 at 14.44.05.jpeg',
    ],
  },
];

function getImagePath(dressId: string, filename: string) {
  return `/images/photoshoot/${dressId}/${encodeURIComponent(filename)}`;
}

export default function PhotoshootPage() {
  const [lightbox, setLightbox] = useState<{ dressIdx: number; imgIdx: number } | null>(null);

  const allImages = dresses.flatMap((dress, dressIdx) =>
    dress.images.map((img, imgIdx) => ({ dressIdx, imgIdx, src: getImagePath(dress.id, img) }))
  );

  const currentFlatIndex = lightbox
    ? allImages.findIndex(i => i.dressIdx === lightbox.dressIdx && i.imgIdx === lightbox.imgIdx)
    : -1;

  const navigate = useCallback((direction: 1 | -1) => {
    if (currentFlatIndex === -1) return;
    const next = (currentFlatIndex + direction + allImages.length) % allImages.length;
    setLightbox({ dressIdx: allImages[next].dressIdx, imgIdx: allImages[next].imgIdx });
  }, [currentFlatIndex, allImages]);

  const openLightbox = (dressIdx: number, imgIdx: number) => {
    setLightbox({ dressIdx, imgIdx });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-8 md:pt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden"
        >
          <LazyImage
            src={getImagePath('dress-1', 'WhatsApp Image 2026-07-03 at 14.44.31.jpeg')}
            alt="Motia Collection"
            className="object-cover object-[center_55%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-motia-dark/20 via-transparent to-motia-dark/60" />
          <div className="absolute bottom-8 md:bottom-16 left-5 md:left-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display italic text-[42px] md:text-[80px] font-light text-white leading-[1]"
            >
              The Collection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-3 md:mt-4 font-body text-[12px] md:text-[14px] text-white/80 tracking-[0.08em] uppercase"
            >
              Four Looks — From Bud to Bloom
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Intro Text */}
      <section className="px-5 md:px-10 max-w-[1280px] mx-auto pt-16 md:pt-28 pb-10 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display italic text-[20px] md:text-[32px] font-light text-motia-text leading-[1.5] max-w-[800px]"
        >
          Four garments expressing the blooming of Motia — from enclosed, protective forms
          to open and expansive silhouettes. Photographed in a domestic setting.
          The scent of jasmine was present on set.
        </motion.p>
      </section>

      {/* Dress Sections */}
      {dresses.map((dress, dressIdx) => (
        <section key={dress.id} className="mb-16 md:mb-32">
          {/* Section Header */}
          <div className="px-5 md:px-10 max-w-[1280px] mx-auto mb-6 md:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="flex items-baseline gap-4 md:gap-6"
            >
              <span className="font-body text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-motia-muted">
                {String(dressIdx + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-display italic text-[28px] md:text-[48px] font-light text-motia-text leading-[1.1]">
                  {dress.title}
                </h2>
                <p className="mt-1 font-body text-[12px] md:text-[14px] tracking-[0.05em] text-motia-accent uppercase">
                  {dress.subtitle}
                </p>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 md:mt-5 font-body text-[13px] md:text-[15px] text-motia-muted max-w-[500px] leading-[1.7] ml-[calc(11px+1rem)] md:ml-[calc(12px+1.5rem)]"
            >
              {dress.description}
            </motion.p>
          </div>

          {/* Image Grid - varies by dress for visual interest */}
          {dressIdx === 0 && (
            <DressGridOne dress={dress} dressIdx={dressIdx} onImageClick={openLightbox} />
          )}
          {dressIdx === 1 && (
            <DressGridTwo dress={dress} dressIdx={dressIdx} onImageClick={openLightbox} />
          )}
          {dressIdx === 2 && (
            <DressGridThree dress={dress} dressIdx={dressIdx} onImageClick={openLightbox} />
          )}
          {dressIdx === 3 && (
            <DressGridFour dress={dress} dressIdx={dressIdx} onImageClick={openLightbox} />
          )}
        </section>
      ))}

      {/* Bottom Quote */}
      <section className="px-5 md:px-10 pb-20 md:pb-36 pt-6 md:pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-[700px] mx-auto text-center"
        >
          <div className="w-12 h-[1px] bg-motia-divider mx-auto mb-8" />
          <p className="font-display italic text-[18px] md:text-[26px] font-light text-motia-muted leading-[1.6]">
            &ldquo;The decision to use staging that suggested domesticity over runway was a means
            of working against the exoticisation of jasmine.&rdquo;
          </p>
          <div className="w-12 h-[1px] bg-motia-divider mx-auto mt-8" />
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-motia-dark/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={`${lightbox.dressIdx}-${lightbox.imgIdx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <LazyImage
                src={getImagePath(dresses[lightbox.dressIdx].id, dresses[lightbox.dressIdx].images[lightbox.imgIdx])}
                alt={`${dresses[lightbox.dressIdx].title} - Image ${lightbox.imgIdx + 1}`}
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/60 font-body text-[11px] md:text-[13px] tracking-[0.1em]">
              {dresses[lightbox.dressIdx].title} — {lightbox.imgIdx + 1} / {dresses[lightbox.dressIdx].images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Grid Layouts ─── */

interface GridProps {
  dress: typeof dresses[number];
  dressIdx: number;
  onImageClick: (dressIdx: number, imgIdx: number) => void;
}

function PhotoCard({ src, alt, dressIdx, imgIdx, onClick, className = '', aspect = 'aspect-[3/4]', objectPosition }: {
  src: string; alt: string; dressIdx: number; imgIdx: number;
  onClick: (d: number, i: number) => void; className?: string; aspect?: string; objectPosition?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative overflow-hidden cursor-pointer group ${aspect} ${className}`}
      onClick={() => onClick(dressIdx, imgIdx)}
    >
      {!loaded && <div className="absolute inset-0 skeleton-shimmer" />}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={objectPosition ? { objectPosition } : undefined}
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-motia-dark/0 group-hover:bg-motia-dark/10 transition-colors duration-500" />
    </motion.div>
  );
}

function DressGridOne({ dress, dressIdx, onImageClick }: GridProps) {
  return (
    <div className="px-5 md:px-10 max-w-[1400px] mx-auto">
      {/* Hero image - full width */}
      <PhotoCard
        src={getImagePath(dress.id, dress.images[1])}
        alt={`${dress.title} - 1`}
        dressIdx={dressIdx} imgIdx={1}
        onClick={onImageClick}
        aspect="aspect-[16/10] md:aspect-[21/9]"
        objectPosition="center 80%"
      />

      {/* 3 column row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-2 md:mt-4">
        {dress.images.slice(2, 5).map((img, i) => (
          <PhotoCard
            key={i}
            src={getImagePath(dress.id, img)}
            alt={`${dress.title} - ${i + 2}`}
            dressIdx={dressIdx} imgIdx={i + 2}
            onClick={onImageClick}
            aspect="aspect-[3/4]"
          />
        ))}
      </div>

      {/* 2 column asymmetric */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-2 md:mt-4">
        <PhotoCard
          src={getImagePath(dress.id, dress.images[5])}
          alt={`${dress.title} - 5`}
          dressIdx={dressIdx} imgIdx={5}
          onClick={onImageClick}
          aspect="aspect-[4/5]"
        />
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          {dress.images.slice(6, 10).map((img, i) => (
            <PhotoCard
              key={i}
              src={getImagePath(dress.id, img)}
              alt={`${dress.title} - ${i + 6}`}
              dressIdx={dressIdx} imgIdx={i + 6}
              onClick={onImageClick}
              aspect="aspect-square"
            />
          ))}
        </div>
      </div>

      {/* Last image full width */}
      {dress.images[10] && (
        <div className="mt-2 md:mt-4">
          <PhotoCard
            src={getImagePath(dress.id, dress.images[10])}
            alt={`${dress.title} - 10`}
            dressIdx={dressIdx} imgIdx={10}
            onClick={onImageClick}
            aspect="aspect-[16/9] md:aspect-[21/9]"
          />
        </div>
      )}
    </div>
  );
}

function DressGridTwo({ dress, dressIdx, onImageClick }: GridProps) {
  return (
    <div className="px-5 md:px-10 max-w-[1400px] mx-auto">
      {/* Two tall images side by side */}
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <PhotoCard
          src={getImagePath(dress.id, dress.images[0])}
          alt={`${dress.title} - 1`}
          dressIdx={dressIdx} imgIdx={0}
          onClick={onImageClick}
          aspect="aspect-[2/3]"
        />
        <PhotoCard
          src={getImagePath(dress.id, dress.images[1])}
          alt={`${dress.title} - 2`}
          dressIdx={dressIdx} imgIdx={1}
          onClick={onImageClick}
          aspect="aspect-[2/3]"
        />
      </div>

      {/* Full width cinematic */}
      <div className="mt-2 md:mt-4">
        <PhotoCard
          src={getImagePath(dress.id, dress.images[2])}
          alt={`${dress.title} - 3`}
          dressIdx={dressIdx} imgIdx={2}
          onClick={onImageClick}
          aspect="aspect-[16/10] md:aspect-[21/9]"
        />
      </div>

      {/* Two more */}
      <div className="grid grid-cols-2 gap-2 md:gap-4 mt-2 md:mt-4">
        <PhotoCard
          src={getImagePath(dress.id, dress.images[3])}
          alt={`${dress.title} - 4`}
          dressIdx={dressIdx} imgIdx={3}
          onClick={onImageClick}
          aspect="aspect-[3/4]"
        />
        <PhotoCard
          src={getImagePath(dress.id, dress.images[4])}
          alt={`${dress.title} - 5`}
          dressIdx={dressIdx} imgIdx={4}
          onClick={onImageClick}
          aspect="aspect-[3/4]"
        />
      </div>
    </div>
  );
}

function DressGridThree({ dress, dressIdx, onImageClick }: GridProps) {
  return (
    <div className="px-5 md:px-10 max-w-[1400px] mx-auto">
      {/* Offset grid - 1 large + 2 stacked */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4">
        <div className="md:col-span-3">
          <PhotoCard
            src={getImagePath(dress.id, dress.images[0])}
            alt={`${dress.title} - 1`}
            dressIdx={dressIdx} imgIdx={0}
            onClick={onImageClick}
            aspect="aspect-[4/5] md:aspect-[3/4]"
          />
        </div>
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
          <PhotoCard
            src={getImagePath(dress.id, dress.images[1])}
            alt={`${dress.title} - 2`}
            dressIdx={dressIdx} imgIdx={1}
            onClick={onImageClick}
            aspect="aspect-square md:aspect-[4/3]"
          />
          <PhotoCard
            src={getImagePath(dress.id, dress.images[2])}
            alt={`${dress.title} - 3`}
            dressIdx={dressIdx} imgIdx={2}
            onClick={onImageClick}
            aspect="aspect-square md:aspect-[4/3]"
          />
        </div>
      </div>

      {/* 3-column equal */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 mt-2 md:mt-4">
        {dress.images.slice(3, 6).map((img, i) => (
          <PhotoCard
            key={i}
            src={getImagePath(dress.id, img)}
            alt={`${dress.title} - ${i + 4}`}
            dressIdx={dressIdx} imgIdx={i + 3}
            onClick={onImageClick}
            aspect="aspect-[3/4]"
          />
        ))}
      </div>
    </div>
  );
}

function DressGridFour({ dress, dressIdx, onImageClick }: GridProps) {
  return (
    <div className="px-5 md:px-10 max-w-[1400px] mx-auto">
      {/* Full bleed hero */}
      <PhotoCard
        src={getImagePath(dress.id, dress.images[0])}
        alt={`${dress.title} - 1`}
        dressIdx={dressIdx} imgIdx={0}
        onClick={onImageClick}
        aspect="aspect-[16/10] md:aspect-[2/1]"
      />

      {/* 4-column grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-2 md:mt-4">
        {dress.images.slice(1, 5).map((img, i) => (
          <PhotoCard
            key={i}
            src={getImagePath(dress.id, img)}
            alt={`${dress.title} - ${i + 2}`}
            dressIdx={dressIdx} imgIdx={i + 1}
            onClick={onImageClick}
            aspect="aspect-[3/4]"
          />
        ))}
      </div>

      {/* 2 + 1 layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 mt-2 md:mt-4">
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
          <PhotoCard
            src={getImagePath(dress.id, dress.images[5])}
            alt={`${dress.title} - 6`}
            dressIdx={dressIdx} imgIdx={5}
            onClick={onImageClick}
            aspect="aspect-square"
          />
          <PhotoCard
            src={getImagePath(dress.id, dress.images[6])}
            alt={`${dress.title} - 7`}
            dressIdx={dressIdx} imgIdx={6}
            onClick={onImageClick}
            aspect="aspect-square"
          />
        </div>
        <div className="md:col-span-3">
          <PhotoCard
            src={getImagePath(dress.id, dress.images[7])}
            alt={`${dress.title} - 8`}
            dressIdx={dressIdx} imgIdx={7}
            onClick={onImageClick}
            aspect="aspect-[4/5] md:aspect-auto md:h-full"
          />
        </div>
      </div>
    </div>
  );
}
