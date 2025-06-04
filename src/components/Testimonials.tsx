import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900 text-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Researchers
          </h2>
          <p className="text-xl text-indigo-200">
            See how Neurosci AI is transforming research workflows in labs around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20"
            >
              <Quote className="w-10 h-10 text-indigo-300 mb-4" />
              <p className="text-lg text-indigo-100 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{testimonial.author}</h4>
                  <p className="text-indigo-300 text-sm">{testimonial.role}</p>
                  <p className="text-indigo-300 text-sm">{testimonial.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;