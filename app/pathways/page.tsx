import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PathwayExplorer } from "@/components/pathways/pathway-explorer"

export const metadata: Metadata = {
  title: "Pathways — Soccer Atlas",
  description: "Follow real routes clubs and national teams take through the soccer pyramid, step by step.",
}

export default function PathwaysPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Pathways</span>
            <h1 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Pick a question, follow the path
            </h1>
            <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Soccer&apos;s structure makes more sense as a story than a chart. Choose one of these common
              questions to see the actual competitions involved, in order.
            </p>
          </div>

          <div className="mt-10">
            <PathwayExplorer />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
