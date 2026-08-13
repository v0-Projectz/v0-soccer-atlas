"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { glossaryTerms } from "@/lib/data/glossary"
import { GlossaryTermCard } from "@/components/glossary/glossary-term-card"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "@/components/ui/empty"

export function GlossaryBrowser() {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return glossaryTerms
    return glossaryTerms.filter(
      (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="flex flex-col gap-8">
      <InputGroup className="max-w-md">
        <InputGroupInput
          placeholder="Search terms (e.g. aggregate, coefficient)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search glossary terms"
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((entry) => (
            <GlossaryTermCard key={entry.term} entry={entry} />
          ))}
        </div>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Search />
            </EmptyMedia>
            <EmptyTitle>No terms found</EmptyTitle>
            <EmptyDescription>Try a different search, like &quot;knockout&quot; or &quot;play-off&quot;.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  )
}
