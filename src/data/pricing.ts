import { PricingPlan } from '../types'

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Researcher',
    price: '$29',
    description: 'For independent researchers and PhD students.',
    features: [
      'Full research assistant',
      '5 GB project storage',
      '25 video analyses / mo',
      'Standard figure exports',
      'Literature graph access',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Lab',
    price: '$99',
    description: 'For working labs that need a shared environment.',
    features: [
      'Everything in Researcher',
      '5 seats included',
      '50 GB shared storage',
      'Unlimited video analyses',
      'Journal figure presets',
      'Priority support',
    ],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Institution',
    price: 'Custom',
    description: 'For programs, centers, and IRB-bound deployments.',
    features: [
      'Everything in Lab',
      'Unlimited seats',
      'SSO, audit, on-prem option',
      'Custom model fine-tuning',
      'API & pipeline access',
      'Dedicated success engineer',
    ],
    cta: 'Talk to us',
  },
]
