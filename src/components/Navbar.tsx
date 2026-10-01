import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/portfolio'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(([, id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="sticky top-3 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-6xl">
      <div className="glass relative flex items-center justify-between rounded-full px-5 py-2.5">
        <a href="#hero" className="font-display text-lg font-bold" aria-label={`${profile.name}, home`}>{profile.name}</a>
        <nav aria-label="Primary" className="hidden gap-1 md:flex">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={`rounded-full px-4 py-1.5 text-[15px] font-medium transition ${active === id ? 'bg-teal/15 text-ink' : 'text-mute hover:text-ink'}`}>{label}</a>)}
        </nav>
        <a href={profile.resume} download className="btn btn-primary hidden !py-1.5 text-sm md:inline-flex">Resume</a>
        <button className="grid h-11 w-11 place-items-center md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>{open ? <X /> : <Menu />}</button>
        <motion.div style={{ scaleX }} className="absolute inset-x-6 -bottom-px h-0.5 origin-left rounded bg-gradient-to-r from-teal via-amber to-rose" />
      </div>
      <AnimatePresence>
        {open && <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass mt-2 grid gap-1 rounded-3xl p-3 md:hidden">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-medium hover:bg-teal/10">{label}</a>)}
          <a href={profile.resume} download className="btn btn-primary mt-1 justify-center">Download resume</a>
        </motion.nav>}
      </AnimatePresence>
    </header>
  )
}
