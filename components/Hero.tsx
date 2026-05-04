'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CTAButton } from '@/components/ui/CTAButton'
import { siteConfig } from '@/data/site'

export function Hero() {
  const lines = siteConfig.heroHeadline.split('\n')

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Amuche Miracle Chigozie standing in a school hallway — confident, composed, purposeful"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
        {/* Layered overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-max w-full pb-20 md:pb-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs font-semibold tracking-widest2 uppercase text-terracotta mb-7"
          >
            Counselling Psychology &middot; Nigeria
          </motion.p>

          <h1 className="font-serif mb-7 text-white">
            {lines.map((line, i) => (
              <motion.span
                key={i}
                className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="font-sans text-base md:text-lg text-white/75 leading-relaxed mb-10 max-w-xl"
          >
            {siteConfig.heroSubheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <CTAButton href="#experience" variant="primary">
              {siteConfig.ctaPrimary}
            </CTAButton>
            <CTAButton href="#contact" variant="ghost">
              {siteConfig.ctaSecondary}
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] tracking-widest2 uppercase text-white/40 rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/20" />
      </motion.div>
    </section>
  )
}
