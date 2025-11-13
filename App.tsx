import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import LegalDisclaimer from './components/LegalDisclaimer';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import { whatIsItems, howItWorksItems, benefitsItems } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection
          id="what-is"
          title="O que é o Oráculo da Sorte?"
          subtitle="Uma ferramenta inteligente para suas apostas."
          items={whatIsItems}
          layout="default"
        />
        <FeatureSection
          id="how-it-works"
          title="Como Funciona?"
          subtitle="Simples, rápido e estratégico. Em poucos passos você tem seus números."
          items={howItWorksItems}
          layout="steps"
        />
        <FeatureSection
          id="benefits"
          title="Benefícios Exclusivos"
          subtitle="Jogue com mais estratégia e aumente sua confiança."
          items={benefitsItems}
          layout="grid"
        />
        <TestimonialsSection />
        <PricingSection />
        <LegalDisclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default App;