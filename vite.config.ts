import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function pagesBase() {
  const raw = process.env.BASE_PATH
  if (!raw || raw === '/') return '/'
  return raw.endsWith('/') ? raw : `${raw}/`
}

function spaFallback() {
  return {
    name: 'spa-fallback',
    writeBundle(options: { dir?: string }) {
      const dir = options.dir ?? resolve('dist')
      const index = resolve(dir, 'index.html')
      if (existsSync(index)) {
        copyFileSync(index, resolve(dir, '404.html'))
      }
    },
  }
}

export default defineConfig({
  base: pagesBase(),
  plugins: [react(), tailwindcss(), spaFallback()],
})
