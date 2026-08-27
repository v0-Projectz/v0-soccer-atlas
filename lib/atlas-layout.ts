export interface AtlasGroup {
  id: string
  label: string
  slugs: string[]
}

export interface AtlasTier {
  id: string
  label: string
  description: string
  groups: AtlasGroup[]
}

export const atlasTiers: AtlasTier[] = [
  {
    id: 'global',
    label: 'Tier 1 \u2014 Global',
    description: 'The stage every path in soccer eventually leads toward.',
    groups: [{ id: 'global-group', label: 'FIFA', slugs: ['world-cup', 'world-cup-qualifiers'] }],
  },
  {
    id: 'continental',
    label: 'Tier 2 \u2014 Continental / Confederation',
    description: 'Where the strongest domestic clubs meet the rest of their region.',
    groups: [
      { id: 'uefa-group', label: 'UEFA', slugs: ['champions-league', 'europa-league', 'conference-league'] },
      { id: 'concacaf-group', label: 'CONCACAF', slugs: ['concacaf-champions-cup', 'leagues-cup'] },
    ],
  },
  {
    id: 'domestic',
    label: 'Tier 3 \u2014 Domestic',
    description: 'The week-in, week-out leagues and cups that feed everything above.',
    groups: [
      { id: 'domestic-group', label: 'Domestic Leagues & Cups', slugs: ['epl', 'mls', 'fa-cup'] },
    ],
  },
]

export const atlasEdges: { from: string; to: string }[] = [
  { from: 'world-cup-qualifiers', to: 'world-cup' },
  { from: 'champions-league', to: 'europa-league' },
  { from: 'europa-league', to: 'conference-league' },
  { from: 'concacaf-champions-cup', to: 'leagues-cup' },
  { from: 'epl', to: 'champions-league' },
  { from: 'fa-cup', to: 'europa-league' },
  { from: 'fa-cup', to: 'epl' },
  { from: 'mls', to: 'concacaf-champions-cup' },
  { from: 'mls', to: 'leagues-cup' },
]
