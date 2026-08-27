import Link from 'next/link'
import { Network } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Network className="size-4 text-primary" strokeWidth={1.75} />
            <span className="font-serif text-base font-semibold text-foreground">Soccer Atlas</span>
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A free, sponsor-supported guide to how the global soccer world fits together. Built for new and
            curious fans.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Explore</span>
            <Link href="/competitions" className="text-muted-foreground hover:text-foreground">
              Competitions
            </Link>
            <Link href="/pathways" className="text-muted-foreground hover:text-foreground">
              Pathways
            </Link>
            <Link href="/glossary" className="text-muted-foreground hover:text-foreground">
              Glossary
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">About</span>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About Soccer Atlas
            </Link>
            <Link href="/about#sources" className="text-muted-foreground hover:text-foreground">
              Sources
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        All facts are cited. See individual competition pages for sources. Not affiliated with FIFA, UEFA, CONCACAF, or any league.
      </div>
    </footer>
  )
}
