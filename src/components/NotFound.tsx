import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const NotFound: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div className="bg-[#111111] text-white min-h-screen font-sans">
      <Header />
      <main className="pt-32 pb-20">
        <div
          ref={sectionRef}
          className="container mx-auto px-4 lg:px-8 opacity-0 transition-opacity duration-1000"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <AlertCircle size={64} className="text-[#a2db26] mx-auto" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              404
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Página não encontrada
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
            </p>

            <Link
              to="/"
              className="inline-flex items-center bg-[#a2db26] hover:bg-[#b3ec37] text-[#111111] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Home size={20} className="mr-2" />
              <span>Voltar para Home</span>
            </Link>

            <div className="mt-16 p-8 bg-[#1a1a1a] rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">
                Precisa de ajuda?
              </h3>
              <p className="text-gray-300 mb-6">
                Nossa equipe está disponível para auxiliar você a encontrar o que procura.
              </p>
              <a
                href="https://typebot.io/geral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a2db26] hover:text-[#b3ec37] font-semibold transition-colors duration-300"
              >
                Fale com um especialista →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;