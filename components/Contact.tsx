import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from '@/components/ui/CTAButton'
import { siteConfig } from '@/data/site'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Portrait */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg max-w-md">
              <Image
                src="/images/contact.png"
                alt="Amuche Miracle Chigozie — professional studio portrait, direct and composed"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
            {/* Accent lines */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 border border-terracotta/25 rounded-sm -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest2 uppercase text-terracotta mb-5">
              Connect
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-7 text-balance">
              Ready for what comes next
            </h2>

            <p className="font-sans text-base text-charcoal/75 leading-relaxed mb-5 max-w-md">
              {siteConfig.closingStatement}
            </p>
            <p className="font-sans text-base text-charcoal/75 leading-relaxed mb-10 max-w-md">
              Amuche is building her career with intention. If you are looking for a thoughtful,
              professionally grounded counselling psychologist — with a clear focus on adolescent
              wellbeing and school community practice — she would welcome a conversation.
            </p>

            {/* Contact links */}
            <div className="space-y-4 mb-10">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 group"
                aria-label={`Email Amuche at ${siteConfig.email}`}
              >
                <div className="w-10 h-10 rounded-sm border border-warm-border flex items-center justify-center text-warm-gray group-hover:border-forest group-hover:text-forest transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-warm-gray mb-0.5">Email</p>
                  <p className="font-sans text-sm text-charcoal group-hover:text-forest transition-colors duration-300">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Connect with Amuche on LinkedIn"
              >
                <div className="w-10 h-10 rounded-sm border border-warm-border flex items-center justify-center text-warm-gray group-hover:border-forest group-hover:text-forest transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-warm-gray mb-0.5">LinkedIn</p>
                  <p className="font-sans text-sm text-charcoal group-hover:text-forest transition-colors duration-300">
                    Amuche Miracle Chigozie
                  </p>
                </div>
              </a>
            </div>

            <CTAButton href={`mailto:${siteConfig.email}`} variant="primary">
              {siteConfig.ctaContact}
            </CTAButton>
          </div>

        </div>
      </div>
    </section>
  )
}
