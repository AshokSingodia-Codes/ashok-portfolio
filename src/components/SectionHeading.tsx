import Reveal from './Reveal'
export default function SectionHeading({ id, title, sub }: { id: string; title: string; sub?: string }) {
  return <Reveal className="mb-10"><h2 id={id} className="font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>{sub && <p className="mt-3 max-w-2xl text-mute">{sub}</p>}</Reveal>
}
