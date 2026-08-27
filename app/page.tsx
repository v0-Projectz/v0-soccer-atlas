import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HomeHero } from '@/components/home-hero'
import { AtlasNetwork } from '@/components/atlas/atlas-network'
import { ClubJourneysSection } from '@/components/club-journeys-section'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HomeHero />
        <section id="atlas" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex flex-col gap-1 text-center sm:text-left">
            <h2 className="font-serif text-2xl font-semibold text-foreground">The Atlas</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mx-0">
              Three tiers, one connected system. Hover or tap any competition to see what it is and how it links
              to everything else.
            </p>
          </div>
          <AtlasNetwork />
        </section>
        <ClubJourneysSection />
      </main>
      <SiteFooter />
    </div>
  )
}
