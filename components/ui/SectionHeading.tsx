interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  className?: string
  headingClassName?: string
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  className = '',
  headingClassName = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`mb-14 md:mb-18 ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className="font-sans text-xs font-semibold tracking-widest2 uppercase text-terracotta mb-4"
          aria-hidden="true"
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight max-w-2xl text-balance ${
          align === 'center' ? 'mx-auto' : ''
        } ${headingClassName}`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-5 font-sans text-base md:text-lg text-warm-gray leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subheading}
        </p>
      )}
      <div
        className={`mt-8 h-px bg-warm-border w-16 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  )
}
