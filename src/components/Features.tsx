import React from 'react';
import { 
  FileText, 
  Brain, 
  Video, 
  BarChart2, 
  Library, 
  Shield,
  ChevronRight
} from 'lucide-react';
import { features } from '../data/features';

const Features: React.FC = () => {
  // Map feature icon strings to components
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 text-indigo-600" };
    switch (iconName) {
      case 'FileText': return <FileText {...iconProps} />;
      case 'Brain': return <Brain {...iconProps} />;
      case 'Video': return <Video {...iconProps} />;
      case 'BarChart2': return <BarChart2 {...iconProps} />;
      case 'Library': return <Library {...iconProps} />;
      case 'Shield': return <Shield {...iconProps} />;
      default: return <Brain {...iconProps} />;
    }
  };

  return (
    <section className="py-20 bg-gray-100" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Accelerate Your Research with Advanced AI
          </h2>
          <p className="text-xl text-gray-600">
            Neurosci AI integrates cutting-edge language models specifically fine-tuned for neuroscience research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors"
                >
                  Learn more 
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;