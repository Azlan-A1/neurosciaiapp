import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plans for Every Research Need
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that works best for your research team or institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-white ring-4 ring-indigo-500 ring-opacity-50 shadow-xl relative z-10 scale-105 md:scale-110' 
                  : 'bg-white shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                        <Check className="w-3 h-3 text-indigo-600" />
                      </div>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.popular 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
                  } transition-colors`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution? <a href="#" className="text-indigo-600 font-medium hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;