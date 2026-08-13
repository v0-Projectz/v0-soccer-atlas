import { notFound } from "next/navigation"
import Link from "next/link"
import { CalendarClock, Users, Building2 } from "lucide-react"
import { competitions } from "@/lib/data/competitions"
import { confederationLabels, typeVisuals } from "@/lib/competition-visuals"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CompetitionHeader } from "@/components/competition/competition-header"
import { FactCard } from "@/components/competition/fact-card"
import { QualificationPathway } from "@/components/competition/qualification-pathway"
import { WhatHappensNext } from "@/components/competition/what-happens-next"
import { RelatedCompetitions } from "@/components/competition/related-competitions"
import { SourceCitation } from "@/components/competition/source-citation"
import { Separator } from "@/components/ui/separator"

export function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }))
}

export default async function CompetitionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const competition = competitions.find((c) => c.slug === slug)

  if (!competition) {
    notFound()
  }

  const visual = typeVisuals[competition.type]

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-10 md:py-14">
          <CompetitionHeader competition={competition} />

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <FactCard icon={Building2} label="Organiser" value={competition.organiser} />
            <FactCard icon={Users} label="Region" value={confederationLabels[competition.confederation]} />
            <FactCard icon={CalendarClock} label="Format" value={visual.label} />
          </div>

          <section className="mt-12">
            <h2 className="font-serif text-2xl font-semibold text-foreground">What is it?</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{competition.whatIsIt}</p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Who plays?</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{competition.whoPlays}</p>
          </section>

          <Separator className="my-12" />

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">How you get there</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              The path a team follows to reach {competition.shortName}, from qualification to the final.
            </p>
            <div className="mt-8">
              <QualificationPathway stages={competition.qualificationPathway} />
            </div>
          </section>

          <Separator className="my-12" />

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">What happens next</h2>
            <div className="mt-6">
              <WhatHappensNext items={competition.whatHappensNext} />
            </div>
          </section>

          <Separator className="my-12" />

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Related competitions</h2>
            <div className="mt-6">
              <RelatedCompetitions slugs={competition.connectedTo} />
            </div>
          </section>

          <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <SourceCitation sources={competition.sources} />
            <Link href="/#atlas" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
              View in the Atlas map →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
