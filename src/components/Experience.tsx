import { Award, GraduationCap } from 'lucide-react'
import { certifications, education, experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  const cardHoverStyle = "glass relative rounded-3xl p-6 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:bg-white/95 hover:border-teal/40 cursor-default"

  return (
    <section id="experience" aria-labelledby="h-exp" className="wrap pt-24">
      <SectionHeading id="h-exp" title="Experience" />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <ol className="relative space-y-6 border-l-2 border-teal/30 pl-6">
          {experience.map((x, k) => (
            <Reveal key={x.org} delay={k * 0.1}>
              <li className={cardHoverStyle}>
                <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-sage bg-teal" />
                <h3 className="font-display text-xl font-bold text-ink">{x.title}</h3>
                <p className="font-semibold text-teal-deep text-base">{x.org}</p>
                <p className="mb-3 text-sm font-medium text-mute">{x.period}</p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/80 marker:text-teal font-medium">
                  {x.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="space-y-6">
          <Reveal>
            <div className={cardHoverStyle}>
              <GraduationCap className="mb-2 text-rose h-7 w-7" />
              <h3 className="font-display text-xl font-bold text-ink">{education.degree}</h3>
              <p className="font-semibold text-teal-deep">{education.school}</p>
              <p className="text-sm font-medium text-mute">{education.period} · CGPA {education.cgpa}</p>
              <p className="mt-3 text-sm text-mute leading-relaxed"><b>Coursework:</b> {education.courses}.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={cardHoverStyle}>
              <Award className="mb-2 text-amber h-7 w-7" />
              <h3 className="font-display text-xl font-bold text-ink">Certifications</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-medium text-ink/80 marker:text-amber">
                {certifications.map(c => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
