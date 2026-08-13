export interface PathwayPresetStep {
  slug: string
  note: string
}

export interface PathwayPreset {
  id: string
  title: string
  question: string
  summary: string
  steps: PathwayPresetStep[]
}

export const pathwayPresets: PathwayPreset[] = [
  {
    id: 'epl-to-champions-league',
    title: 'Premier League club → Champions League',
    question: 'How does a Premier League club end up playing in Europe?',
    summary:
      'A club never "enters" the Champions League on its own \u2014 it earns the right through where it finishes at home first.',
    steps: [
      { slug: 'championship', note: 'Most Premier League clubs arrive here first, via promotion from the Championship.' },
      { slug: 'epl', note: 'A full season of 38 matches decides final league position.' },
      { slug: 'champions-league', note: 'Finish inside the top places and the club qualifies for Europe\u2019s top competition.' },
    ],
  },
  {
    id: 'cup-upset-to-europe',
    title: 'Cup upset → European football',
    question: 'Can a club reach Europe without a top-flight finish?',
    summary: 'Yes \u2014 domestic cups offer a separate, faster door into continental competition.',
    steps: [
      { slug: 'fa-cup', note: 'A knockout run through the national cup, open to clubs across the football pyramid.' },
      { slug: 'europa-league', note: 'Winning (or a strong league finish) can grant a Europa League place directly.' },
      { slug: 'conference-league', note: 'Elimination in Europa League qualifying drops a club into this competition instead.' },
    ],
  },
  {
    id: 'mls-to-concacaf',
    title: 'MLS club → Concacaf Champions Cup',
    question: 'How does a North American club become a continental contender?',
    summary: 'Domestic form and cup performance both open the door to Concacaf\u2019s biggest club prize.',
    steps: [
      { slug: 'mls', note: 'A strong regular season or playoff run marks a club as one of the league\u2019s best.' },
      { slug: 'leagues-cup', note: 'A summer cross-league tournament against Liga MX can offer another route in.' },
      { slug: 'concacaf-champions-cup', note: 'Qualifying clubs face the best of Liga MX and the rest of the region.' },
    ],
  },
  {
    id: 'qualifiers-to-world-cup',
    title: 'National team → World Cup',
    question: 'What does it take for a country to reach the World Cup?',
    summary: 'Every confederation runs its own gauntlet \u2014 but they all lead to the same final tournament.',
    steps: [
      { slug: 'world-cup-qualifiers', note: 'Nations play home-and-away across one or more rounds within their own confederation.' },
      { slug: 'world-cup', note: 'Successful nations are drawn into groups, then face single-elimination knockouts.' },
    ],
  },
]

export function getPathwayPreset(id: string) {
  return pathwayPresets.find((p) => p.id === id)
}
