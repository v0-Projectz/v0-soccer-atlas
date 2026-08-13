'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { SearchCommand } from '@/components/search-command'

const quickStarts = [
  { label: 'I just watched the World Cup \u2014 what can I follow now?', href: '/pathways' },
  { label: 'How does the Champions League work?', href: '/competitions/champions-league' },
  { label: 'What happens when an EPL team is relegated?', href: '/pathways?preset=promotion-relegation' },
  { label: 'How can an MLS club reach international competition?', href: '/pathways?preset=mls-leagues-cup' },
  { label: 'Show me the path to the biggest stage.', href: '/competitions/world-cup' },
]

export function HomeHero() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 pt-14 pb-10 text-center sm:pt-20">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <Compass className="size-3.5 text-primary" />
        An interactive atlas for new fans
      </span>
      <h1 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
        Understand the World of Soccer
      </h1>
      <p className="text-pretty max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Explore leagues, cups, tournaments, qualification paths, and promotion/relegation systems \u2014 and see how
        they all connect.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <a href="#atlas">
            Explore the Atlas
            <ArrowRight data-icon="inline-end" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/pathways">How Does Soccer Work?</Link>
        </Button>
      </div>

      <button
        type="button"
        onClick={() => setSearchOpen(true)}
        className="mt-2 w-full max-w-lg text-left"
        aria-label="Open search"
      >
        <InputGroup className="pointer-events-none h-11 rounded-full">
          <InputGroupAddon>
            <Search className="size-4 text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput placeholder="What do you want to understand?" readOnly tabIndex={-1} />
        </InputGroup>
      </button>

      <div className="mt-4 flex w-full max-w-3xl flex-wrap justify-center gap-2">
        {quickStarts.map((q) => (
          <Link
            key={q.label}
            href={q.href}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
          >
            {q.label}
          </Link>
        ))}
      </div>

      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </section>
  )
}
