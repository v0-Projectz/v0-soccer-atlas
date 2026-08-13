'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ArrowRight, Trophy, Landmark, Route } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { SearchCommand } from '@/components/search-command'

const quickStarts = [
  { label: 'I just watched the World Cup \u2014 what can I follow now?', href: '/pathways' },
  { label: 'How does the Champions League work?', href: '/competitions/champions-league' },
  { label: 'What happens when an EPL team is relegated?', href: '/pathways?preset=promotion-relegation' },
  { label: 'How can an MLS club reach international competition?', href: '/pathways?preset=mls-leagues-cup' },
]

const stats = [
  { icon: Trophy, value: '27+', label: 'Competitions Mapped' },
  { icon: Landmark, value: '3', label: 'Tiers of the Game' },
  { icon: Route, value: '3', label: 'Club Journeys Tracked' },
]

export function HomeHero() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-stadium-dusk.png"
          alt="A floodlit soccer pitch at dusk, empty and glowing under warm stadium lights"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-20 lg:pt-44">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Every Path to Glory
          </span>
          <h1 className="text-balance font-serif text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            Football&rsquo;s Global
            <br />
            <span className="text-gold">Pathways.</span>
          </h1>
          <p className="text-pretty max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {"Explore leagues, cups, tournaments, qualification paths, and promotion/relegation systems \u2014 and see how they all connect."}
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90"
              render={<a href="#atlas" />}
              nativeButton={false}
            >
              Explore the Atlas
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/25 bg-transparent text-foreground hover:bg-foreground/5"
              render={<Link href="/pathways" />}
              nativeButton={false}
            >
              How Does Soccer Work?
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="mt-1 w-full max-w-md text-left"
            aria-label="Open search"
          >
            <InputGroup className="pointer-events-none h-11 rounded-full border-foreground/20 bg-background/60 backdrop-blur-sm">
              <InputGroupAddon>
                <Search className="size-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput placeholder="What do you want to understand?" readOnly tabIndex={-1} />
            </InputGroup>
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {quickStarts.map((q) => (
            <Link
              key={q.label}
              href={q.href}
              className="rounded-full border border-foreground/15 bg-background/50 px-4 py-2 text-sm text-foreground backdrop-blur-sm transition-colors hover:border-gold/50 hover:bg-background/70"
            >
              {q.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-8 border-t border-foreground/10 pt-6 sm:gap-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="size-5 text-gold" aria-hidden="true" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold text-foreground">{value}</span>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </section>
  )
}
