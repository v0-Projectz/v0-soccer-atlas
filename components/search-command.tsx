'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { BookOpenText, Trophy } from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { searchAtlas } from '@/lib/search'

export function SearchCommand({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const results = searchAtlas(query)
  const competitionResults = results.filter((r) => r.type === 'competition')
  const glossaryResults = results.filter((r) => r.type === 'glossary')

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  function go(href: string) {
    onOpenChange(false)
    router.push(href)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} title="Search Soccer Atlas" description="Search competitions and glossary terms">
      <CommandInput
        placeholder="What do you want to understand?"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {query.trim().length > 0 && results.length === 0 && (
          <CommandEmpty>No results for &ldquo;{query}&rdquo;. Try a competition or a term like &ldquo;relegation&rdquo;.</CommandEmpty>
        )}
        {competitionResults.length > 0 && (
          <CommandGroup heading="Competitions">
            {competitionResults.map((r) => (
              <CommandItem key={r.id} value={r.title} onSelect={() => go(r.href)}>
                <Trophy data-icon="inline-start" />
                <div className="flex flex-col">
                  <span>{r.title}</span>
                  <span className="text-xs text-muted-foreground">{r.subtitle}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {glossaryResults.length > 0 && (
          <CommandGroup heading="Glossary">
            {glossaryResults.map((r) => (
              <CommandItem key={r.id} value={r.title} onSelect={() => go(r.href)}>
                <BookOpenText data-icon="inline-start" />
                <div className="flex flex-col">
                  <span>{r.title}</span>
                  <span className="line-clamp-1 text-xs text-muted-foreground">{r.subtitle}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  )
}
