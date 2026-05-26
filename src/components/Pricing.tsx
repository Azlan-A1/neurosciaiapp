import { Check } from 'lucide-react'
import { pricingPlans } from '../data/pricing'
import { SectionHeader } from './Features'

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-white/5 py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid-sm opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Priced for labs, not enterprises."
          subtitle="Start free, upgrade when your group does. All plans include the full agent suite — limits scale with your lab."
        />

        <div className="mt-16 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const popular = !!plan.popular
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition ${
                  popular
                    ? 'border-accent/40 bg-gradient-to-b from-accent/[0.04] to-transparent'
                    : 'border-white/5 bg-ink-50/40 hover:border-white/10'
                }`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/40 bg-ink-0 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                    Most chosen
                  </div>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="text-[16px] font-semibold text-ink-950">
                    {plan.name}
                  </h3>
                  {popular && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                      core
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-[44px] font-semibold leading-none tracking-tight text-ink-950">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-[13px] text-ink-700">/ month</span>
                  )}
                </div>

                <p className="mt-3 text-[14px] text-ink-800">
                  {plan.description}
                </p>

                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-[14px] font-medium transition ${
                    popular
                      ? 'bg-accent text-ink-0 hover:bg-accent-glow'
                      : 'border border-white/10 bg-white/[0.02] text-ink-950 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  {plan.cta}
                </a>

                <div className="my-7 h-px bg-white/5" />

                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[13.5px] text-ink-800"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-[13px] text-ink-700">
          Academic discounts available ·{' '}
          <a href="#contact" className="text-accent hover:underline">
            request a quote
          </a>
        </p>
      </div>
    </section>
  )
}
