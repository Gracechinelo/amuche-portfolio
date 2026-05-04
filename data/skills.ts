/**
 * SKILLS DATA
 * ─────────────────────────────────────────────────────────────
 * Edit or add skill categories here.
 * The Skills section renders entirely from this file.
 * ─────────────────────────────────────────────────────────────
 */

export interface SkillCategory {
  id: string
  category: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'core-practice',
    category: 'Core Practice',
    description: 'The foundation of every counselling engagement',
    skills: [
      'Individual Student Counselling',
      'Group Counselling Sessions',
      'Crisis Support & Intervention',
      'Academic Stress Management',
      'Emotional Regulation Techniques',
      'Intake Assessment & Goal-Setting',
    ],
  },
  {
    id: 'school-community',
    category: 'School & Community',
    description: 'Working within the whole-school ecosystem',
    skills: [
      'Teacher & Staff Collaboration',
      'Referral Coordination',
      'Parent & Guardian Communication',
      'School Community Engagement',
      'Programme Facilitation',
      'Psychoeducation Workshops',
    ],
  },
  {
    id: 'professional',
    category: 'Professional Competencies',
    description: 'Upholding the standards of ethical, rigorous practice',
    skills: [
      'Confidential Case Documentation',
      'Ethical Practice & Boundaries',
      'Cultural Sensitivity',
      'Reflective Practice',
      'Continuous Professional Development',
    ],
  },
  {
    id: 'methods',
    category: 'Approaches & Methods',
    description: 'Evidence-informed frameworks guiding every session',
    skills: [
      'Person-Centred Therapy',
      'Cognitive Behavioural Approaches',
      'Solution-Focused Techniques',
      'Motivational Interviewing',
      'Psychoeducation',
    ],
  },
]
