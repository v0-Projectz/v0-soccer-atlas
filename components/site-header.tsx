'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, Search, Network, User } from 'lucide-react'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { SearchCommand } from '@/components/search-command'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Atlas' },
  { href: '/competitions', label: 'Competitions' },
  { href: '/pathways', label: 'Pathways' },
  { href: '/glossary', label: 'Glossary' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null))
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-2 border-b border-border/60 px-4 py-1 text-[11px] text-muted-foreground sm:px-6">
        <span className="sr-only">Site utility bar</span>
        <span aria-hidden="true" />
        <span>
          Presented by <span className="font-medium text-foreground">Pitchside Insurance</span>
        </span>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Network className="size-5 text-gold" strokeWidth={1.75} />
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">Soccer Atlas</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors',
                  isActive ? 'text-gold' : 'text-muted-foreground hover:text-foreground',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon-sm" aria-label="Search the Atlas" onClick={() => setSearchOpen(true)}>
            <Search />
          </Button>
          <ThemeToggle />
          {user ? (
            <div className="hidden items-center gap-1.5 sm:flex">
              <Button
                variant="outline"
                size="sm"
                className="border-gold/50 text-xs font-medium uppercase tracking-[0.1em] text-gold hover:bg-gold hover:text-gold-foreground"
                render={<Link href="/account" />}
                nativeButton={false}
              >
                <User />
                Account
              </Button>
              <Button variant="ghost" size="sm" className="text-xs font-medium uppercase tracking-[0.1em]" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="hidden items-center gap-1.5 sm:flex">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-medium uppercase tracking-[0.1em]"
                render={<Link href="/auth/login" />}
                nativeButton={false}
              >
                Sign In
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gold/50 text-xs font-medium uppercase tracking-[0.1em] text-gold hover:bg-gold hover:text-gold-foreground"
                render={<Link href="/auth/sign-up" />}
                nativeButton={false}
              >
                Sign Up
              </Button>
            </div>
          )}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-sm" className="md:hidden" aria-label="Open menu">
                  <Menu />
                </Button>
              }
            />
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile primary">
                {navItems.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className={cn(
                          'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                          pathname === item.href
                            ? 'bg-secondary text-foreground'
                            : 'text-muted-foreground hover:bg-secondary/70 hover:text-foreground',
                        )}
                      >
                        {item.label}
                      </Link>
                    }
                  />
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-1 border-t border-border/60 px-4 pt-4">
                {user ? (
                  <>
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href="/account"
                          className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/70"
                        >
                          Account
                        </Link>
                      }
                    />
                    <SheetClose
                      nativeButton={false}
                      render={
                        <button
                          type="button"
                          onClick={handleSignOut}
                          className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
                        >
                          Sign Out
                        </button>
                      }
                    />
                  </>
                ) : (
                  <>
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href="/auth/login"
                          className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
                        >
                          Sign In
                        </Link>
                      }
                    />
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href="/auth/sign-up"
                          className="rounded-lg px-3 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-secondary/70"
                        >
                          Sign Up
                        </Link>
                      }
                    />
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}
