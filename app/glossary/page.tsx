import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GlossaryBrowser } from "@/components/glossary/glossary-browser"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Glossary — Soccer Atlas",
  description: "Plain-language definitions for the terms that show up everywhere in soccer coverage.",
}

export default function GlossaryPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          image="/images/hero-glossary.png"
          imageAlt="A soccer ball resting on the center circle line of a dark, dewy pitch"
          kicker="Terms Worth Knowing"
          title="Terms Worth Knowing"
          description="The words commentators use without explaining. Each one includes why it actually matters, not just a dictionary definition."
        />
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 md:py-14">
          <GlossaryBrowser />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
