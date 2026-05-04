/**
 * PHILOSOPHY / APPROACH DATA
 * ─────────────────────────────────────────────────────────────
 * Edit the principles array to update the Approach section.
 * ─────────────────────────────────────────────────────────────
 */

export interface Principle {
  id: number
  number: string         // displayed numeral, e.g. "01"
  title: string
  body: string
}

export const principles: Principle[] = [
  {
    id: 1,
    number: '01',
    title: 'Presence over prescription',
    body:
      'Every student arrives with a unique internal landscape. Good counselling begins not with solutions, but with genuine attention — the kind that makes a young person feel truly heard before anything else happens.',
  },
  {
    id: 2,
    number: '02',
    title: 'Cultural grounding',
    body:
      'Psychological support does not exist outside of context. Amuche\'s practice is rooted in an honest understanding of the social, familial, and educational pressures specific to Nigerian secondary school life.',
  },
  {
    id: 3,
    number: '03',
    title: 'Whole-school thinking',
    body:
      'Student wellbeing is never isolated. It is shaped by classrooms, corridors, teacher relationships, and school culture. Effective counselling means working with the whole environment, not just the individual session.',
  },
  {
    id: 4,
    number: '04',
    title: 'Ethical clarity',
    body:
      'Confidentiality, informed consent, and professional boundaries are not bureaucratic formalities. They are the structural foundation of a safe counselling relationship — and they are non-negotiable.',
  },
  {
    id: 5,
    number: '05',
    title: 'Growth over time',
    body:
      'This is a career built year by year, with intention. Amuche brings the discipline of a practitioner who is always learning — from clients, from colleagues, from the literature, and from honest self-reflection.',
  },
]
