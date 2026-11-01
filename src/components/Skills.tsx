import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const groups = Object.keys(skills)

export default function Skills() {
  const [sel, setSel] = useState(groups[0])
  const [hot, setHot] = useState<string | null>(null)

  return (
    <section id="skills" aria-labelledby="h-skills" className="wrap pt-24">
      <SectionHeading id="h-skills" title="Skills" />
      <div className="glass rounded-3xl p-6 md:p-9 shadow-soft">
        <div role="tablist" aria-label="Skill categories" className="mb-8 flex flex-wrap gap-3">
          {groups.map(g => {
            const isSelected = sel === g
            return (
              <button
                key={g}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSel(g)}
                onMouseEnter={() => setSel(g)}
                className={`relative rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 transform ${
                  isSelected
                    ? 'scale-105 shadow-lift text-white font-bold bg-gradient-to-r from-teal via-teal-deep to-teal-soft ring-2 ring-teal/30'
                    : 'bg-white/80 text-mute hover:text-ink hover:scale-102 hover:bg-white hover:shadow-sm'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${isSelected ? 'bg-amber animate-pulse' : 'bg-mute/40'}`} />
                  {g}
                </span>
              </button>
            )
          })}
        </div>

        <div className="rounded-2xl border border-teal/15 bg-white/50 p-5 md:p-6 backdrop-blur-sm">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-teal-deep">
            {sel} ({skills[sel].length})
          </h4>
          <AnimatePresence mode="wait">
            <motion.ul
              key={sel}
              role="tabpanel"
              className="flex min-h-[9rem] flex-wrap content-start gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {skills[sel].map((s, k) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: k * 0.02 }}
                  onMouseEnter={() => setHot(s)}
                  onMouseLeave={() => setHot(null)}
                  className={`rounded-xl border px-4 py-2 text-sm md:text-base font-semibold transition-all duration-200 cursor-default ${
                    hot === s
                      ? '-translate-y-1 scale-105 border-teal bg-teal/15 text-teal-deep shadow-lift'
                      : 'border-ink/10 bg-white/90 text-ink hover:border-teal/50 hover:bg-white'
                  }`}
                >
                  {s}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
