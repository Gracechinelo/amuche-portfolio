import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories } from '@/data/skills'

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-ivory-dark">
      <div className="grid lg:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-start">

        {/* Skills grid */}
        <div>
          <SectionHeading
            eyebrow="Skills & Practice"
            heading="What she brings to every engagement"
            subheading="Competencies built through formal training, reflective practice, and direct work with students and school communities."
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.id} className="group">
                <h3 className="font-serif text-lg text-charcoal font-medium mb-1">
                  {category.category}
                </h3>
                <p className="font-sans text-xs text-warm-gray mb-4 leading-snug">
                  {category.description}
                </p>
                <ul className="space-y-2" aria-label={`Skills in ${category.category}`}>
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 font-sans text-sm text-charcoal/80">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0"
                        aria-hidden="true"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block sticky top-24 self-start">
          <div className="relative aspect-square rounded-sm overflow-hidden shadow-md">
            <Image
              src="/images/skills.png"
              alt="Overhead view of Amuche reviewing a skills and methods assessment — deliberate, analytical, self-aware"
              fill
              className="object-cover object-top"
              sizes="380px"
              quality={85}
            />
          </div>
          <p className="mt-5 font-sans text-xs text-warm-gray italic leading-relaxed">
            Consistent self-assessment is part of the practice — not just what she does, but how she stays sharp doing it.
          </p>
        </div>

      </div>
    </SectionWrapper>
  )
}
