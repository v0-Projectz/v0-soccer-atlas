'use client'

import { useEffect, useMemo, useRef } from 'react'
import { X } from 'lucide-react'
import { useAtlas } from '@/components/atlas/atlas-context'
import { getCompetition } from '@/lib/data/competitions'
import { clubJourneys } from '@/lib/data/club-journeys'
import { ClubJourney } from '@/components/club-journey'
import { Button } from '@/components/ui/button'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from '@/components/ui/empty'

export function ClubJourneysSection() {
  const { pinnedSlug, setPinnedSlug } = useAtlas()
  const scrollRefs = useRef<Map<string, HTMLDivElement | null>>(new Map())

  const selected = pinnedSlug ? getCompetition(pinnedSlug) : undefined

  const matchingSlugs = useMemo(() => {
    if (!selected) return null
    return new Set(
      clubJourneys
        .filter((journey) => journey.steps.some((step) => step.competitionSlugs?.includes(selected.slug)))
        .map((journey) => journey.slug),
    )
  }, [selected])

  useEffect(() => {
    if (!selected || !matchingSlugs || matchingSlugs.size === 0) return
    const firstMatchSlug = clubJourneys.find((j) => matchingSlugs.has(j.slug))?.slug
    if (!firstMatchSlug) return
    const el = scrollRefs.current.get(firstMatchSlug)
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [selected, matchingSlugs])

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6" aria-labelledby="club-journeys-heading">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1">
          <h2 id="club-journeys-heading" className="font-serif text-2xl font-semibold text-foreground">
            Club Journeys
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {selected
              ? `Showing how each club\u2019s path connects to ${selected.shortName}. Matching steps are highlighted below.`
              : "See how a real club moves through the system \u2014 solid lines mark confirmed history, the highlighted marker shows where they stand today, and dashed lines mark a possible future, never a certainty."}
          </p>
        </div>
        {selected && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPinnedSlug(null)}
            className="shrink-0 gap-1.5 self-start sm:self-auto"
          >
            <X className="size-3.5" aria-hidden="true" />
            Clear: {selected.shortName}
          </Button>
        )}
      </div>

      {selected && matchingSlugs?.size === 0 ? (
        <Empty className="border">
          <EmptyHeader>
            <EmptyTitle>No journeys pass through {selected.shortName} yet</EmptyTitle>
            <EmptyDescription>
              None of the tracked club journeys currently touch this competition. Try selecting another node in the
              Atlas above.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollSnapType: 'x proximity' }}>
          {clubJourneys.map((journey) => (
            <div
              key={journey.slug}
              ref={(el) => {
                scrollRefs.current.set(journey.slug, el)
              }}
              style={{ scrollSnapAlign: 'start' }}
            >
              <ClubJourney
                journey={journey}
                highlightSlug={selected?.slug ?? null}
                isDimmed={Boolean(matchingSlugs && !matchingSlugs.has(journey.slug))}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
