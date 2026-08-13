"use client"

import { useState } from "react"
import { pathwayPresets } from "@/lib/data/pathway-presets"
import { getCompetition } from "@/lib/data/competitions"
import { PresetStepCard } from "@/components/pathways/preset-step-card"
import { cn } from "@/lib/utils"

export function PathwayExplorer() {
  const [activeId, setActiveId] = useState(pathwayPresets[0].id)
  const active = pathwayPresets.find((p) => p.id === activeId) ?? pathwayPresets[0]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Pathway presets">
        {pathwayPresets.map((preset) => (
          <button
            key={preset.id}
            type="button"
            role="tab"
            aria-selected={preset.id === activeId}
            onClick={() => setActiveId(preset.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-left text-sm font-medium transition-colors",
              preset.id === activeId
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary/50",
            )}
          >
            {preset.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-balance font-serif text-2xl font-semibold text-foreground sm:text-3xl">
          {active.question}
        </h2>
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{active.summary}</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
        {active.steps.map((step, i) => {
          const competition = getCompetition(step.slug)
          if (!competition) return null
          return (
            <PresetStepCard
              key={step.slug}
              competition={competition}
              note={step.note}
              index={i}
              isLast={i === active.steps.length - 1}
            />
          )
        })}
      </div>
    </div>
  )
}
