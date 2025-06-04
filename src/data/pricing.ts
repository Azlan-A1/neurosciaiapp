import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    name: "Individual",
    price: "$49",
    description: "Perfect for independent researchers and PhD students",
    features: [
      "Full access to AI research assistant",
      "5 GB storage for datasets",
      "25 video analyses per month",
      "Basic figure generation",
      "Literature repository access"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Lab",
    price: "$199",
    description: "Ideal for small to medium research labs",
    features: [
      "Everything in Individual",
      "5 user accounts",
      "50 GB shared storage",
      "Unlimited video analyses",
      "Advanced figure generation",
      "Priority support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Institution",
    price: "Custom",
    description: "For large labs and educational institutions",
    features: [
      "Everything in Lab",
      "Unlimited user accounts",
      "Dedicated storage solutions",
      "Custom model training",
      "API access",
      "Dedicated support manager"
    ],
    cta: "Contact Sales"
  }
];