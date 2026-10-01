import { useState, type FormEvent } from 'react'
import { Check, Copy, Github, Linkedin, Loader2, Mail, Phone, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function CopyBtn({ text, label }: { text: string; label: string }) {
  const [ok, setOk] = useState(false)
  return (
    <button
      type="button"
      aria-label={`Copy ${label}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setOk(true)
          setTimeout(() => setOk(false), 1600)
        } catch {
          /* clipboard unavailable */
        }
      }}
      className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-white/80 hover:border-teal"
    >
      {ok ? <Check size={16} className="text-teal" /> : <Copy size={16} />}
    </button>
  )
}

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type?: 'success' | 'error'; message?: string }>({})

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus({})

    try {
      const response = await fetch('https://formsubmit.co/ajax/ashokbadu01@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: f.name,
          email: f.email,
          message: f.message,
          _subject: `New Portfolio Inquiry from ${f.name}`,
          _template: 'table'
        })
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '✨ Message delivered directly to Ashok\'s inbox (ashokbadu01@gmail.com)!'
        })
        setF({ name: '', email: '', message: '' })
      } else {
        throw new Error('Direct submission endpoint error')
      }
    } catch {
      // Fallback: Open mailto link
      const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${f.name}`)}&body=${encodeURIComponent(body)}`
      setStatus({
        type: 'success',
        message: 'Opening your default email app to deliver the message...'
      })
    } finally {
      setLoading(false)
    }
  }

  const field = 'w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 outline-none transition focus:border-teal'
  const rows = [
    { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio Inquiry - Ashok Singodia')}` },
    { Icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { Icon: Linkedin, label: 'LinkedIn', value: 'ashok-singodia', href: profile.linkedin },
    { Icon: Github, label: 'GitHub', value: 'AshokSingodia-Codes', href: profile.github },
  ]

  return (
    <section id="contact" aria-labelledby="h-contact" className="wrap pt-24">
      <SectionHeading id="h-contact" title="Get in Touch" sub="Hiring for AI/ML, Data Science, GenAI or Python backend roles? Send a direct message." />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass space-y-3 rounded-3xl p-6">
            {rows.map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/60 p-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-teal to-teal-soft text-white">
                  <Icon size={18} />
                </span>
                <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="min-w-0 flex-1">
                  <span className="block text-xs text-mute">{label}</span>
                  <span className="block truncate font-semibold">{value}</span>
                </a>
                {(label === 'Email' || label === 'Phone') && <CopyBtn text={label === 'Email' ? profile.email : profile.phone} label={label.toLowerCase()} />}
              </div>
            ))}
            <p className="px-1 pt-1 text-sm text-mute">Based in {profile.location}.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass space-y-4 rounded-3xl p-6">
            <label className="block text-sm font-semibold">
              Name
              <input required className={`${field} mt-1`} autoComplete="name" value={f.name} onChange={e => setF({ ...f, name: e.target.value })} placeholder="Your Name" />
            </label>
            <label className="block text-sm font-semibold">
              Email
              <input required type="email" className={`${field} mt-1`} autoComplete="email" value={f.email} onChange={e => setF({ ...f, email: e.target.value })} placeholder="your.email@example.com" />
            </label>
            <label className="block text-sm font-semibold">
              Message
              <textarea required rows={4} className={`${field} mt-1 resize-y`} value={f.message} onChange={e => setF({ ...f, message: e.target.value })} placeholder="Write your message here..." />
            </label>

            <button disabled={loading} className="btn btn-primary w-full justify-center disabled:opacity-50" type="submit">
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending message...
                </>
              ) : (
                <>
                  <Send size={18} /> Send direct message
                </>
              )}
            </button>

            {status.message && (
              <div className={`mt-3 flex items-center gap-2 rounded-xl p-3 text-sm font-medium ${status.type === 'success' ? 'bg-teal/10 text-teal-deep border border-teal/20' : 'bg-rose/10 text-rose'}`}>
                {status.type === 'success' && <CheckCircle2 size={18} className="shrink-0 text-teal" />}
                <span>{status.message}</span>
              </div>
            )}
            {!status.message && (
              <p role="status" className="min-h-5 text-center text-xs text-mute">
                Submits directly to <b>ashokbadu01@gmail.com</b>
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

