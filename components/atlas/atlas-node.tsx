'use client'

import { useCallback } from 'react'
import { useAtlas } from '@/components/atlas/atlas-context'
import { typeVisuals } from '@/lib/competition-visuals'
import type { Competition } from '@/lib/types'
import { cn } from '@/lib/utils'

export function AtlasNode({ competition, size = 'md' }: { competition: Competition; size?: 'md' | 'lg' }) {
  const { registerNode, activeSlug, pinnedSlug, setActiveSlug, setPinnedSlug } = useAtlas()
  const visual = typeVisuals[competition.type]
  const Icon = visual.icon

  const focusSlug = pinnedSlug ?? activeSlug
  const isDimmed = focusSlug !== null && focusSlug !== competition.slug
  const isFocused = focusSlug === competition.slug

  const setRef = useCallback(
    (el: HTMLDivElement | null) => registerNode(competition.slug, el),
    [registerNode, competition.slug],
  )

  return (
    <div
      ref={setRef}
      role="button"
      tabIndex={0}
      aria-pressed={pinnedSlug === competition.slug}
      aria-label={`${competition.name} \u2014 ${visual.label}, ${competition.region}`}
      onMouseEnter={() => setActiveSlug(competition.slug)}
      onMouseLeave={() => setActiveSlug(null)}
      onFocus={() => setActiveSlug(competition.slug)}
      onBlur={() => setActiveSlug(null)}
      onClick={() => setPinnedSlug(pinnedSlug === competition.slug ? null : competition.slug)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setPinnedSlug(pinnedSlug === competition.slug ? null : competition.slug)
        }
      }}
      className={cn(
        'group relative z-10 flex flex-col items-center gap-2 rounded-xl px-2 py-2 outline-none transition-opacity duration-300 cursor-pointer',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isDimmed ? 'opacity-30' : 'opacity-100',
      )}
    >
      <span
        className={cn(
          'flex items-center justify-center border-2 bg-card shadow-sm transition-transform duration-200',
          size === 'lg' ? 'size-16' : 'size-12',
          visual.shapeClass,
          isFocused ? 'border-primary' : 'border-border group-hover:border-primary/60',
        )}
      >
        <Icon
          className={cn(
            size === 'lg' ? 'size-7' : 'size-5',
            visual.shapeClass.includes('rotate-45') && '-rotate-45',
            isFocused ? 'text-primary' : 'text-foreground/70',
          )}
          strokeWidth={1.75}
        />
      </span>
      <span className="max-w-[7.5rem] text-center text-xs font-medium leading-tight text-foreground sm:text-[13px]">
        {competition.shortName}
      </span>
    </div>
  )
}
