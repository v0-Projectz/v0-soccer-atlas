export type CompetitionTier = 'global' | 'continental' | 'domestic'

export type CompetitionType = 'international' | 'confederation' | 'continental' | 'domestic' | 'cup'

export type Confederation = 'FIFA' | 'UEFA' | 'CONCACAF' | 'CONMEBOL' | 'AFC' | 'CAF' | 'OFC'

export interface StatChip {
  label: string
}

export interface PathwayStage {
  id: string
  title: string
  description: string
  branchLabel?: string
}

export interface PathwayBranch {
  id: string
  label: string
  stages: PathwayStage[]
}

export interface TimelinePhase {
  label: string
  window: string
}

export interface WhatHappensNextItem {
  label: string
  description: string
}

export interface Competition {
  slug: string
  name: string
  shortName: string
  tier: CompetitionTier
  type: CompetitionType
  confederation: Confederation
  organiser: string
  region: string
  summary: string
  whatIsIt: string
  whoPlays: string
  statChips: StatChip[]
  timeline: TimelinePhase[]
  qualificationPathway: PathwayStage[]
  qualificationBranches?: PathwayBranch[]
  whatHappensNext: WhatHappensNextItem[]
  connectedTo: { slug: string; relationship: string }[]
  sources: string[]
  breadcrumb: string[]
  connections: { to: string; kind: 'feeds-up' | 'feeds-down' | 'related' }[]
}

export interface GlossaryTerm {
  term: string
  definition: string
  whyItMatters: string
  related: string[]
}

export interface ClubJourneyStep {
  id: string
  label: string
  detail: string
  status: 'historical' | 'current' | 'potential'
}

export interface ClubJourney {
  slug: string
  club: string
  crestLabel: string
  tagline: string
  steps: ClubJourneyStep[]
}
