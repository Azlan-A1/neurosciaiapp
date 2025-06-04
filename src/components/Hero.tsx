import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1600')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-800 bg-opacity-50 text-indigo-100 text-sm font-medium">
              <span className="animate-pulse mr-2">●</span>
              <span>Revolutionizing Neuroscience Research</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Accelerate Discovery with <span className="text-indigo-300">Neurosci AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-indigo-100 max-w-2xl">
              An AI-powered research assistant built specifically for neuroscience labs, researchers, and clinicians to analyze data, interpret papers, and generate insights faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-lg font-medium text-white shadow-lg shadow-indigo-700/30 flex items-center justify-center">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 bg-transparent hover:bg-white/10 border border-indigo-300 transition-colors rounded-lg font-medium text-indigo-100 flex items-center justify-center">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/30">
                <img 
                  src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Neuroscience visualization" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-indigo-300 mb-2">
                    <Brain className="w-5 h-5" />
                    <span className="text-sm font-medium">Neurosci Assistant</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-indigo-900/50">
                    <p className="text-sm text-white/90 leading-relaxed">
                      "Analyzing recent optogenetic stimulation data from experiment #A237. Results show significant activation in CA1 hippocampal neurons following light pulses at 470nm..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </div>
  );
};

export default Hero;