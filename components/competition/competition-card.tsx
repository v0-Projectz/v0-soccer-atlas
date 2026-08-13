import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { typeVisuals, confederationLabels } from '@/lib/competition-visuals'
import type { Competition } from '@/lib/types'

export function CompetitionCard({ competition }: { competition: Competition }) {
  const visual = typeVisuals[competition.type]
  const Icon = visual.icon

  return (
    <Link
      href={`/competitions/${competition.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
    >
      <div className="flex items-center gap-3">
        <span className={`flex size-10 shrink-0 items-center justify-center border-2 border-border bg-secondary group-hover:border-primary/50 ${visual.shapeClass}`}>
          <Icon className={`size-4 ${visual.shapeClass.includes('rotate-45') ? '-rotate-45' : ''} text-foreground/70`} strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="font-serif text-base font-semibold leading-tight text-foreground">{competition.name}</h3>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {visual.label} {'\u2022'} {confederationLabels[competition.confederation]}
          </p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{competition.summary}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
        Explore
        <ArrowRight className="size-3.5" />
      </span>
    </Link>
  )
}
