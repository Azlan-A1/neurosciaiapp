import React from 'react';
import { Upload, Search, Database, FileOutput } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-white" />,
      title: "Upload Your Research",
      description: "Import your research papers, experimental data, and video recordings directly into Neurosci AI's secure platform."
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "AI Analysis",
      description: "Our specialized neural networks analyze your data, extract insights, and identify patterns that might otherwise be missed."
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Cross-Reference",
      description: "Your data is cross-referenced with our curated repository of neuroscience literature for comprehensive context."
    },
    {
      icon: <FileOutput className="w-8 h-8 text-white" />,
      title: "Generate Results",
      description: "Receive publication-ready figures, detailed analysis reports, and actionable insights for your research."
    }
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Neurosci AI Works
          </h2>
          <p className="text-xl text-gray-600">
            Our platform combines state-of-the-art AI models with neuroscience expertise to streamline your research workflow.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute hidden md:block left-1/2 top-12 bottom-12 w-0.5 bg-indigo-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={index} className="md:grid md:grid-cols-2 gap-8 items-center relative">
                {/* Alternating layout */}
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 shadow-xl transform transition-transform hover:scale-105 duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-indigo-100">{step.description}</p>
                  </div>
                </div>
                
                {/* Connection indicator */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-indigo-500 z-10"></div>
                
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} hidden md:block`}>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={`https://images.pexels.com/photos/${[4031818, 8926894, 3825584, 3861969][index]}/pexels-photo-${[4031818, 8926894, 3825584, 3861969][index]}.jpeg?auto=compress&cs=tinysrgb&w=1600`} 
                      alt={`Step ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;