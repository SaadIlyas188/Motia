'use client';

import { PageHero } from '@/components/ui/PageHero';
import { ProcessStep } from '@/components/sections/ProcessStep';
import processData from '@/data/process.json';

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="the process"
        subtitle="From gathering jasmine to threading garlands — the making of a practice-led thesis."
      />

      <section className="px-6 md:px-10 max-w-[1280px] mx-auto pb-20 md:pb-28">
        <div className="space-y-0">
          {processData.map((step, index) => (
            <div key={step.id}>
              <ProcessStep
                step={step.step}
                title={step.title}
                description={step.description}
                images={step.images}
                index={index}
              />
              {index < processData.length - 1 && (
                <div className="h-px bg-motia-divider my-16 md:my-20" />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
