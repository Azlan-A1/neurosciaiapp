import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Neurosci AI | Accelerating Neuroscience Research";
    
    // Optional: Change favicon if desired
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/favicon.ico";
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;