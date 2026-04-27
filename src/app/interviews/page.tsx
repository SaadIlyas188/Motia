'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageHero } from '@/components/ui/PageHero';
import { VideoEmbed } from '@/components/ui/VideoEmbed';
import interviewsData from '@/data/interviews.json';

export default function InterviewsPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <PageHero
        title="in their words"
        subtitle="These are conversations with the women whose hands carried the flower before mine."
      />

      <section className="px-6 md:px-10 max-w-[1280px] mx-auto pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {interviewsData.map((interview) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* Thumbnail with play button */}
              <div
                className="relative cursor-pointer group overflow-hidden mb-6"
                onClick={() => setActiveVideo(interview.videoUrl)}
              >
                <Image
                  src={interview.thumbnail}
                  alt={interview.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-motia-cream/60 flex items-center justify-center transition-all duration-400 group-hover:border-motia-cream group-hover:scale-105">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-motia-cream/80 ml-1" />
                  </div>
                </div>
              </div>

              {/* Name and description */}
              <h3 className="font-display italic text-[22px] text-motia-text mb-1">
                {interview.name}
              </h3>
              <p className="font-body text-[14px] text-motia-muted mb-5">
                {interview.role} — {interview.description}
              </p>

              {/* Pull quote */}
              <blockquote className="font-display italic text-[20px] text-motia-text leading-[1.5]">
                &ldquo;{interview.quote}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>
      </section>

      <VideoEmbed
        url={activeVideo || ''}
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
