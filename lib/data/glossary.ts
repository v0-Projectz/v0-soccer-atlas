import type { GlossaryTerm } from '@/lib/types'

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Aggregate',
    definition:
      'The combined score across two matches (home and away) used to decide a winner in a two-legged tie.',
    whyItMatters:
      'Most European and continental knockout rounds are decided on aggregate, so a single bad result can be overturned in the second leg.',
    related: ['Knockout Stage', 'Away Goals'],
  },
  {
    term: 'Confederation',
    definition:
      'A regional governing body for soccer, such as UEFA for Europe or CONCACAF for North/Central America and the Caribbean.',
    whyItMatters:
      'Confederations organize qualifying tournaments and continental club competitions, so almost every path a team takes runs through one.',
    related: ['UEFA', 'CONCACAF', 'World Cup Qualifiers'],
  },
  {
    term: 'Group Stage',
    definition:
      'An early phase where teams are split into small groups and play each other before knockout rounds begin.',
    whyItMatters:
      'Group stages give weaker teams multiple matches to prove themselves, rather than being eliminated after one bad night.',
    related: ['Knockout Stage', 'League Phase'],
  },
  {
    term: 'Knockout Stage',
    definition: 'A single-elimination phase where losing means elimination.',
    whyItMatters:
      'This is where tournaments get tense \u2014 every match matters and there is no recovering from a loss.',
    related: ['Aggregate', 'Group Stage', 'Final'],
  },
  {
    term: 'Promotion / Relegation',
    definition:
      'The system where the best teams in a lower division move up, and the worst teams in a higher division move down, each season.',
    whyItMatters:
      'It keeps every match meaningful \u2014 even bottom-table games carry real consequences, unlike closed systems like MLS.',
    related: ['League Pyramid', 'Championship'],
  },
  {
    term: 'Qualification Play-off',
    definition: 'An extra round of matches used to decide the final spot(s) in a tournament.',
    whyItMatters:
      'Play-offs are often the most dramatic matches of a qualifying campaign \u2014 win, and you\u2019re in; lose, and the wait continues.',
    related: ['World Cup Qualifiers', 'Championship'],
  },
  {
    term: 'League Phase',
    definition:
      'A modern format (used by UEFA\u2019s club competitions since 2024) where all qualified clubs play in one giant table instead of small groups.',
    whyItMatters:
      'It replaced the traditional group stage to create more meaningful matchups and a clearer overall ranking before knockouts begin.',
    related: ['Group Stage', 'Champions League'],
  },
  {
    term: 'Coefficient',
    definition:
      'A points system UEFA uses to rank countries and clubs based on recent European performance.',
    whyItMatters:
      'It determines how many Champions League spots each country gets and who avoids the toughest qualifying rounds.',
    related: ['Champions League', 'Confederation'],
  },
]

export function getGlossaryTerm(term: string) {
  return glossaryTerms.find((g) => g.term.toLowerCase() === term.toLowerCase())
}
