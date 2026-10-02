import { lazy, Suspense, useEffect, useState, type PointerEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, FileText, Github, Mail, GraduationCap } from 'lucide-react'
import { profile } from '../data/portfolio'
import OrbBoundary from './OrbBoundary'

const HeroOrb = lazy(() => import('./HeroOrb'))
const words = profile.name.split(' ')

export default function Hero() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [glow, setGlow] = useState({ x: 70, y: 30 })
  const [wide, setWide] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setI(n => (n + 1) % profile.focus.length), 2600)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const q = window.matchMedia('(min-width:900px)')
    const f = () => setWide(q.matches)
    f()
    q.addEventListener('change', f)
    return () => q.removeEventListener('change', f)
  }, [])

  const move = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100
    })
  }

  return (
    <section id="hero" onPointerMove={move} className="wrap relative grid min-h-[calc(100svh-70px)] items-center gap-8 py-14 md:grid-cols-[1.25fr_1fr]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-70" style={{ background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, rgba(53,181,159,.22), transparent 70%)` }} />

      <div>
        <div className="mb-4 flex flex-wrap gap-2">
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            Open to AI / ML & Data Science Opportunities
          </p>
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-mute font-medium">
            <GraduationCap size={14} className="text-teal" /> Central University of Karnataka
          </p>
        </div>

        <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl" aria-label={profile.name}>
          {words.map((w, k) => (
            <span key={w} className="mr-4 inline-block overflow-hidden align-bottom">
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

        <p className="mt-4 font-display text-2xl font-semibold text-teal-deep">{profile.role}</p>

        <p className="mt-2 h-8 text-lg text-mute" aria-live="off">
          Specializing in{' '}
          <span className="relative inline-block min-w-[18ch] font-semibold text-ink">
            <AnimatePresence mode="wait">
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {profile.focus[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </p>

        <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-primary shadow-soft" href={profile.resume} target="_blank" rel="noopener noreferrer">
            <FileText size={18} /> Resume
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={18} /> GitHub
          </a>
          <a className="btn" href="#contact">
            <Mail size={18} /> Contact
          </a>
          <a className="btn" href="#projects">
            Projects <ArrowDownRight size={18} />
          </a>
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div aria-hidden className="absolute inset-6 rounded-full bg-gradient-to-br from-amber/50 via-rose/40 to-teal/40 blur-3xl" />
        {wide && !reduce && (
          <OrbBoundary>
            <Suspense fallback={null}>
              <HeroOrb />
            </Suspense>
          </OrbBoundary>
        )}
      </div>
    </section>
  )
}


