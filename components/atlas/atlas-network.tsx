'use client'

import { AtlasProvider, useAtlas } from '@/components/atlas/atlas-context'
import { AtlasConnections } from '@/components/atlas/atlas-connections'
import { AtlasNode } from '@/components/atlas/atlas-node'
import { AtlasPreviewCard } from '@/components/atlas/atlas-preview-card'
import { atlasTiers } from '@/lib/atlas-layout'
import { getCompetition } from '@/lib/data/competitions'
import { cn } from '@/lib/utils'

function AtlasCanvas() {
  const { containerRef, setPinnedSlug, pinnedSlug } = useAtlas()

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
      <div
        ref={containerRef}
        className="relative flex-1 rounded-2xl border border-border bg-card/50 pitch-texture px-4 py-10 sm:px-8"
        onClick={(e) => {
          if (e.target === e.currentTarget) setPinnedSlug(null)
        }}
      >
        <AtlasConnections />
        <div className="relative z-10 flex flex-col gap-12">
          {atlasTiers.map((tier) => (
            <div key={tier.id} className="flex flex-col gap-4">
              <div className="flex flex-col gap-0.5 text-center sm:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{tier.label}</span>
                <span className="text-xs text-muted-foreground">{tier.description}</span>
              </div>
              <div
                className={cn(
                  'flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center',
                  tier.groups.length > 1 && 'sm:justify-around',
                )}
              >
                {tier.groups.map((group) => (
                  <div key={group.id} className="flex flex-col items-center gap-3">
                    {tier.groups.length > 1 && (
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        {group.label}
                      </span>
                    )}
                    <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
                      {group.slugs.map((slug) => {
                        const competition = getCompetition(slug)
                        if (!competition) return null
                        return (
                          <AtlasNode
                            key={slug}
                            competition={competition}
                            size={tier.id === 'global' ? 'lg' : 'md'}
                          />
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:sticky lg:top-24 lg:w-80 lg:shrink-0">
        <AtlasPreviewCard />
        {pinnedSlug && (
          <p className="mt-2 text-center text-xs text-muted-foreground lg:text-left">
            Tap the pitch background to clear selection.
          </p>
        )}
      </div>
    </div>
  )
}

export function AtlasNetwork() {
  return (
    <AtlasProvider>
      <AtlasCanvas />
    </AtlasProvider>
  )
}
