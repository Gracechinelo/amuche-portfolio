import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { educationEntries } from '@/data/education'

const typeLabels: Record<string, string> = {
  degree: 'Degree',
  certification: 'Certification',
  training: 'Training',
  workshop: 'Workshop',
}

const typeColors: Record<string, string> = {
  degree: 'bg-forest/10 text-forest border-forest/20',
  certification: 'bg-terracotta/10 text-terracotta border-terracotta/20',
  training: 'bg-warm-muted text-charcoal/70 border-warm-border',
  workshop: 'bg-warm-muted text-charcoal/70 border-warm-border',
}

export function Education() {
  return (
    <SectionWrapper id="credentials" className="bg-forest text-ivory" fullWidth>
      <div className="py-24 md:py-32 section-padding container-max">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">

          {/* Content */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest2 uppercase text-terracotta mb-5">
              Education & Credentials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight mb-5 text-balance max-w-xl">
              The foundation of the practice
            </h2>
            <p className="font-sans text-base text-ivory/65 leading-relaxed mb-12 max-w-xl">
              Qualifications, certifications, and ongoing professional development -
              updated here as each new credential is earned.
            </p>

            {/* Entries */}
            <div className="space-y-6">
              {educationEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="group flex gap-6 p-6 rounded-sm border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span
                      className={`inline-block font-sans text-[10px] font-semibold tracking-widest2 uppercase px-2.5 py-1 rounded-sm border ${
                        typeColors[entry.type] || typeColors.training
                      }`}
                    >
                      {typeLabels[entry.type]}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-xl text-ivory font-medium">{entry.title}</h3>
                      <span className="font-sans text-sm text-ivory/50 flex-shrink-0">{entry.year}</span>
                    </div>
                    <p className="font-sans text-sm text-ivory/60 mb-3">{entry.institution}</p>
                    {entry.description && (
                      <p className="font-sans text-sm text-ivory/50 leading-relaxed">{entry.description}</p>
                    )}
                    {entry.credential && (
                      <p className="mt-2 font-sans text-xs text-terracotta/80">
                        Credential: {entry.credential}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Placeholder for future credentials */}
              <div className="flex gap-6 p-6 rounded-sm border border-dashed border-white/10">
                <p className="font-sans text-xs text-ivory/30 italic">
                  Additional certifications and professional development to be added here each year.
                </p>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="hidden lg:block sticky top-24 self-start">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/credibility.png"
                alt="Amuche Miracle Chigozie — professional portrait in mustard blazer, composed and confident"
                fill
                className="object-cover object-top"
                sizes="360px"
                quality={85}
              />
              <div className="absolute inset-0 bg-forest/15 mix-blend-multiply" />
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
