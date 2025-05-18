import React, { useState, useEffect } from 'react';
import { Menu, X, CornerUpRight } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#111111]/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Início', path: '#inicio' },
              { label: 'Método RCW', path: '#metodo-rcw' },
              { label: 'Como Funciona', path: '#como-funciona' },
              { label: 'Contato', path: '#contato' }
            ].map(({ label, path }) => (
              <a
                key={label}
                href={path}
                className="text-white hover:text-[#a2db26] transition-colors duration-300 font-medium"
              >
                {label}
              </a>
            ))}
            <a 
              href="https://typebot.io/geral"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a2db26] hover:bg-[#b3ec37] text-[#111111] font-semibold px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <span>Fale Conosco</span>
              <CornerUpRight size={16} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-[#111111]/95 transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-6 shadow-xl opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-4">
            {[
              { label: 'Início', path: '#inicio' },
              { label: 'Método RCW', path: '#metodo-rcw' },
              { label: 'Como Funciona', path: '#como-funciona' },
              { label: 'Contato', path: '#contato' }
            ].map(({ label, path }) => (
              <a 
                key={label} 
                href={path}
                className="text-white hover:text-[#a2db26] transition-colors duration-300 py-2 font-medium border-b border-[#333333]"
                onClick={toggleMenu}
              >
                {label}
              </a>
            ))}
            <a 
              href="https://typebot.io/geral"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a2db26] hover:bg-[#b3ec37] text-[#111111] font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 mt-4"
            >
              <span>Fale Conosco</span>
              <CornerUpRight size={16} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;