# Wedding Page

A React and Tailwind wedding site that builds to static files and deploys to GitHub Pages. Announcements are Markdown files, bundled into the site at build time.

## Customize

- Names, date, venue, and schedule: [`src/site.ts`](src/site.ts)
- Announcements: add or edit `.md` files in [`content/announcements/`](content/announcements)

Each announcement file looks like this:

```md
---
title: Hotel block is open
date: 2026-09-01
---

Rooms are held under **Alex & Jordan** through May.
```

The filename becomes an internal slug. Posts are sorted by `date`, newest first, and rendered on the Announcements page.

## Local development

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

builds the production site into `dist/` and serves it locally.

## GitHub Pages

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds on every push to `main` or `master` and publishes `dist/`.

1. Push this repo to GitHub.
2. In the repository: **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow from the Actions tab).

The site URL will be:

- Project repo: `https://<user>.github.io/<repo>/`
- User/org site (`<user>.github.io`) or a custom domain: the site root

The workflow sets Vite's `base` from GitHub Pages so asset paths stay correct in either case.
