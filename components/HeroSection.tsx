
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center text-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 animate-fade-in-down">
          Pare de Jogar Apenas na <span className="text-green-400">Sorte.</span>
          <br />
          Comece a Jogar com <span className="text-green-400">Estatística.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          O Oráculo da Sorte usa análise matemática e estatística para gerar combinações inteligentes para os jogos da Caixa — aumentando sua probabilidade de acerto.
        </p>
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.4s forwards; }
      `}</style>
    </section>
  );
};

export default HeroSection;