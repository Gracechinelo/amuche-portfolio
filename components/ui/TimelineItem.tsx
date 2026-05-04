'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { ExperienceEntry } from '@/data/experience'

interface TimelineItemProps {
  entry: ExperienceEntry
  index: number
  isLast: boolean
}

export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12"
    >
      {/* Timeline rail */}
      <div className="hidden md:flex flex-col items-end pt-1">
        <div className="flex flex-col items-end gap-1">
          <span className="font-sans text-xs font-semibold tracking-widest2 uppercase text-terracotta">
            {entry.yearLabel}
          </span>
          <span className="font-serif text-3xl text-forest font-semibold">{entry.year}</span>
          <span className="font-sans text-xs text-warm-gray mt-1 text-right leading-snug">
            {entry.period}
          </span>
        </div>
      </div>

      {/* Vertical line + dot */}
      <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px">
        <div className="relative h-full">
          {/* Dot */}
          <div className="absolute top-2 -left-[5px] w-[11px] h-[11px] rounded-full bg-terracotta border-2 border-ivory z-10" />
          {/* Line */}
          {!isLast && (
            <div className="absolute top-5 left-0 bottom-0 w-px bg-warm-border" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="pb-14 md:pb-16 pl-0 md:pl-12">
        {/* Mobile header */}
        <div className="flex items-baseline gap-3 mb-1 md:hidden">
          <span className="font-sans text-xs font-semibold tracking-widest2 uppercase text-terracotta">
            {entry.yearLabel}
          </span>
          <span className="font-sans text-xs text-warm-gray">{entry.period}</span>
        </div>

        <div className="mb-5">
          <h3 className="font-serif text-xl md:text-2xl text-charcoal font-medium mb-1">
            {entry.role}
          </h3>
          <p className="font-sans text-sm text-warm-gray">
            {entry.organization} &middot; {entry.location} &middot;{' '}
            <span className="text-forest-muted">{entry.type}</span>
          </p>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-2 mb-6" aria-label="Key responsibilities">
          {entry.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-sans text-sm text-charcoal/80 leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        {/* Impact statement */}
        <div className="border-l-2 border-terracotta pl-4 py-1">
          <p className="font-sans text-sm text-forest font-medium leading-relaxed italic">
            {entry.impact}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5" aria-label="Practice areas">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs px-3 py-1 rounded-sm bg-warm-muted text-charcoal/70 border border-warm-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
