'use client'

import { useEffect, useState } from 'react'
import { useAtlas } from '@/components/atlas/atlas-context'
import { atlasEdges } from '@/lib/atlas-layout'

interface LinePoints {
  from: string
  to: string
  x1: number
  y1: number
  x2: number
  y2: number
}

export function AtlasConnections() {
  const { containerRef, getNodeEl, activeSlug, pinnedSlug, version } = useAtlas()
  const [lines, setLines] = useState<LinePoints[]>([])
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
  }, [])

  useEffect(() => {
    function recompute() {
      const container = containerRef.current
      if (!container) return
      const containerRect = container.getBoundingClientRect()
      const next: LinePoints[] = []
      for (const edge of atlasEdges) {
        const fromEl = getNodeEl(edge.from)
        const toEl = getNodeEl(edge.to)
        if (!fromEl || !toEl) continue
        const fromRect = fromEl.getBoundingClientRect()
        const toRect = toEl.getBoundingClientRect()
        next.push({
          from: edge.from,
          to: edge.to,
          x1: fromRect.left + fromRect.width / 2 - containerRect.left,
          y1: fromRect.top + fromRect.height / 2 - containerRect.top,
          x2: toRect.left + toRect.width / 2 - containerRect.left,
          y2: toRect.top + toRect.height / 2 - containerRect.top,
        })
      }
      setLines(next)
    }

    recompute()
    const ro = new ResizeObserver(recompute)
    if (containerRef.current) ro.observe(containerRef.current)
    window.addEventListener('resize', recompute)
    window.addEventListener('scroll', recompute, true)
    const timeout = setTimeout(recompute, 200)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', recompute)
      window.removeEventListener('scroll', recompute, true)
      clearTimeout(timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version])

  const focusSlug = pinnedSlug ?? activeSlug

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {lines.map((line) => {
        const isConnected = focusSlug ? line.from === focusSlug || line.to === focusSlug : true
        const midX = (line.x1 + line.x2) / 2
        const midY = (line.y1 + line.y2) / 2 - 24
        return (
          <path
            key={`${line.from}-${line.to}`}
            d={`M ${line.x1} ${line.y1} Q ${midX} ${midY} ${line.x2} ${line.y2}`}
            fill="none"
            stroke={isConnected ? 'var(--primary)' : 'var(--border)'}
            strokeWidth={isConnected ? 1.75 : 1}
            strokeOpacity={isConnected ? 0.85 : 0.5}
            className={reduceMotion ? '' : 'transition-[stroke-opacity,stroke] duration-300'}
          />
        )
      })}
    </svg>
  )
}
