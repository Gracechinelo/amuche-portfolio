import Link from 'next/link'

interface CTAButtonProps {
  href: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'ghost-dark'
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function CTAButton({
  href,
  variant = 'primary',
  children,
  className = '',
  external = false,
}: CTAButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide rounded-sm px-7 py-3.5 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-forest text-ivory hover:bg-forest-light hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-terracotta text-ivory hover:bg-terracotta-light hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'border border-ivory/60 text-ivory hover:bg-ivory/10 hover:border-ivory hover:-translate-y-0.5',
    'ghost-dark':
      'border border-warm-border text-charcoal hover:border-forest hover:text-forest hover:-translate-y-0.5',
  }

  const props = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {variant === 'primary' || variant === 'secondary' ? (
        <svg
          className="w-3.5 h-3.5 opacity-70"
          fill="none"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </Link>
  )
}
