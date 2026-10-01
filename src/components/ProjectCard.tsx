import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { GH, type Project } from '../data/portfolio'

export default function ProjectCard({ p }: { p: Project }) {
  const [broken, setBroken] = useState(false)
  const repoUrl = `${GH}/${p.repo}`

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      className="glass group flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-2xl hover:border-teal/40"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-teal/20 via-amber/20 to-rose/20 border-b border-ink/5">
        {!broken ? (
          <img
            src={`https://opengraph.githubassets.com/1/AshokSingodia-Codes/${p.repo}`}
            alt={`${p.title} repository preview`}
            loading="lazy"
            width={1200}
            height={600}
            onError={() => setBroken(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center font-display text-5xl font-bold text-ink/30">
            {p.title[0]}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-teal/15 border border-teal/25 px-3 py-1 text-xs font-bold text-teal-deep">
            {p.category}
          </span>
          {p.featured && (
            <span className="rounded-full bg-gradient-to-r from-amber to-rose px-3 py-1 text-xs font-bold text-white shadow-sm">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight text-ink group-hover:text-teal-deep transition-colors">
          {p.title}
        </h3>
        <p className="text-sm sm:text-base text-mute leading-relaxed">{p.tagline}</p>

        <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm text-mute marker:text-teal">
          {p.features.map(f => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-3" aria-label="Tech stack">
          {p.stack.map(s => (
            <li key={s} className="rounded-lg bg-teal/10 border border-teal/20 px-2.5 py-1 text-xs font-semibold text-teal-deep">
              {s}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap sm:flex-nowrap gap-2 pt-3">
          {p.demo && (
            <a
              className="btn btn-primary flex-1 justify-center !px-4 !py-2.5 text-xs sm:text-sm font-semibold"
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${p.title}`}
            >
              <ExternalLink size={15} /> Live demo
            </a>
          )}
          <a
            className="btn flex-1 justify-center border border-ink/10 bg-white/90 hover:bg-white !px-4 !py-2.5 text-xs sm:text-sm font-semibold"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.title} on GitHub`}
          >
            <Github size={15} /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}


