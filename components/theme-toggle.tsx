'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to Atlas Night (dark mode)' : 'Switch to Editorial Day (light mode)'}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  )
}
