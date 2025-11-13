
import React from 'react';
import type { Testimonial, FeatureItem } from './types';

// Icons for Benefits
const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CalculatorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-6m-3 6h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 17h.01M15 17h.01M9 10h.01M12 10h.01M15 10h.01M3 7h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z" />
  </svg>
);

const TrendingUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a5.002 5.002 0 019 0m0 0a5 5 0 00-9 0m9 0a5.002 5.002 0 01-4.5 4.95M7 16a5 5 0 00-4.5 4.95m0 0a5.002 5.002 0 014.5-4.95m0 0a5 5 0 019 0" />
    </svg>
);

const CashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const TargetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12"cy="12" r="2" />
    </svg>
);


// Feature: What is it?
export const whatIsItems: FeatureItem[] = [
    { icon: <ChartBarIcon />, title: "Gerador Inteligente", description: "Um site gerador de números inteligentes para os principais jogos da Caixa." },
    { icon: <CalculatorIcon />, title: "Análise Matemática", description: "Baseado em análise matemática, padrões, estatísticas, recorrências e probabilidade." },
    { icon: <UserGroupIcon />, title: "Bolões e Simulações", description: "Gera números, bolões e simula valores reais das apostas para você ter controle total." }
];

// Feature: How it works
export const howItWorksItems: FeatureItem[] = [
    { icon: <div className="text-3xl font-bold text-green-400">1</div>, title: "Acesse o Gerador", description: "Faça login e acesse nossa plataforma intuitiva a qualquer hora e de qualquer lugar." },
    { icon: <div className="text-3xl font-bold text-green-400">2</div>, title: "Escolha o Jogo", description: "Selecione o jogo desejado: Mega-Sena, Lotofácil, Quina, e outros." },
    { icon: <div className="text-3xl font-bold text-green-400">3</div>, title: "Gere Seus Números", description: "Com um clique, nosso algoritmo gera combinações otimizadas para você." },
    { icon: <div className="text-3xl font-bold text-green-400">4</div>, title: "Confira e Salve", description: "Veja o valor real da aposta, salve, copie ou use para montar seu comprovante." },
];

// Feature: Benefits
export const benefitsItems: FeatureItem[] = [
  { icon: <ChartBarIcon />, title: "Base Estatística Avançada", description: "Nossos algoritmos analisam dados históricos para encontrar os padrões mais promissores." },
  { icon: <CalculatorIcon />, title: "Números Mais Inteligentes", description: "Deixe de lado os palpites aleatórios e comece a usar números com fundamento." },
  { icon: <TrendingUpIcon />, title: "Probabilidade Otimizada", description: "Aumente suas chances em comparação com jogos feitos de forma aleatória." },
  { icon: <UserGroupIcon />, title: "Geração Instantânea de Bolões", description: "Crie bolões estratégicos com amigos e família de forma rápida e fácil." },
  { icon: <CashIcon />, title: "Visualização do Valor Real", description: "Saiba exatamente quanto vai custar sua aposta antes de ir à lotérica." },
  { icon: <TargetIcon />, title: "Estratégia > Sorte Pura", description: "Jogue com a cabeça, usando a matemática a seu favor para ir além da sorte." },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    quote: 'Parecia só mais um gerador, mas realmente dá para ver que os números seguem padrões. A interface é limpa e fácil de usar.',
    name: 'Carlos Almeida',
    role: 'Usuário Verificado',
  },
  {
    quote: 'Muito mais confiável do que ficar jogando no chute ou em datas de aniversário. Sinto que estou jogando de forma mais séria agora.',
    name: 'Juliana Ribeiro',
    role: 'Apostadora Entusiasta',
  },
  {
    quote: 'O que mais gostei foi o gerador de bolões! Facilitou muito a organização com meu grupo de amigos. Recomendo!',
    name: 'Marcos Andrade',
    role: 'Organizador de Bolões',
  },
];