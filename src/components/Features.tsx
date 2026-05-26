import {
  Activity,
  Brain,
  Video,
  BarChart2,
  Library,
  Shield,
  type LucideIcon,
} from 'lucide-react'
import { features } from '../data/features'

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Brain,
  Video,
  BarChart2,
  Library,
  Shield,
}

export default function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid mask-radial opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Platform"
          title={
            <>
              One environment. Every step of
              <br className="hidden sm:block" /> the research loop.
            </>
          }
          subtitle="Neurosci AI replaces the fragmented stack of notebooks, plugins, and chat tools with a single, lab-aware workspace."
        />

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon] ?? Brain
            return (
              <article
                key={f.title}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-ink-50/40 p-6 transition hover:border-white/10 hover:bg-ink-50/70"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-ink-100 text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ink-600">
                    0{i + 1}
                  </div>
                </div>

                <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink-950">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-800">
                  {f.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  align?: 'center' | 'left'
}) {
  const alignCls =
    align === 'center'
      ? 'mx-auto text-center max-w-3xl'
      : 'text-left max-w-2xl'
  return (
    <div className={alignCls}>
      {eyebrow && (
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[16px] leading-relaxed text-ink-800">
          {subtitle}
        </p>
      )}
    </div>
  )
}
