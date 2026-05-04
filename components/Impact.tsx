import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { impactEntries } from '@/data/impact'

export function Impact() {
  return (
    <SectionWrapper id="impact">
      <div className="grid lg:grid-cols-[340px_1fr] gap-14 lg:gap-20 items-start">

        {/* Image column */}
        <div className="hidden lg:block">
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
            <Image
              src="/images/impact.png"
              alt="Amuche participating in a community workshop - engaged, grounded, present in the work"
              fill
              className="object-cover object-center"
              sizes="340px"
              quality={85}
            />
          </div>
          <p className="mt-5 font-sans text-xs text-warm-gray leading-relaxed italic">
            The work extends beyond individual sessions - into classrooms, staff rooms, and community spaces.
          </p>
        </div>

        {/* Outcomes */}
        <div>
          <SectionHeading
            eyebrow="Selected Outcomes"
            heading="What the work has produced"
            subheading="Grounded, honest markers from year one. No inflated metrics - only what actually happened."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {impactEntries.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-ivory border border-warm-border rounded-sm hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-serif text-3xl md:text-4xl text-forest font-semibold">
                    {item.metric}
                  </span>
                  {item.unit && (
                    <span className="font-sans text-xs text-warm-gray">{item.unit}</span>
                  )}
                </div>
                <p className="font-sans text-sm font-medium text-charcoal mb-2">{item.label}</p>
                <p className="font-sans text-xs text-warm-gray leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
