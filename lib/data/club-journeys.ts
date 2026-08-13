import type { ClubJourney } from '@/lib/types'

export const clubJourneys: ClubJourney[] = [
  {
    slug: 'wrexham-afc',
    club: 'Wrexham AFC',
    crestLabel: 'WXM',
    tagline: 'From the National League to the EFL \u2014 and still climbing.',
    steps: [
      {
        id: 'national-league',
        label: 'National League',
        detail: 'Wrexham spent 15 seasons in England\u2019s fifth tier, the top division outside the EFL pyramid.',
        status: 'historical',
      },
      {
        id: 'promoted-league-two',
        label: 'Promoted to EFL League Two',
        detail: 'In 2023, Wrexham won the National League title and returned to the English Football League after a 15-year absence.',
        status: 'historical',
      },
      {
        id: 'promoted-league-one',
        label: 'Promoted to League One',
        detail: 'Back-to-back promotions took Wrexham into League One, the third tier of English football.',
        status: 'current',
      },
      {
        id: 'championship-path',
        label: 'Potential: The Championship',
        detail: 'Continued promotion would take Wrexham into the Championship \u2014 two steps from the Premier League.',
        status: 'potential',
        competitionSlugs: ['championship'],
      },
      {
        id: 'premier-league-path',
        label: 'Potential: The Premier League',
        detail: 'A hypothetical future path to English football\u2019s top tier, and from there, European competition.',
        status: 'potential',
        competitionSlugs: ['epl'],
      },
    ],
  },
  {
    slug: 'leicester-city',
    club: 'Leicester City',
    crestLabel: 'LEI',
    tagline: 'From the Championship to the Premier League summit \u2014 and the Champions League.',
    steps: [
      {
        id: 'promoted-epl',
        label: 'Promoted from the Championship',
        detail: 'Leicester won automatic promotion out of the Championship, England\u2019s second tier, back into the top flight.',
        status: 'historical',
        competitionSlugs: ['championship'],
      },
      {
        id: 'epl-title',
        label: 'Premier League champions',
        detail: 'One of the most celebrated title wins in English football, securing Leicester a place among Europe\u2019s elite.',
        status: 'historical',
        competitionSlugs: ['epl'],
      },
      {
        id: 'champions-league-debut',
        label: 'Qualified for the Champions League',
        detail: 'The title win earned Leicester their first ever Champions League campaign, reaching the quarter-finals.',
        status: 'historical',
        competitionSlugs: ['champions-league'],
      },
      {
        id: 'europe-return-potential',
        label: 'Potential: A return to Europe',
        detail: 'A strong Premier League finish \u2014 or a cup run \u2014 could put continental football back on the table.',
        status: 'potential',
        competitionSlugs: ['europa-league', 'conference-league'],
      },
    ],
  },
  {
    slug: 'inter-miami-cf',
    club: 'Inter Miami CF',
    crestLabel: 'MIA',
    tagline: 'An MLS expansion club that went straight to lifting a trophy.',
    steps: [
      {
        id: 'mls-expansion',
        label: 'Joined MLS as an expansion club',
        detail: 'Inter Miami entered Major League Soccer, taking their place in the U.S. and Canada\u2019s top domestic tier.',
        status: 'historical',
        competitionSlugs: ['mls'],
      },
      {
        id: 'leagues-cup-entry',
        label: 'Entered the Leagues Cup',
        detail: 'As an MLS club, Inter Miami were automatically entered into the Leagues Cup alongside every Liga MX side.',
        status: 'historical',
        competitionSlugs: ['leagues-cup'],
      },
      {
        id: 'leagues-cup-win',
        label: 'Won the Leagues Cup',
        detail: 'Inter Miami lifted the inaugural Leagues Cup, their first major trophy since joining MLS.',
        status: 'historical',
        competitionSlugs: ['leagues-cup'],
      },
      {
        id: 'concacaf-champions-cup',
        label: 'Qualified for the CONCACAF Champions Cup',
        detail: 'The Leagues Cup win earned Inter Miami a berth in the confederation\u2019s premier club competition.',
        status: 'current',
        competitionSlugs: ['concacaf-champions-cup'],
      },
    ],
  },
]

export function getClubJourney(slug: string) {
  return clubJourneys.find((c) => c.slug === slug)
}
