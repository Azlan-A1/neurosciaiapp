import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <ContactCTA />
    </main>
  )
}