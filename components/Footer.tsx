import Link from 'next/link'
import { siteConfig } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-warm-border py-10 section-padding" role="contentinfo">
      <div className="container-max flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-serif text-sm text-charcoal/50">
            {siteConfig.name}
          </p>
          <p className="font-sans text-xs text-warm-gray/60 mt-0.5">
            {siteConfig.title} &middot; {siteConfig.location}
          </p>
        </div>
        <p className="font-sans text-xs text-warm-gray/50">
          &copy; {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
