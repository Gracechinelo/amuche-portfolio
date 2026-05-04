import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <>
      {/* Cinematic full-width image break */}
      <div
        className="relative h-48 md:h-64 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/experience.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory/30" />
      </div>

      <SectionWrapper id="experience">
        <div className="mb-14 md:mb-18">
          <p className="font-sans text-xs font-semibold tracking-widest2 uppercase text-terracotta mb-4">
            Experience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-5 text-balance max-w-xl">
            A professional record, growing year by year
          </h2>
          <p className="font-sans text-base text-warm-gray leading-relaxed max-w-2xl">
            Each entry below represents a year of deliberate practice — real work, real students,
            real outcomes. This timeline grows as the career grows.
          </p>
          <div className="mt-8 h-px bg-warm-border w-16" />
        </div>

        {/* Timeline — rendered from data, never hardcoded */}
        <div>
          {experiences.map((entry, i) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        {/* Future entries prompt */}
        <div className="mt-4 md:ml-[248px] border border-dashed border-warm-border rounded-sm px-6 py-5">
          <p className="font-sans text-xs text-warm-gray/70 italic">
            More years to come — this timeline updates with each new chapter.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
