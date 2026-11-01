import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { GH, type Project } from '../data/portfolio'

export default function ProjectCard({ p }: { p: Project }) {
  const repoUrl = `${GH}/${p.repo}`
  const primaryUrl = p.demo || p.model || repoUrl

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -5 }}
      className="glass group flex flex-col justify-between rounded-3xl p-6 sm:p-7 border border-teal/25 transition-all duration-300 hover:border-teal/60 hover:shadow-2xl hover:ring-2 hover:ring-teal/20"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="rounded-full bg-teal/15 border border-teal/25 px-3 py-1 text-xs font-bold text-teal-deep">
            {p.category}
          </span>
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mute/60 group-hover:text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            aria-label={`Open ${p.title}`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight text-ink group-hover:text-teal-deep transition-colors">
          <a href={primaryUrl} target="_blank" rel="noopener noreferrer">
            {p.title}
          </a>
        </h3>

        <p className="mt-1.5 text-sm sm:text-base font-medium text-mute leading-relaxed">
          {p.tagline}
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-xs sm:text-sm text-mute marker:text-teal">
          {p.features.map(f => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <ul className="flex flex-wrap gap-1.5 pt-3 border-t border-ink/5" aria-label="Tech stack">
          {p.stack.map(s => (
            <li key={s} className="rounded-lg bg-teal/10 border border-teal/20 px-2.5 py-1 text-xs font-semibold text-teal-deep">
              {s}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap sm:flex-nowrap gap-2 pt-4">
          {p.demo && (
            <a
              className="btn btn-primary flex-1 justify-center !px-4 !py-2.5 text-xs sm:text-sm font-semibold"
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${p.title}`}
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
          {p.model && (
            <a
              className="btn btn-primary flex-1 justify-center !px-4 !py-2.5 text-xs sm:text-sm font-semibold"
              href={p.model}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Model for ${p.title}`}
            >
              <ExternalLink size={15} /> Model
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
