import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Flourish } from '../components/Flourish'
import { announcements } from '../lib/announcements'
import { formatAnnouncementDate } from '../lib/markdown'

export function Announcements() {
  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-center text-xs tracking-[0.32em] text-muted uppercase">
        Updates
      </p>
      <h1 className="mt-3 text-center font-display text-5xl font-medium text-ink">
        Announcements
      </h1>
      <Flourish className="mt-6" />
      <p className="mx-auto mt-6 max-w-lg text-center text-muted">
        News for the weekend lives here. We will add notes as plans come
        together.
      </p>

      {announcements.length === 0 ? (
        <p className="mt-12 text-center text-muted">
          No announcements yet. Add a <code>.md</code> file to publish one.
        </p>
      ) : (
        <div className="mt-12 space-y-8">
          {announcements.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-ink/10 bg-white/50 p-6 shadow-sm md:p-8"
            >
              <p className="text-xs tracking-[0.18em] text-sage-dark uppercase">
                {formatAnnouncementDate(post.date)}
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">{post.title}</h2>
              <div className="prose prose-stone mt-4 max-w-none prose-headings:font-display prose-a:text-sage-dark prose-strong:text-ink">
                <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
              </div>
            </article>
          ))}
        </div>
      )}
    </article>
  )
}
