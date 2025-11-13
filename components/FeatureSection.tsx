
import React from 'react';
import type { FeatureItem } from '../types';

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: FeatureItem[];
  layout?: 'default' | 'steps' | 'grid';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ id, title, subtitle, items, layout = 'default' }) => {
  const renderLayout = () => {
    switch (layout) {
      case 'grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        );
      case 'steps':
        return (
          <div className="relative">
             <div className="hidden md:block absolute top-0 left-1/2 w-px bg-gray-700 h-full -translate-x-1/2"></div>
            {items.map((item, index) => (
              <div key={index} className="flex items-start md:items-center mb-12 md:space-x-8 flex-col md:flex-row">
                 <div className="flex-shrink-0 w-24 h-24 bg-gray-800 border-2 border-green-400 rounded-full flex items-center justify-center mb-4 md:mb-0 z-10">
                    {item.icon}
                 </div>
                 <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                 </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4 bg-gray-800 p-4 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <section id={id} className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">{subtitle}</p>
        {renderLayout()}
      </div>
    </section>
  );
};

export default FeatureSection;
