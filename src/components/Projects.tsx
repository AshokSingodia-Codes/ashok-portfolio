import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { categories, GH, projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>('All')

  const filtered = cat === 'All' ? projects : projects.filter(p => p.category === cat)

  return (
    <section id="projects" aria-labelledby="h-proj" className="wrap pt-24">
      <SectionHeading id="h-proj" title="Projects" />

      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {categories.map(c => (
          <button
            key={c}
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              cat === c ? 'border-transparent bg-ink text-white' : 'border-ink/10 bg-white/70 text-mute hover:text-ink'
            }`}
          >
            {c}
            <span className="ml-2 opacity-60">
              {c === 'All' ? projects.length : projects.filter(p => p.category === c).length}
            </span>
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <ProjectCard key={p.repo} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          className="btn border border-ink/10 bg-white/80 hover:bg-white px-6 py-3 text-base"
          href={GH}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </section>
  )
}
