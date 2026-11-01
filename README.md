# Ashok Singodia: portfolio

React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + React Three Fiber + Lucide.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview
```

## Edit content
All content lives in `src/data/portfolio.ts` and mirrors the resume. Updating that file updates the hero, experience, education, certifications, skills, and projects across the site.

## Deploy
```bash
npm run deploy
```
This builds the site (`tsc --noEmit && vite build`) and pushes the `dist` directory to the `gh-pages` branch.
