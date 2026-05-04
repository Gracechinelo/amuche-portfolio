import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        'ivory-dark': '#F2EDE4',
        forest: {
          DEFAULT: '#1C3D2E',
          light: '#2D5A44',
          muted: '#3D6B52',
        },
        terracotta: {
          DEFAULT: '#C9865A',
          light: '#D9A07A',
          muted: '#E8C4A8',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#4A4744',
        },
        'warm-gray': '#7A736C',
        'warm-border': '#E0D9D0',
        'warm-muted': '#EDE8E0',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
