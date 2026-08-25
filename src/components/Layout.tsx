import { Outlet } from 'react-router-dom'
import { coupleNames } from '../site'
import { Header } from './Header'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-12 md:py-16">
        <Outlet />
      </main>
      <footer className="border-t border-ink/10 px-5 py-8 text-center text-sm text-muted">
        {coupleNames}
      </footer>
    </div>
  )
}
