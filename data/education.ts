/**
 * EDUCATION & CREDENTIALS DATA
 * ─────────────────────────────────────────────────────────────
 * Add new qualifications, certifications, and training here.
 * The Education section renders entirely from this file.
 * ─────────────────────────────────────────────────────────────
 */

export interface EducationEntry {
  id: number
  type: 'degree' | 'certification' | 'training' | 'workshop'
  title: string
  institution: string
  year: string
  description?: string
  credential?: string  // credential ID or verification note
}

export const educationEntries: EducationEntry[] = [
  {
    id: 1,
    type: 'degree',
    title: 'B.Ed. Counselling Psychology',
    institution: 'Imo State University',
    year: '2024',
    description:
      'Four years of academic and practical training covering adolescent development, psychological assessment, school-based counselling, group facilitation, and professional ethics.',
  },

  // ──────────────────────────────────────────────────────────
  // ADD CERTIFICATIONS AND TRAINING BELOW — template:
  //
  // {
  //   id: 2,
  //   type: 'certification',
  //   title: 'Certificate in School Counselling',
  //   institution: 'Certifying Body',
  //   year: '2025',
  //   description: '...',
  //   credential: 'CERT-XXXX',
  // },
  // ──────────────────────────────────────────────────────────
]
