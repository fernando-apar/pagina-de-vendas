
import React from 'react';

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);


const PricingSection: React.FC = () => {
  const features = [
    "Acesso vitalício ao gerador",
    "Atualização automática dos jogos",
    "Estatísticas avançadas e detalhadas",
    "Geração de bolões com um clique",
    "Ferramenta intuitiva e responsiva",
    "Suporte prioritário"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Saia na Frente. Jogue com Inteligência.
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Enquanto milhões jogam riscando números no impulso, você pode jogar com <span className="text-green-400 font-semibold">inteligência</span>.
            Você pode jogar com <span className="text-green-400 font-semibold">estratégia</span>.
            Você pode jogar com <span className="text-green-400 font-semibold">probabilidade</span>.
          </p>

          <div className="bg-gray-800 border border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500/10 text-left">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">Acesso Completo ao Oráculo</h3>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-center my-8">
              <p className="text-gray-400 line-through">De R$ 99,90</p>
              <p className="text-5xl font-extrabold text-white">
                R$ 29<span className="text-3xl align-top">,99</span>
              </p>
              <p className="text-gray-400">Pagamento único. Acesso vitalício.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;