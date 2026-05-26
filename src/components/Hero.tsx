import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* backdrop */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[360px] w-[420px] rounded-full bg-signal-violet/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] text-ink-800 backdrop-blur transition hover:border-white/20 hover:text-ink-950"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono">v0.4 — multimodal lab agents</span>
            <span className="text-ink-600">→</span>
          </a>

          <h1 className="mt-7 text-balance text-[44px] font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-6xl md:text-7xl">
            Research infrastructure
            <br />
            for{' '}
            <span className="text-gradient-accent">neuroscience labs.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-800">
            Neurosci AI is the operating system for modern neuroscience work —
            analyze experiments, query the literature, and ship publication-ready
            figures with agents trained on the science you actually do.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-[14px] font-medium text-ink-0 transition hover:bg-accent-glow sm:w-auto"
            >
              Request access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-5 py-3 text-[14px] font-medium text-ink-900 transition hover:border-white/20 hover:bg-white/[0.04] sm:w-auto"
            >
              See the workflow
            </a>
          </div>

          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-600">
            Closed beta · neuroscience labs only
          </div>
        </div>

        {/* product preview */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute -inset-x-12 -inset-y-8 bg-grid-fade opacity-50" />
          <div className="relative rounded-2xl border border-white/10 bg-ink-50/60 p-2 shadow-[0_40px_120px_-20px_rgba(124,246,200,0.15)] backdrop-blur">
            <TerminalPreview />
          </div>
          <div className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        </div>
      </div>
    </section>
  )
}

function TerminalPreview() {
  return (
    <div className="scanline relative overflow-hidden rounded-xl border border-white/10 bg-ink-100">
      {/* chrome */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-400" />
        </div>
        <div className="font-mono text-[11px] text-ink-700">
          experiment_A237.ipynb — neurosci.app
        </div>
        <div className="font-mono text-[11px] text-accent/80">● live</div>
      </div>

      <div className="grid grid-cols-12 gap-0 font-mono text-[12.5px]">
        {/* sidebar */}
        <aside className="col-span-3 hidden border-r border-white/5 p-4 lg:block">
          <div className="text-[10px] uppercase tracking-wider text-ink-600">
            project
          </div>
          <div className="mt-2 space-y-1.5 text-ink-800">
            <div className="rounded bg-white/5 px-2 py-1 text-ink-950">
              ▸ A237_optogen
            </div>
            <div className="px-2 py-1">  raw/</div>
            <div className="px-2 py-1">  videos/</div>
            <div className="px-2 py-1 text-accent">  analysis.ipynb</div>
            <div className="px-2 py-1">  figures/</div>
          </div>
          <div className="mt-5 text-[10px] uppercase tracking-wider text-ink-600">
            agents
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center gap-2 px-2 py-1 text-ink-800">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              dlc-tracker
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-ink-800">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-violet" />
              lit-reviewer
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-ink-800">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-amber" />
              fig-composer
            </div>
          </div>
        </aside>

        {/* main */}
        <div className="col-span-12 p-4 lg:col-span-9 lg:p-6">
          <div className="space-y-3">
            <div className="text-ink-600">
              <span className="text-accent">$</span> analyze --exp A237 --modality
              calcium-imaging
            </div>
            <div className="rounded-md border border-white/5 bg-ink-50 p-3">
              <div className="text-[10px] uppercase tracking-wider text-ink-600">
                neurosci · agent trace
              </div>
              <div className="mt-2 space-y-1.5 text-ink-800">
                <div>
                  <span className="text-accent">→</span> parsed 12,840 frames ·
                  470nm pulses detected
                </div>
                <div>
                  <span className="text-accent">→</span> ROI extraction ·{' '}
                  <span className="text-ink-950">312 cells</span> · CA1 region
                </div>
                <div>
                  <span className="text-accent">→</span> cross-ref:{' '}
                  <span className="text-signal-violet">14 papers</span> matched
                  protocol
                </div>
                <div>
                  <span className="text-accent">→</span> figure draft ready ·{' '}
                  <span className="underline decoration-accent/40">fig_3a.svg</span>
                </div>
              </div>
            </div>

            {/* chart */}
            <div className="rounded-md border border-white/5 bg-ink-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-wider text-ink-600">
                  ΔF/F · CA1 mean response
                </div>
                <div className="font-mono text-[10px] text-ink-700">
                  n=312 · p&lt;0.001
                </div>
              </div>
              <svg viewBox="0 0 320 80" className="h-20 w-full">
                <defs>
                  <linearGradient id="ln" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7cf6c8" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#7cf6c8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 60 L30 58 L55 55 L75 50 L95 40 L110 18 L130 14 L155 22 L180 30 L210 36 L240 42 L275 48 L320 52"
                  fill="none"
                  stroke="#7cf6c8"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 60 L30 58 L55 55 L75 50 L95 40 L110 18 L130 14 L155 22 L180 30 L210 36 L240 42 L275 48 L320 52 L320 80 L0 80 Z"
                  fill="url(#ln)"
                />
                <line
                  x1="110"
                  y1="0"
                  x2="110"
                  y2="80"
                  stroke="#9b8cff"
                  strokeWidth="0.5"
                  strokeDasharray="2 3"
                />
                <text
                  x="113"
                  y="10"
                  fill="#9b8cff"
                  fontSize="7"
                  fontFamily="ui-monospace, monospace"
                >
                  stim
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
