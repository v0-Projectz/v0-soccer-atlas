import { Badge } from '@/components/ui/badge'
import { ContextStrip } from '@/components/competition/context-strip'
import { typeVisuals, confederationLabels } from '@/lib/competition-visuals'
import type { Competition } from '@/lib/types'

export function CompetitionHeader({ competition }: { competition: Competition }) {
  const visual = typeVisuals[competition.type]
  const Icon = visual.icon

  return (
    <header className="flex flex-col gap-5 border-b border-border pb-8">
      <ContextStrip crumbs={competition.breadcrumb} />
      <div className="flex items-start gap-4">
        <span
          className={`hidden shrink-0 items-center justify-center border-2 border-primary/40 bg-secondary sm:flex size-14 ${visual.shapeClass}`}
        >
          <Icon className={`size-6 ${visual.shapeClass.includes('rotate-45') ? '-rotate-45' : ''} text-primary`} strokeWidth={1.75} />
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {competition.name.toUpperCase()}
          </h1>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {confederationLabels[competition.confederation]} {'\u2022'} {visual.label} {'\u2022'} Organised by{' '}
            {competition.organiser}
          </p>
        </div>
      </div>
      <p className="max-w-2xl text-lg leading-relaxed text-foreground">{competition.summary}</p>
      <div className="flex flex-wrap gap-2">
        {competition.statChips.map((chip) => (
          <Badge key={chip.label} variant="secondary" className="px-3 py-1 text-xs font-medium">
            {chip.label}
          </Badge>
        ))}
      </div>
    </header>
  )
}
