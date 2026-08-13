import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { typeVisuals, confederationLabels } from "@/lib/competition-visuals"
import type { Competition } from "@/lib/types"

export function PresetStepCard({
  competition,
  note,
  index,
  isLast,
}: {
  competition: Competition
  note: string
  index: number
  isLast: boolean
}) {
  const visual = typeVisuals[competition.type]
  const Icon = visual.icon

  return (
    <div className="flex flex-1 flex-col items-stretch gap-2 sm:flex-row sm:items-start">
      <Link
        href={`/competitions/${competition.slug}`}
        className="group flex flex-1 flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
      >
        <div className="flex items-center gap-3">
          <span
            className={`flex size-9 shrink-0 items-center justify-center border-2 border-border bg-secondary text-xs font-semibold text-muted-foreground group-hover:border-primary/50 ${visual.shapeClass}`}
          >
            {index + 1}
          </span>
          <div>
            <h3 className="font-serif text-base font-semibold leading-tight text-foreground">{competition.name}</h3>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {visual.label} {"\u2022"} {confederationLabels[competition.confederation]}
            </p>
          </div>
          <Icon className="ml-auto size-5 shrink-0 text-primary/60" strokeWidth={1.75} />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{note}</p>
      </Link>
      {!isLast && (
        <div className="flex items-center justify-center py-1 text-muted-foreground sm:w-8 sm:pt-8">
          <ArrowRight className="hidden size-5 sm:block" aria-hidden="true" />
          <span className="rotate-90 sm:hidden">
            <ArrowRight className="size-5" aria-hidden="true" />
          </span>
        </div>
      )}
    </div>
  )
}
