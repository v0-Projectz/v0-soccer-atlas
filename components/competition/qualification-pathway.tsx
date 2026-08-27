'use client'

import { useState } from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { PathwayNode } from '@/components/competition/pathway-node'
import type { PathwayStage } from '@/lib/types'

export function QualificationPathway({ stages }: { stages: PathwayStage[] }) {
  const [openId, setOpenId] = useState<string | null>(stages[0]?.id ?? null)

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-2" role="list" aria-label="Qualification pathway stages">
      {stages.map((stage, i) => (
        <div key={stage.id} className="flex flex-1 flex-col items-stretch gap-2 sm:flex-row sm:items-start">
          <div role="listitem" className="flex-1">
            <PathwayNode stage={stage} index={i} isOpen={openId === stage.id} onToggle={() => setOpenId(openId === stage.id ? null : stage.id)} />
          </div>
          {i < stages.length - 1 && (
            <div className="flex items-center justify-center py-1 text-muted-foreground sm:pt-3">
              <ArrowDown className="size-4 sm:hidden" aria-hidden="true" />
              <ArrowRight className="hidden size-4 sm:block" aria-hidden="true" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
