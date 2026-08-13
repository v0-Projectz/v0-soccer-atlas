import { Globe, Network, Trophy, ShieldHalf, Medal, type LucideIcon } from 'lucide-react'
import type { CompetitionType, Confederation } from '@/lib/types'

export const typeVisuals: Record<
  CompetitionType,
  { icon: LucideIcon; label: string; shapeClass: string }
> = {
  international: {
    icon: Globe,
    label: 'International',
    shapeClass: 'rounded-full',
  },
  confederation: {
    icon: Network,
    label: 'Confederation',
    shapeClass: 'rounded-[28%]',
  },
  continental: {
    icon: Trophy,
    label: 'Continental',
    shapeClass: 'rounded-2xl rotate-45',
  },
  domestic: {
    icon: ShieldHalf,
    label: 'Domestic League',
    shapeClass: 'rounded-lg',
  },
  cup: {
    icon: Medal,
    label: 'Cup',
    shapeClass: 'rounded-t-2xl rounded-b-md',
  },
}

export const confederationLabels: Record<Confederation, string> = {
  FIFA: 'Global',
  UEFA: 'Europe',
  CONCACAF: 'North / Central America & Caribbean',
  CONMEBOL: 'South America',
  AFC: 'Asia',
  CAF: 'Africa',
  OFC: 'Oceania',
}
