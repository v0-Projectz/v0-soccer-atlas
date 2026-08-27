import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function ContextStrip({ crumbs }: { crumbs: string[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
      <Link href="/" className="text-primary hover:underline">
        Home
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb} className="flex items-center gap-1.5">
          <ChevronRight className="size-3 text-border" />
          <span className={i === crumbs.length - 1 ? 'text-foreground' : ''}>{crumb}</span>
        </span>
      ))}
    </nav>
  )
}
