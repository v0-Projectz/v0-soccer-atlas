import { getCompetition } from '@/lib/data/competitions'
import { CompetitionCard } from '@/components/competition/competition-card'

export function RelatedCompetitions({ slugs }: { slugs: { slug: string; relationship: string }[] }) {
  const items = slugs.map((s) => ({ competition: getCompetition(s.slug), relationship: s.relationship })).filter((i) => i.competition)

  if (items.length === 0) return null

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(({ competition, relationship }) => (
        <div key={competition!.slug} className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-primary">{relationship}</span>
          <CompetitionCard competition={competition!} />
        </div>
      ))}
    </div>
  )
}
