export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  institution: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}