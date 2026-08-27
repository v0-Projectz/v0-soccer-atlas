'use client'

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'

interface AtlasContextValue {
  containerRef: React.RefObject<HTMLDivElement | null>
  registerNode: (slug: string, el: HTMLElement | null) => void
  getNodeEl: (slug: string) => HTMLElement | null | undefined
  activeSlug: string | null
  setActiveSlug: (slug: string | null) => void
  pinnedSlug: string | null
  setPinnedSlug: (slug: string | null) => void
  version: number
  bumpVersion: () => void
}

const AtlasContext = createContext<AtlasContextValue | undefined>(undefined)

export function AtlasProvider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<Map<string, HTMLElement | null>>(new Map())
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [pinnedSlug, setPinnedSlug] = useState<string | null>(null)
  const [version, setVersion] = useState(0)

  const registerNode = useCallback((slug: string, el: HTMLElement | null) => {
    nodesRef.current.set(slug, el)
    setVersion((v) => v + 1)
  }, [])

  const getNodeEl = useCallback((slug: string) => nodesRef.current.get(slug), [])

  const bumpVersion = useCallback(() => setVersion((v) => v + 1), [])

  return (
    <AtlasContext.Provider
      value={{
        containerRef,
        registerNode,
        getNodeEl,
        activeSlug,
        setActiveSlug,
        pinnedSlug,
        setPinnedSlug,
        version,
        bumpVersion,
      }}
    >
      {children}
    </AtlasContext.Provider>
  )
}

export function useAtlas() {
  const ctx = useContext(AtlasContext)
  if (!ctx) throw new Error('useAtlas must be used within AtlasProvider')
  return ctx
}
