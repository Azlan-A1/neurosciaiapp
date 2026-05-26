const stats = [
  { value: '40×', label: 'faster analysis loops', sub: 'vs. notebook baselines' },
  { value: '12k+', label: 'papers in literature graph', sub: 'neuro-specific corpus' },
  { value: '90%', label: 'methods reproducibility', sub: 'agent-grounded runs' },
  { value: '24/7', label: 'lab-aware agents', sub: 'sub-second responses' },
]

export default function Stats() {
  return (
    <section id="stats" className="relative border-y border-white/5 py-20">
      <div className="absolute inset-0 bg-grid-sm opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-[40px] font-semibold leading-none tracking-tight text-gradient-accent sm:text-[52px]">
                {s.value}
              </div>
              <div className="mt-3 text-[14px] font-medium text-ink-950">
                {s.label}
              </div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-ink-600">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
