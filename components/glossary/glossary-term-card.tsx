import { Lightbulb } from "lucide-react"
import type { GlossaryTerm } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

export function GlossaryTermCard({ entry }: { entry: GlossaryTerm }) {
  const anchorId = entry.term.toLowerCase().replace(/\s+/g, "-")

  return (
    <article
      id={anchorId}
      className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 target:border-primary target:ring-2 target:ring-primary/30"
    >
      <h3 className="font-serif text-lg font-semibold text-foreground">{entry.term}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{entry.definition}</p>
      <div className="flex gap-2.5 rounded-lg bg-secondary/60 p-3">
        <Lightbulb className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.75} />
        <p className="text-sm leading-relaxed text-foreground">{entry.whyItMatters}</p>
      </div>
      {entry.related.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Related:</span>
          {entry.related.map((term) => (
            <Badge key={term} variant="outline" className="text-xs">
              {term}
            </Badge>
          ))}
        </div>
      )}
    </article>
  )
}
