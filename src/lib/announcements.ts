import { parseFrontmatter, slugFromPath } from './markdown'

const files = import.meta.glob('../../content/announcements/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export type Announcement = {
  slug: string
  title: string
  date: string
  content: string
}

export const announcements: Announcement[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      title: data.title ?? slugFromPath(path),
      date: data.date ?? '',
      content,
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))
