import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { categories, GH, projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

const INITIAL_COUNT = 6

export default function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>('All')
  const [expanded, setExpanded] = useState(false)

  const filtered = cat === 'All' ? projects : projects.filter(p => p.category === cat)
  const shown = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)
  const remaining = filtered.length - INITIAL_COUNT

  const handleCategoryChange = (c: (typeof categories)[number]) => {
    setCat(c)
    setExpanded(false)
  }

  return (
    <section id="projects" aria-labelledby="h-proj" className="wrap pt-24">
      <SectionHeading
        id="h-proj"
        title="Featured Projects"
        sub={`${projects.length} curated Data Science, ML, AI/RAG & Vision repositories. Select a category or click 'Show More'.`}
      />

      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {categories.map(c => (
          <button
            key={c}
            aria-pressed={cat === c}
            onClick={() => handleCategoryChange(c)}
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
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map(p => (
              <ProjectCard key={p.repo} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {filtered.length > INITIAL_COUNT && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="btn btn-primary px-6 py-3 text-base shadow-soft hover:scale-105 transition-transform"
          >
            {expanded ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                Show More Projects ({remaining} more) <ChevronDown size={18} />
              </>
            )}
          </button>
        )}

        <a
          className="btn border border-ink/10 bg-white/80 hover:bg-white px-6 py-3 text-base"
          href={`${GH}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          See all repositories on GitHub
        </a>
      </div>
    </section>
  )
}

