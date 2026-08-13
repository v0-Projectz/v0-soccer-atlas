import Image from 'next/image'
import type { ReactNode } from 'react'

interface PageHeroProps {
  image: string
  imageAlt: string
  kicker: string
  title: ReactNode
  description?: string
  children?: ReactNode
}

export function PageHero({ image, imageAlt, kicker, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{kicker}</span>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-pretty max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  )
}
