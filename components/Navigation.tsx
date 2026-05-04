'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#approach', label: 'Approach' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#impact', label: 'Impact' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-warm-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding h-16 md:h-20 flex items-center justify-between">
        {/* Logo / name */}
        <Link
          href="#"
          className={`font-serif text-base md:text-lg font-semibold transition-colors duration-300 ${
            scrolled ? 'text-forest' : 'text-white'
          }`}
          aria-label={`${siteConfig.name} — home`}
        >
          {siteConfig.initials}
          <span className="ml-2 hidden sm:inline font-sans text-xs font-normal tracking-widest2 uppercase opacity-60">
            {siteConfig.title}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-xs tracking-wide transition-colors duration-300 hover:text-terracotta ${
                scrolled ? 'text-charcoal/60' : 'text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span
            className={`block w-5 h-0.5 mb-1.5 transition-all duration-300 ${
              scrolled ? 'bg-charcoal' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 mb-1.5 transition-all duration-300 ${
              scrolled ? 'bg-charcoal' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-charcoal' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`lg:hidden bg-ivory border-t border-warm-border transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-padding py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-charcoal/70 hover:text-forest transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
