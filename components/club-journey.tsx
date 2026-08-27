import { CheckCircle2, MapPin, CircleDashed } from 'lucide-react'
import type { ClubJourney as ClubJourneyType } from '@/lib/types'
import { cn } from '@/lib/utils'

const statusVisuals = {
  historical: { icon: CheckCircle2, label: 'Confirmed', lineClass: 'border-solid' },
  current: { icon: MapPin, label: 'Current position', lineClass: 'border-solid' },
  potential: { icon: CircleDashed, label: 'Hypothetical', lineClass: 'border-dashed' },
} as const

export function ClubJourney({ journey }: { journey: ClubJourneyType }) {
  return (
    <article className="flex w-[19rem] shrink-0 flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-sm sm:w-[22rem]">
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-secondary text-sm font-semibold text-primary">
          {journey.crestLabel}
        </span>
        <div>
          <h3 className="font-serif text-base font-semibold leading-tight text-foreground">{journey.club}</h3>
          <p className="text-xs text-muted-foreground">{journey.tagline}</p>
        </div>
      </div>
      <ol className="flex flex-col gap-0">
        {journey.steps.map((step, i) => {
          const visual = statusVisuals[step.status]
          const Icon = visual.icon
          const isLast = i === journey.steps.length - 1
          return (
            <li key={step.id} className="relative flex gap-3 pb-5 last:pb-0">
              {!isLast && (
                <span
                  className={cn(
                    'absolute left-[0.6875rem] top-6 bottom-0 w-0 border-l-2',
                    visual.lineClass,
                    step.status === 'potential' ? 'border-muted-foreground/40' : 'border-primary/50',
                  )}
                  aria-hidden="true"
                />
              )}
              <Icon
                className={cn(
                  'relative z-10 mt-0.5 size-[1.375rem] shrink-0 rounded-full bg-background p-0.5',
                  step.status === 'current' ? 'text-gold' : step.status === 'potential' ? 'text-muted-foreground' : 'text-primary',
                )}
                strokeWidth={2}
              />
              <div className="flex flex-col gap-0.5">
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {visual.label}
                </span>
                <span className="text-sm font-medium leading-snug text-foreground">{step.label}</span>
                <p className="text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </article>
  )
}
