
import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Termos de Uso', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Aviso Legal', href: '#legal' },
    { name: 'Suporte', href: '#' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-lg font-bold text-white">Oráculo da Sorte</p>
            <p className="text-sm text-gray-500">
              © {currentYear} Oráculo da Sorte. Todos os direitos reservados.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center space-x-4">
            {footerLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
