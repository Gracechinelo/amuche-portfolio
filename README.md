# Amuche Miracle Chigozie — Portfolio Website

A modern, elegant, data-driven portfolio for **Amuche Miracle Chigozie**, School Counselling Psychologist. Built to grow year by year — adding new experience requires only updating a data file.

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for scroll animations
- **Google Fonts**: Playfair Display + DM Sans

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Adding a New Year of Experience

Open `data/experience.ts` and append a new object to the `experiences` array:

```typescript
{
  id: 2,                                      // increment from last entry
  yearLabel: 'Year 2',
  year: '2025',
  period: 'September 2025 – August 2026',
  role: 'School Counselling Psychologist',
  organization: 'NGO-Managed Secondary School',
  location: 'Nigeria',
  type: 'Full-time',
  responsibilities: [
    'New responsibility for this year...',
  ],
  impact: 'One honest, grounded impact sentence for this year.',
  tags: ['Relevant Tag', 'Another Tag'],
},
```

The timeline renders automatically. No component code needs to change.

---

## Updating Other Content

| What to update | File |
|---|---|
| Experience (add yearly entries) | `data/experience.ts` |
| Skills and practice areas | `data/skills.ts` |
| Education and certifications | `data/education.ts` |
| Impact outcomes | `data/impact.ts` |
| Philosophy principles | `data/philosophy.ts` |
| Contact info, name, tagline | `data/site.ts` |

---

## Updating Images

Replace any image in `public/images/`:

| File | Used in |
|---|---|
| `hero.png` | Hero section |
| `about.png` | About section |
| `philosophy.png` | Approach/Philosophy section |
| `experience.png` | Experience section header |
| `skills.png` | Skills section |
| `impact.png` | Impact section |
| `credibility.png` | Education section |
| `contact.png` | Contact section |

---

## Deployment

Deploy to [Vercel](https://vercel.com) for zero-config deployment:

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repository directly in the Vercel dashboard.

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `ivory` | `#FAF8F5` | Background |
| `forest` | `#1C3D2E` | Primary brand colour |
| `terracotta` | `#C9865A` | Accent colour |
| `charcoal` | `#2C2C2C` | Body text |
| Playfair Display | serif | Headings |
| DM Sans | sans-serif | Body and UI |
