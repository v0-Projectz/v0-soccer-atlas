import Image from 'next/image'
import Link from 'next/link'
import { Network, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

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

      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Close and return to the site"
        className="absolute right-4 top-4 z-10 text-foreground hover:bg-secondary/70 sm:right-6 sm:top-6"
        render={<Link href="/" />}
        nativeButton={false}
      >
        <X />
      </Button>

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
