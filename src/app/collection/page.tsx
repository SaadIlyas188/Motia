'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageHero } from '@/components/ui/PageHero';
import { CollectionCard } from '@/components/sections/CollectionCard';
import collectionData from '@/data/collection.json';

export default function CollectionPage() {
  return (
    <>
      <PageHero
        title="the collection"
        subtitle="Each piece in this collection draws from the motia flower — its colour, its texture, its brief life, and the hands that have tended it."
      />

      {/* Full-bleed hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-20 md:mb-28"
      >
        <Image
          src="https://picsum.photos/seed/motia-collection-hero/1400/700"
          alt="The motia collection"
          width={1400}
          height={700}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Collection grid */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {collectionData.map((item) => (
            <CollectionCard
              key={item.id}
              name={item.name}
              description={item.description}
              materials={item.materials}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
