import type { Metadata } from "next"
import { competitions } from "@/lib/data/competitions"
import { confederationLabels } from "@/lib/competition-visuals"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CompetitionCard } from "@/components/competition/competition-card"

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
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">All Competitions</h1>
            <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Every competition in the Atlas, organized by tier — from the global stage down to the domestic
              leagues and cups that feed it.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-12">
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
