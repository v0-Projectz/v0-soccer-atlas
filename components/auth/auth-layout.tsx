import Image from 'next/image'
import Link from 'next/link'
import { Network } from 'lucide-react'
import type { ReactNode } from 'react'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-membership.png"
          alt="An empty stadium seating bowl overlooking a floodlit pitch at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center gap-8 px-4 py-16">
        <Link href="/" className="flex items-center gap-2">
          <Network className="size-5 text-gold" strokeWidth={1.75} />
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">Soccer Atlas</span>
        </Link>
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}
