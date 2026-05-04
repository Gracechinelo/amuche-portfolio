import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { principles } from '@/data/philosophy'

export function Philosophy() {
  return (
    <SectionWrapper id="approach" className="bg-forest text-ivory" fullWidth>
      <div className="py-24 md:py-32 section-padding container-max">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

          {/* Text column */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest2 uppercase text-terracotta mb-5">
              Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight mb-6 text-balance">
              How Amuche works
            </h2>
            <p className="font-sans text-base text-ivory/65 leading-relaxed mb-14 max-w-lg">
              Five principles that shape every counselling relationship — not as abstract ideals,
              but as daily practice.
            </p>

            {/* Principles list */}
            <div className="space-y-0">
              {principles.map((p, i) => (
                <div
                  key={p.id}
                  className={`py-8 flex gap-7 items-start ${
                    i < principles.length - 1
                      ? 'border-b border-white/10'
                      : ''
                  }`}
                >
                  <span
                    className="font-serif text-4xl font-bold text-terracotta/40 leading-none flex-shrink-0 w-12"
                    aria-hidden="true"
                  >
                    {p.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl text-ivory font-medium mb-2">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm text-ivory/60 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column — sticky on desktop */}
          <div className="hidden lg:block sticky top-24 self-start">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/philosophy.png"
                alt="Amuche at a desk, focused and composed — the quiet discipline behind the practice"
                fill
                className="object-cover object-left"
                sizes="420px"
                quality={85}
              />
              {/* Forest overlay to blend with dark bg */}
              <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
            </div>
            {/* Quote */}
            <blockquote className="mt-8 border-l-2 border-terracotta pl-5">
              <p className="font-serif text-base italic text-ivory/70 leading-relaxed">
                &ldquo;Good counselling begins not with solutions, but with genuine attention.&rdquo;
              </p>
            </blockquote>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
