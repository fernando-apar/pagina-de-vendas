
import React from 'react';

const WarningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);


const LegalDisclaimer: React.FC = () => {
  return (
    <section id="legal" className="py-12 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-gray-800 border border-yellow-500/50 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
                <WarningIcon />
            </div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Aviso Legal Importante</h3>
          <div className="text-sm text-gray-400 space-y-3">
            <p>
              O Oráculo da Sorte <strong>não garante ganhos ou acertos.</strong>
            </p>
            <p>
              Os resultados são baseados em probabilidade, estatística e análise matemática — e <strong>não representam garantia de prêmios.</strong>
            </p>
            <p>
              O objetivo da ferramenta é oferecer mais estratégia e otimizar suas escolhas, <strong>não prometer resultados.</strong> Jogue com responsabilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
