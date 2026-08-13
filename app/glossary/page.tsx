import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GlossaryBrowser } from "@/components/glossary/glossary-browser"

export const metadata: Metadata = {
  title: "Glossary — Soccer Atlas",
  description: "Plain-language definitions for the terms that show up everywhere in soccer coverage.",
}

export default function GlossaryPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 md:py-14">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Glossary</span>
            <h1 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Terms worth knowing
            </h1>
            <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              The words commentators use without explaining. Each one includes why it actually matters, not
              just a dictionary definition.
            </p>
          </div>

          <div className="mt-10">
            <GlossaryBrowser />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
