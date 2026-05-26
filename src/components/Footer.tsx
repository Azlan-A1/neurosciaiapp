import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Logo from './Logo'

const columns = [
  {
    title: 'Platform',
    links: ['Features', 'Agents', 'Literature graph', 'Integrations', 'Pricing'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'Changelog', 'Research blog', 'Tutorials', 'Status'],
  },
  {
    title: 'Lab',
    links: ['About', 'Careers', 'Press', 'Security', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-50/30">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-[15px] font-semibold tracking-tight text-ink-950">
                Neurosci<span className="text-accent">.</span>AI
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-ink-800">
              Research infrastructure for neuroscience labs. From raw recordings
              to publication-ready figures.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Github, label: 'GitHub' },
                { Icon: Mail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-md border border-white/5 bg-white/[0.02] text-ink-700 transition hover:border-white/15 hover:text-ink-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-600">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13.5px] text-ink-800 transition hover:text-ink-950"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-ink-600">
            © {new Date().getFullYear()} Neurosci AI · Built for labs that ship.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy', 'Terms', 'Data policy'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[12px] text-ink-700 hover:text-ink-900"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
