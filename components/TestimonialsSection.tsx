
import React from 'react';
import { testimonials } from '../constants';

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 flex flex-col h-full">
    <p className="text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
    <div>
      <p className="font-bold text-white">{testimonial.name}</p>
      <p className="text-sm text-green-400">{testimonial.role}</p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">O que Nossos Usuários Dizem</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          A confiança de quem usa nossa ferramenta é nosso maior prêmio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
