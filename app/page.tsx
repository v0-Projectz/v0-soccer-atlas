import { Globe2, GitBranch, ArrowUpDown, BookOpen } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HomeHero } from '@/components/home-hero'
import { AtlasProvider } from '@/components/atlas/atlas-context'
import { AtlasNetwork } from '@/components/atlas/atlas-network'
import { ClubJourneysSection } from '@/components/club-journeys-section'

const systemFeatures = [
  {
    icon: Globe2,
    title: 'Three Tiers',
    description: 'Global, continental, and domestic competitions \u2014 mapped as one connected system.',
  },
  {
    icon: GitBranch,
    title: 'Qualification Paths',
    description: 'See exactly how a result in one competition opens the door to another.',
  },
  {
    icon: ArrowUpDown,
    title: 'Promotion & Relegation',
    description: 'Understand the stakes at both ends of the table, every single season.',
  },
  {
    icon: BookOpen,
    title: 'Plain-Language Glossary',
    description: 'Every term explained without assuming you already follow the sport.',
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HomeHero />
        <AtlasProvider>
          <section id="atlas" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <div className="mb-10 flex flex-col gap-2 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:mx-0">
                The Global System
              </span>
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">The Atlas</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mx-0">
                Three tiers, one connected system. Hover or tap any competition to see what it is and how it links
                to everything else.
              </p>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {systemFeatures.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-gold/40"
                >
                  <Icon className="size-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-serif text-base font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>

            <AtlasNetwork />
          </section>
          <ClubJourneysSection />
        </AtlasProvider>
      </main>
      <SiteFooter />
    </div>
  )
}
