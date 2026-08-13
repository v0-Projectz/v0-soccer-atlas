import { clubJourneys } from '@/lib/data/club-journeys'
import { ClubJourney } from '@/components/club-journey'

export function ClubJourneysSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6" aria-labelledby="club-journeys-heading">
      <div className="mb-6 flex flex-col gap-1">
        <h2 id="club-journeys-heading" className="font-serif text-2xl font-semibold text-foreground">
          Club Journeys
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {"See how a real club moves through the system \u2014 solid lines mark confirmed history, the highlighted marker shows where they stand today, and dashed lines mark a possible future, never a certainty."}
        </p>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollSnapType: 'x proximity' }}>
        {clubJourneys.map((journey) => (
          <div key={journey.slug} style={{ scrollSnapAlign: 'start' }}>
            <ClubJourney journey={journey} />
          </div>
        ))}
      </div>
    </section>
  )
}
