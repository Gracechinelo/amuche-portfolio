'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
  delay?: number
  fullWidth?: boolean
}

export function SectionWrapper({
  id,
  className = '',
  children,
  delay = 0,
  fullWidth = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id={id}
      ref={ref}
      className={fullWidth ? className : `py-24 md:py-32 section-padding ${className}`}
    >
      <motion.div
        className={fullWidth ? undefined : 'container-max'}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
