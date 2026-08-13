import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PathwayExplorer } from "@/components/pathways/pathway-explorer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Pathways — Soccer Atlas",
  description: "Follow real routes clubs and national teams take through the soccer pyramid, step by step.",
}

export default function PathwaysPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          image="/images/hero-pathways.png"
          imageAlt="A soccer stadium players tunnel opening onto a floodlit pitch"
          kicker="Pick a Question, Follow the Path"
          title="Pick a Question, Follow the Path"
          description="Soccer's structure makes more sense as a story than a chart. Choose one of these common questions to see the actual competitions involved, in order."
        />
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
          <PathwayExplorer />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
