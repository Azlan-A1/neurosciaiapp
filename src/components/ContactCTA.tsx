import { ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute inset-0 bg-grid mask-radial opacity-30" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Request access
            </div>
            <h2 className="mt-4 text-balance text-[36px] font-semibold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
              Bring Neurosci AI
              <br />
              into your lab.
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-800">
              We onboard a small number of labs each month. Tell us about your
              setup and we&apos;ll get back within 48 hours with a tailored demo.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  k: '01',
                  t: 'A real demo, on your data',
                  d: 'Bring a representative session. We walk you through it end-to-end.',
                },
                {
                  k: '02',
                  t: '30-day pilot',
                  d: 'Full platform access for your group, no commitment.',
                },
                {
                  k: '03',
                  t: 'White-glove integration',
                  d: 'We help wire it into your existing pipelines, storage, and IRB workflows.',
                },
              ].map((s) => (
                <div key={s.k} className="flex gap-4">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-md border border-white/10 bg-ink-100 font-mono text-[11px] text-accent">
                    {s.k}
                  </span>
                  <div>
                    <div className="text-[14.5px] font-medium text-ink-950">
                      {s.t}
                    </div>
                    <div className="mt-0.5 text-[13.5px] text-ink-800">
                      {s.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="relative rounded-2xl border border-white/10 bg-ink-50/60 p-7 backdrop-blur sm:p-9">
            <div className="space-y-5">
              <Field
                id="name"
                label="Full name"
                placeholder="Dr. Jane Smith"
              />
              <Field
                id="email"
                type="email"
                label="Work email"
                placeholder="jane.smith@university.edu"
              />
              <Field
                id="institution"
                label="Lab or institution"
                placeholder="Stanford Neuroscience Institute"
              />
              <div>
                <label
                  htmlFor="focus"
                  className="block font-mono text-[11px] uppercase tracking-wider text-ink-700"
                >
                  Research focus
                </label>
                <textarea
                  id="focus"
                  rows={4}
                  placeholder="Calcium imaging in CA1 · optogenetic stimulation · behavior tracking…"
                  className="mt-2 w-full resize-none rounded-md border border-white/10 bg-ink-100/60 px-3.5 py-2.5 text-[14px] text-ink-950 placeholder:text-ink-600 outline-none transition focus:border-accent/50 focus:bg-ink-100"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-[14px] font-medium text-ink-0 transition hover:bg-accent-glow"
              >
                Request access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <p className="text-center font-mono text-[11px] text-ink-600">
                We reply within 48 hours · no marketing list
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  placeholder,
  type = 'text',
}: {
  id: string
  label: string
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[11px] uppercase tracking-wider text-ink-700"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-white/10 bg-ink-100/60 px-3.5 py-2.5 text-[14px] text-ink-950 placeholder:text-ink-600 outline-none transition focus:border-accent/50 focus:bg-ink-100"
      />
    </div>
  )
}
