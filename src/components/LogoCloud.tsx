const institutions = [
  'Stanford',
  'MIT',
  'UCSD',
  'Janelia',
  'Allen Institute',
  'UCSF',
  'Karolinska',
]

export default function LogoCloud() {
  return (
    <section className="relative border-y border-white/5 bg-ink-50/30 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-600">
          In use at labs across
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
          {institutions.map((name) => (
            <div
              key={name}
              className="text-center font-mono text-[13px] tracking-tight text-ink-700 transition hover:text-ink-900"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
