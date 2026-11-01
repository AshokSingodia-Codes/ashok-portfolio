import { useState, type PointerEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

const words = profile.name.split(' ')

export default function Hero() {
  const reduce = useReducedMotion()
  const [glow, setGlow] = useState({ x: 70, y: 30 })

  const move = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100
    })
  }

  return (
    <section id="hero" onPointerMove={move} className="wrap relative grid min-h-[calc(100svh-70px)] items-center gap-8 py-8 sm:py-12 md:grid-cols-[1.25fr_1fr] md:py-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-70" style={{ background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, rgba(53,181,159,.22), transparent 70%)` }} />

      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          <p className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs sm:text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            Open to AI / ML internship opportunities
          </p>
        </div>

        <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" aria-label={profile.name}>
          {words.map((w, k) => (
            <span key={w} className="mr-3 inline-block overflow-hidden align-bottom sm:mr-4">
              <motion.span
                aria-hidden
                className="inline-block bg-gradient-to-r from-ink via-teal to-rose bg-clip-text text-transparent"
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + k * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <p className="mt-3 font-display text-xl font-semibold text-teal-deep sm:text-2xl">{profile.role}</p>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute sm:text-base md:text-lg">{profile.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
          <a className="btn btn-primary shadow-soft !py-2 !px-3.5 text-sm sm:!py-2.5 sm:!px-4" href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a className="btn !py-2 !px-3.5 text-sm sm:!py-2.5 sm:!px-4" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a className="btn !py-2 !px-3.5 text-sm sm:!py-2.5 sm:!px-4" href="#contact">
            <Mail size={16} /> Contact
          </a>
          <a className="btn !py-2 !px-3.5 text-sm sm:!py-2.5 sm:!px-4" href="#projects">
            Projects <ArrowDownRight size={16} />
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="glass rounded-3xl p-6 shadow-soft border border-teal/20 transition-all duration-300 hover:shadow-xl hover:border-teal/40">
          <div className="mb-4 flex items-center justify-between border-b border-ink/10 pb-3">
            <h2 className="font-display text-base font-bold text-ink">Selected work</h2>
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
          </div>
          <ul className="space-y-3.5 text-sm">
            <li className="flex flex-col gap-0.5 border-b border-ink/5 pb-2.5">
              <span className="font-semibold text-ink">FinAdvisor-X</span>
              <span className="text-xs text-mute font-medium">Precision@5 0.39 to 0.46</span>
            </li>
            <li className="flex flex-col gap-0.5 border-b border-ink/5 pb-2.5">
              <span className="font-semibold text-ink">Text-to-SQL</span>
              <span className="text-xs text-mute font-medium">execution accuracy 62.3% to 71.6%</span>
            </li>
            <li className="flex flex-col gap-0.5 border-b border-ink/5 pb-2.5">
              <span className="font-semibold text-ink">Research Assistant</span>
              <span className="text-xs text-mute font-medium">Redis checkpoint recovery</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-semibold text-ink">Fraud Scoring</span>
              <span className="text-xs text-mute font-medium">0.90 ROC-AUC</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
