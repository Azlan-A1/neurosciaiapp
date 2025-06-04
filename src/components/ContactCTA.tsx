import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative" id="contact">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-indigo-50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Neuroscience Research?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Join leading research institutions already using Neurosci AI to accelerate their discoveries and streamline their workflow.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Schedule a Demo</h3>
                  <p className="text-gray-600">See Neurosci AI in action with your own research data.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Free Trial Period</h3>
                  <p className="text-gray-600">Experience the full platform for 30 days with your team.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Seamless Integration</h3>
                  <p className="text-gray-600">Our team will help integrate Neurosci AI into your existing workflow.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Demo</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Dr. Jane Smith"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="jane.smith@university.edu"
                />
              </div>
              
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                <input 
                  type="text" 
                  id="institution" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="University of Science"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Research Focus</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                  placeholder="Briefly describe your research focus and how you plan to use Neurosci AI."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition-colors flex items-center justify-center"
              >
                Schedule Your Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;