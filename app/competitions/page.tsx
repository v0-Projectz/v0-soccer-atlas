import type { Metadata } from "next"
import { competitions } from "@/lib/data/competitions"
import { confederationLabels } from "@/lib/competition-visuals"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CompetitionCard } from "@/components/competition/competition-card"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Competitions — Soccer Atlas",
  description: "Browse every competition in the Soccer Atlas, from the FIFA World Cup down to domestic leagues and cups.",
}

const tierLabels: Record<string, string> = {
  global: "Tier 1 — Global",
  continental: "Tier 2 — Continental / Confederation",
  domestic: "Tier 3 — Domestic",
}

export default function CompetitionsPage() {
  const tiers = ["global", "continental", "domestic"] as const

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          image="/images/hero-competitions.png"
          imageAlt="A gleaming gold trophy under a spotlight on a dark, empty pitch"
          kicker="Every Trophy, Every Tier"
          title="All Competitions"
          description="Every competition in the Atlas, organized by tier — from the global stage down to the domestic leagues and cups that feed it."
        />
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <div className="flex flex-col gap-12">
            {tiers.map((tier) => {
              const items = competitions.filter((c) => c.tier === tier)
              if (items.length === 0) return null
              return (
                <section key={tier}>
                  <h2 className="font-serif text-xl font-semibold text-foreground">{tierLabels[tier]}</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((competition) => (
                      <CompetitionCard key={competition.slug} competition={competition} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>

          <p className="sr-only">
            Confederations covered: {Object.values(confederationLabels).join(", ")}.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
