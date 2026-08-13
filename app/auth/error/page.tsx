import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthLayout } from '@/components/auth/auth-layout'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams
  // `error` comes from the URL, so it is attacker-controlled. Render it only
  // when it looks like a Supabase error code, never as free text someone can
  // choose — otherwise this card will happily display their phishing copy.
  const code = params?.error
  const isErrorCode = typeof code === 'string' && /^[a-z0-9_]{1,64}$/.test(code)

  return (
    <AuthLayout>
      <Card className="border-border/60 bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Members</span>
          <CardTitle className="font-serif text-2xl font-semibold text-foreground">
            Sorry, something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isErrorCode ? (
            <p className="text-sm text-muted-foreground">Code error: {code}</p>
          ) : (
            <p className="text-sm text-muted-foreground">An unspecified error occurred.</p>
          )}
        </CardContent>
      </Card>
    </AuthLayout>
  )
}
