/**
 * IMPACT / OUTCOMES DATA
 * ─────────────────────────────────────────────────────────────
 * Edit or add outcomes here. Use honest, grounded language.
 * The Impact section renders entirely from this file.
 * ─────────────────────────────────────────────────────────────
 */

export interface ImpactEntry {
  id: number
  metric: string        // the number or key figure
  unit?: string         // optional unit label
  label: string         // short description
  detail: string        // one or two sentence explanation
}

export const impactEntries: ImpactEntry[] = [
  {
    id: 1,
    metric: '80+',
    label: 'Students Supported',
    detail:
      'Conducted regular counselling sessions with over 80 secondary school students in the first year, spanning academic, emotional, and social concerns.',
  },
  {
    id: 2,
    metric: '1',
    label: 'Structured Programme Launched',
    detail:
      'Designed and launched the school\'s first formal student mental wellness programme, creating a repeatable framework for future intake and support.',
  },
  {
    id: 3,
    metric: '3',
    label: 'Staff Wellbeing Sessions',
    detail:
      'Delivered three psychoeducation briefings for teaching staff on recognising emotional distress and responding to students in difficulty.',
  },
  {
    id: 4,
    metric: '6',
    label: 'Referrals Coordinated',
    detail:
      'Identified and coordinated six onward referrals to external mental health services for students requiring specialist support beyond school-based counselling.',
  },
  {
    id: 5,
    metric: '2',
    label: 'Group Counselling Cohorts',
    detail:
      'Facilitated two group counselling cohorts focused on peer relationships, self-esteem, and academic transition support.',
  },
  {
    id: 6,
    metric: '100%',
    label: 'Ethical Standards Maintained',
    detail:
      'Uphold full confidentiality, consent procedures, and professional ethical standards in every client interaction, with detailed case documentation throughout.',
  },
]
