import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { coupleNames } from '../site'

const links = [
  { to: '/', label: 'Home' },
  { to: '/details', label: 'Details' },
  { to: '/announcements', label: 'Announcements' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <NavLink
          to="/"
          className="font-display text-xl tracking-wide text-ink"
          onClick={() => setOpen(false)}
        >
          {coupleNames}
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-[0.16em] uppercase ${
                  isActive ? 'text-sage-dark' : 'text-muted hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-3 border-t border-ink/10 px-5 py-4 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-[0.16em] uppercase ${
                  isActive ? 'text-sage-dark' : 'text-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
