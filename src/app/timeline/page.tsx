'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/ui/PageHero';
import { TimelineItem } from '@/components/sections/TimelineItem';
import timelineData from '@/data/timeline.json';

const categories = ['All', 'Research', 'Making', 'Fieldwork', 'Collection', 'Writing'];

export default function TimelinePage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEntries = useMemo(() => {
    if (activeFilter === 'All') return timelineData;
    return timelineData.filter((entry) => entry.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <PageHero
        title="the timeline"
        subtitle="The full arc of the research and creative journey — from the first memory to the final submission."
      />

      <section className="px-6 md:px-10 max-w-[1280px] mx-auto pb-20 md:pb-28">
        {/* Filter row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap gap-6 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-body text-[13px] uppercase tracking-[0.08em] pb-1 transition-all duration-300 border-b-[1.5px] ${
                activeFilter === cat
                  ? 'text-motia-text border-motia-accent'
                  : 'text-motia-muted border-transparent hover:text-motia-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-motia-divider ml-1">
          {filteredEntries.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              date={entry.date}
              title={entry.title}
              description={entry.description}
              category={entry.category}
              image={entry.image}
              index={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}
