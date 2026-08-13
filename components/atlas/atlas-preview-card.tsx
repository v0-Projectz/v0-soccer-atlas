'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useAtlas } from '@/components/atlas/atlas-context'
import { getCompetition } from '@/lib/data/competitions'
import { typeVisuals, confederationLabels } from '@/lib/competition-visuals'
import { Button } from '@/components/ui/button'

export function AtlasPreviewCard() {
  const { activeSlug, pinnedSlug } = useAtlas()
  const slug = pinnedSlug ?? activeSlug
  const competition = slug ? getCompetition(slug) : undefined

  if (!competition) {
    return (
      <div className="flex h-full min-h-32 flex-col items-center justify-center rounded-xl border border-dashed border-border px-6 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          Hover or tap a node to see what it is, who plays, and how it connects.
        </p>
      </div>
    )
  }

  const visual = typeVisuals[competition.type]
  const Icon = visual.icon

  return (
    <div
      className="flex h-full min-h-32 flex-col gap-3 rounded-xl border border-border bg-card px-5 py-5 shadow-sm"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`flex size-9 shrink-0 items-center justify-center border-2 border-primary/40 bg-secondary ${visual.shapeClass}`}
          >
            <Icon className={`size-4 ${visual.shapeClass.includes('rotate-45') ? '-rotate-45' : ''} text-primary`} strokeWidth={1.75} />
          </span>
          <div>
            <h3 className="font-serif text-lg font-semibold leading-tight text-foreground">{competition.name}</h3>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {visual.label} {'\u2022'} {confederationLabels[competition.confederation]}
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{competition.summary}</p>
      <div className="mt-auto pt-1">
        <Button
          size="sm"
          variant="ghost"
          className="px-0 text-primary hover:text-primary"
          render={<Link href={`/competitions/${competition.slug}`} />}
          nativeButton={false}
        >
          Explore
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </div>
  )
}
