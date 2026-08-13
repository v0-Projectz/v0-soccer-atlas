import { ArrowUpRight } from 'lucide-react'
import type { WhatHappensNextItem } from '@/lib/types'

export function WhatHappensNext({ items }: { items: WhatHappensNextItem[] }) {
  return (
    <ol className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={item.label} className="flex gap-3 rounded-xl border border-border bg-card px-4 py-3">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {i + 1}. {item.label}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
