import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <div className="text-2xl font-bold text-white">
          <a href="#home">Oráculo da Sorte</a>
        </div>
      </div>
    </header>
  );
};

export default Header;