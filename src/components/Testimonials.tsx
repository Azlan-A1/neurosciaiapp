import { testimonials } from '../data/testimonials'
import { SectionHeader } from './Features'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="In the field"
          title={
            <>
              Built with the labs
              <br className="hidden sm:block" /> already using it.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="group relative flex flex-col rounded-xl border border-white/5 bg-ink-50/40 p-7 transition hover:border-white/10 hover:bg-ink-50/70"
            >
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-600">
                — {t.institution.split(' ')[0]}
              </div>
              <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed text-ink-900">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-ink-100 font-mono text-[13px] text-accent">
                  {t.author
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div>
                  <div className="text-[14px] font-medium text-ink-950">
                    {t.author}
                  </div>
                  <div className="text-[12px] text-ink-700">
                    {t.role} · {t.institution}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
