import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/data/site'

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image block */}
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/about.png"
              alt="Amuche's counselling workspace - intake forms, session notes, and tools of the practice"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-forest/5" />
          </div>
          {/* Decorative accent */}
          <div
            className="absolute -bottom-4 -left-4 w-24 h-24 border border-terracotta/30 rounded-sm -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute -top-4 -right-4 w-16 h-16 bg-warm-muted rounded-sm -z-10"
            aria-hidden="true"
          />
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <p className="font-sans text-xs font-semibold tracking-widest2 uppercase text-terracotta mb-5">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-8 text-balance">
            Counselling that meets students where they are
          </h2>

          <div className="space-y-5">
            {siteConfig.aboutText.map((paragraph, i) => (
              <p key={i} className="font-sans text-base text-charcoal/75 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Distinguishing markers */}
          <div className="mt-10 grid grid-cols-2 gap-5">
            {[
              { label: 'Adolescent focus', note: 'Secondary school context' },
              { label: 'NGO setting', note: 'Purpose-led organisation' },
              { label: 'Person-centred', note: 'Evidence-informed practice' },
              { label: 'Nigeria-based', note: 'Internationally minded' },
            ].map((item) => (
              <div key={item.label} className="border-t border-warm-border pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">{item.label}</p>
                <p className="font-sans text-xs text-warm-gray mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
