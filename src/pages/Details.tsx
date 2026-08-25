import { Flourish } from '../components/Flourish'
import { formatWeddingDate, site } from '../site'

export function Details() {
  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-center text-xs tracking-[0.32em] text-muted uppercase">
        The celebration
      </p>
      <h1 className="mt-3 text-center font-display text-5xl font-medium text-ink">
        Details
      </h1>
      <Flourish className="mt-6" />

      <section className="mt-12 space-y-2 text-center">
        <h2 className="font-display text-3xl text-ink">When & where</h2>
        <p className="text-lg text-muted">{formatWeddingDate()}</p>
        <p className="text-muted">{site.weddingTime}</p>
        <p className="pt-4 font-display text-2xl text-ink">{site.venue.name}</p>
        <p className="text-muted">{site.venue.address}</p>
        <p className="text-muted">{site.venue.city}</p>
      </section>

      <section className="mt-14">
        <h2 className="text-center font-display text-3xl text-ink">Schedule</h2>
        <ol className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          {site.schedule.map((item) => (
            <li
              key={item.title}
              className="flex items-baseline justify-between gap-6 py-4"
            >
              <span className="text-sm tracking-[0.12em] text-sage-dark uppercase">
                {item.time}
              </span>
              <span className="font-display text-xl text-ink">{item.title}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-ink">Dress code</h2>
          <p className="mt-3 leading-relaxed text-muted">{site.dressCode}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-ink">Lodging</h2>
          <p className="mt-3 leading-relaxed text-muted">{site.lodging}</p>
        </div>
      </section>
    </article>
  )
}
