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
      },
      {
        id: 'premier-league-path',
        label: 'Potential: The Premier League',
        detail: 'A hypothetical future path to English football\u2019s top tier, and from there, European competition.',
        status: 'potential',
      },
    ],
  },
]

export function getClubJourney(slug: string) {
  return clubJourneys.find((c) => c.slug === slug)
}
