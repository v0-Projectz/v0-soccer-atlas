import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { SignOutButton } from "@/components/auth/sign-out-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CalendarDays } from "lucide-react"

export const metadata: Metadata = {
  title: "Account — Soccer Atlas",
  description: "Manage your Soccer Atlas member account.",
}

export default async function AccountPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const user = data.user
  const joined = new Date(user.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const initial = (user.email ?? "?").charAt(0).toUpperCase()

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          image="/images/hero-membership.png"
          imageAlt="An empty stadium seating bowl overlooking a floodlit pitch at dusk"
          kicker="Members"
          title="Your Account"
          description="Manage your Soccer Atlas membership and session."
        />
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:py-14">
          <Card className="border-border/60">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold/15 font-serif text-xl font-semibold text-gold">
                  {initial}
                </div>
                <div>
                  <CardTitle className="font-serif text-xl font-semibold text-foreground">
                    {user.email}
                  </CardTitle>
                  <CardDescription>Soccer Atlas member</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <dl className="flex flex-col gap-4 border-t border-border/60 pt-6">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="size-4 text-muted-foreground" />
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="ml-auto font-medium text-foreground">{user.email}</dd>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CalendarDays className="size-4 text-muted-foreground" />
                  <dt className="text-muted-foreground">Joined</dt>
                  <dd className="ml-auto font-medium text-foreground">{joined}</dd>
                </div>
              </dl>
              <div className="mt-8 flex justify-end border-t border-border/60 pt-6">
                <SignOutButton />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
