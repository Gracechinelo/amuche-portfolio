/**
 * EXPERIENCE DATA
 * ─────────────────────────────────────────────────────────────
 * To add a new year, append a new object to the `experiences`
 * array below. The Experience section renders entirely from
 * this file - no component code needs to change.
 * ─────────────────────────────────────────────────────────────
 */

export interface ExperienceEntry {
  id: number
  yearLabel: string      // e.g. "Year 1", "Year 2"
  year: string           // e.g. "2024"
  period: string         // e.g. "September 2024 – Present"
  role: string
  organization: string
  location: string
  type: string           // e.g. "Full-time", "Contract"
  responsibilities: string[]
  impact: string         // one concise, honest impact line
  tags: string[]
}

export const experiences: ExperienceEntry[] = [
  {
    id: 1,
    yearLabel: 'Year 1',
    year: '2025',
    period: 'July 2025 – Present',
    role: 'School Counselling Psychologist',
    organization: 'NGO-Managed Secondary School',
    location: 'Nigeria',
    type: 'Full-time',
    responsibilities: [
      'Provide individual and group counselling to secondary school students navigating academic pressure, emotional challenges, and social transitions',
      'Design and facilitate a structured student mental wellness programme spanning all year groups',
      'Collaborate with class teachers and school leadership to identify students in need of targeted support',
      'Coordinate referrals to external mental health services where specialist care is required',
      'Maintain confidential client records and uphold professional ethical standards at every stage of practice',
      'Deliver psychoeducation workshops for students and brief wellbeing sessions for teaching staff',
    ],
    impact:
      'Established the school\'s first structured counselling framework, creating consistent psychological support for over 80 students in year one.',
    tags: [
      'Student Counselling',
      'Programme Development',
      'Adolescent Support',
      'Staff Collaboration',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // ADD FUTURE YEARS BELOW - copy this template:
  //
  // {
  //   id: 2,
  //   yearLabel: 'Year 2',
  //   year: '2025',
  //   period: 'September 2025 – August 2026',
  //   role: 'School Counselling Psychologist',
  //   organization: 'NGO-Managed Secondary School',
  //   location: 'Nigeria',
  //   type: 'Full-time',
  //   responsibilities: [
  //     '...',
  //   ],
  //   impact: '...',
  //   tags: ['...'],
  // },
  // ──────────────────────────────────────────────────────────
]
