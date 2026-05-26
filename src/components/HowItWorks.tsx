import { SectionHeader } from './Features'

const steps = [
  {
    id: '01',
    title: 'Connect your data',
    desc: 'Drop in raw recordings, imaging stacks, or behavioral video. Native readers for NWB, DANDI, OpenEphys, and standard lab formats.',
    code: `$ neurosci connect ./session_A237/
✔ detected: calcium-imaging (2P)
✔ frames: 12,840 · 30Hz
✔ metadata: synced from NWB`,
  },
  {
    id: '02',
    title: 'Run a lab-aware agent',
    desc: 'Pick an agent — ROI extractor, behavior classifier, literature reviewer — or chain your own. Every step is inspectable.',
    code: `> agent: lit-reviewer
> goal: find protocols matching 470nm CA1
→ 14 papers · 3 highly-cited · methods aligned
→ deltaF/F thresholds within 1σ of consensus`,
  },
  {
    id: '03',
    title: 'Inspect, iterate, branch',
    desc: 'Every run is reproducible. Diff parameters, branch experiments, and replay analyses across sessions without re-uploading.',
    code: `git-like runs · A237@main
├─ baseline      ΔF/F=0.18  cells=312
├─ ▸ threshold↑  ΔF/F=0.22  cells=287
└─   subset:CA3  ΔF/F=0.15  cells=104`,
  },
  {
    id: '04',
    title: 'Export figures & manuscripts',
    desc: 'Generate publication-ready figures with journal presets, exportable as SVG/PDF, and methods sections grounded in your actual runs.',
    code: `→ fig_3a.svg · Nature preset · vector
→ methods.md · 412 words · 9 refs
→ supplement.zip · raw + derived`,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-white/5 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Workflow"
          title={
            <>
              From raw session to
              <br className="hidden sm:block" />{' '}
              <span className="text-gradient-accent">submitted paper.</span>
            </>
          }
          subtitle="A linear path through the work — with the messy, iterative middle made tractable."
        />

        <div className="mt-20 space-y-6">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className="relative grid grid-cols-1 gap-6 rounded-2xl border border-white/5 bg-ink-50/30 p-6 transition hover:border-white/10 lg:grid-cols-12 lg:gap-10 lg:p-8"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-white/10 bg-ink-100 px-2 py-0.5 font-mono text-[11px] text-accent">
                    {s.id}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-600">
                    step {i + 1} of 4
                  </span>
                </div>
                <h3 className="mt-4 text-[24px] font-semibold tracking-tight text-ink-950 sm:text-[28px]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-800">
                  {s.desc}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-lg border border-white/10 bg-ink-100/80 p-4">
                  <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-ink-400" />
                      <span className="h-2 w-2 rounded-full bg-ink-400" />
                      <span className="h-2 w-2 rounded-full bg-ink-400" />
                    </div>
                    <span className="font-mono text-[10px] text-ink-600">
                      neurosci · {s.id}
                    </span>
                  </div>
                  <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-ink-800">
                    {s.code}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
