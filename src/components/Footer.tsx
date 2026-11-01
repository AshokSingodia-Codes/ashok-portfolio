import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { nav, profile } from '../data/portfolio'

export default function Footer() {
  const socialLinks = [
    { Icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    { Icon: Github, href: profile.github, label: 'GitHub' },
    { Icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="mt-24 border-t border-ink/10 bg-gradient-to-b from-transparent via-teal/5 to-teal/15">
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold text-ink">{profile.name}</p>
          <p className="text-mute text-sm">{profile.role}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-mute font-medium text-sm">
          {nav.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="hover:text-ink transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/90 hover:border-teal hover:bg-teal/10 hover:text-teal-deep transition-all duration-200 shadow-sm"
            >
              <Icon size={19} />
            </a>
          ))}
          <a
            href="#hero"
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white hover:bg-teal transition-all duration-200 shadow-md"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
      <p className="wrap pb-8 text-xs sm:text-sm text-mute border-t border-ink/5 pt-6">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
