'use client'

import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PathwayStage } from '@/lib/types'

export function PathwayNode({
  stage,
  index,
  isOpen,
  onToggle,
}: {
  stage: PathwayStage
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex min-w-[13rem] flex-1 flex-col gap-2 sm:min-w-[10rem]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          'flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          isOpen ? 'border-primary bg-secondary' : 'border-border bg-card hover:border-primary/50',
        )}
      >
        <span
          className={cn(
            'flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold',
            isOpen ? 'border-primary text-primary' : 'border-border text-muted-foreground',
          )}
        >
          {index + 1}
        </span>
        <span className="flex-1 text-sm font-medium leading-snug text-foreground">{stage.title}</span>
        <ChevronDown className={cn('size-4 shrink-0 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
      </button>
      {isOpen && (
        <p className="rounded-lg bg-muted px-4 py-3 text-sm leading-relaxed text-muted-foreground">
          {stage.description}
        </p>
      )}
    </div>
  )
}
