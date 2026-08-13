import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthLayout } from '@/components/auth/auth-layout'

export default function Page() {
  return (
    <AuthLayout>
      <Card className="border-border/60 bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Members</span>
          <CardTitle className="font-serif text-2xl font-semibold text-foreground">Check your email</CardTitle>
          <CardDescription>Confirm your account to finish signing up</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {"You've successfully signed up. Please check your email to confirm your account before signing in."}
          </p>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}
