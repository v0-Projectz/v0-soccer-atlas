import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FactCardProps {
  icon: LucideIcon
  label: string
  value: string
}

export function FactCard({ icon: Icon, label, value }: FactCardProps) {
  return (
    <Card className="flex flex-row items-center gap-3 border-border bg-card p-4">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent">
        <Icon className="size-4 text-foreground" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </Card>
  )
}
