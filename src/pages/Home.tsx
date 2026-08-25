import { Link } from 'react-router-dom'
import { Flourish } from '../components/Flourish'
import { coupleNames, formatWeddingDate, site } from '../site'

const heroPhoto = `${import.meta.env.BASE_URL}DSC_0627_cropped.jpeg`

function daysUntil(iso: string) {
  const target = new Date(`${iso}T12:00:00`)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((target.getTime() - today.getTime()) / 86_400_000)
}

export function Home() {
  const remaining = daysUntil(site.weddingDateIso)

  return (
    <div>
      <section className="relative isolate min-h-[60svh] overflow-hidden md:min-h-[70svh] lg:min-h-[90svh] xl:min-h-[120svh]">
        <img
          src={heroPhoto}
          alt={`${site.partnerOne} and ${site.partnerTwo}`}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-paper to-transparent"
          aria-hidden="true"
        />
      </section>

      <section className="mx-auto flex max-w-5xl flex-col items-center px-5 pt-10 pb-16 text-center md:pt-14 md:pb-20">
        <h1 className="font-display text-6xl leading-none font-medium tracking-tight text-ink sm:text-7xl md:text-8xl">
          {site.partnerOne}
          <span className="mt-2 block font-display text-4xl font-normal italic text-sage sm:text-5xl">
            and
          </span>
          {site.partnerTwo}
        </h1>
        <Flourish className="mt-8" />
        <p className="mt-8 max-w-md text-lg text-muted italic">{site.tagline}</p>
        <p className="mt-6 font-display text-2xl text-ink">
          {formatWeddingDate()}
        </p>
        <p className="mt-1 text-muted">{site.venue.city}</p>
        <p className="mt-8 text-sm tracking-[0.18em] text-sage-dark uppercase">
          {remaining > 1
            ? `${remaining} days to go`
            : remaining === 1
              ? 'Tomorrow'
              : remaining === 0
                ? 'Today'
                : 'With love, from the other side of the day'}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/details"
            className="rounded-full bg-sage px-6 py-3 text-sm tracking-[0.14em] text-white uppercase transition hover:bg-sage-dark"
          >
            Details
          </Link>
          <Link
            to="/announcements"
            className="rounded-full border border-ink/20 px-6 py-3 text-sm tracking-[0.14em] text-ink uppercase transition hover:border-ink/40"
          >
            Announcements
          </Link>
        </div>
        <p className="sr-only">{coupleNames}</p>
      </section>
    </div>
  )
}
