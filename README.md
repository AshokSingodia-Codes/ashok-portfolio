# Ashok Singodia: portfolio

React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + React Three Fiber (lazy-loaded, desktop only) + Lucide.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview
```

## Edit content
All text, skills and projects live in `src/data/portfolio.ts`. Add a project by adding one object to `projects`; the card, filter counts and GitHub link update automatically.
Project images use GitHub's repository preview (`opengraph.githubassets.com`). To use your own screenshots, put them in `public/shots/` and change the `<img src>` in `src/components/ProjectCard.tsx`.

## Deploy
- **Vercel:** import the GitHub repo, framework preset "Vite" (build `npm run build`, output `dist`).
- **Netlify:** build `npm run build`, publish `dist`.
- **GitHub Pages:** build, then publish `dist` (set `base` in `vite.config.ts` if serving from a sub-path).
After deploying, add a canonical URL and `sitemap.xml` for SEO.

## Notes
The contact form opens the visitor's email app with the message prefilled (no backend needed). For in-page sending, connect Formspree or EmailJS in `src/components/Contact.tsx`.
