import { competitions } from '@/lib/data/competitions'
import { glossaryTerms } from '@/lib/data/glossary'

export interface SearchResultItem {
  type: 'competition' | 'glossary'
  id: string
  title: string
  subtitle: string
  href: string
}

export function searchAtlas(query: string): SearchResultItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const competitionResults: SearchResultItem[] = competitions
    .filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q) ||
        c.confederation.toLowerCase().includes(q),
    )
    .map((c) => ({
      type: 'competition',
      id: c.slug,
      title: c.name,
      subtitle: `${c.breadcrumb.join(' \u2192 ')}`,
      href: `/competitions/${c.slug}`,
    }))

  const glossaryResults: SearchResultItem[] = glossaryTerms
    .filter((g) => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q))
    .map((g) => ({
      type: 'glossary',
      id: g.term,
      title: g.term,
      subtitle: g.definition,
      href: `/glossary#${encodeURIComponent(g.term.toLowerCase())}`,
    }))

  return [...competitionResults, ...glossaryResults]
}
