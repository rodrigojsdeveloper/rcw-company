import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
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
    <section 
      id="inicio" 
      ref={sectionRef}
      className="pt-32 pb-20 md:pt-40 md:pb-32 opacity-0 transition-opacity duration-1000 bg-gradient-to-b from-[#1a1a1a] to-[#111111]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A principal empresa de <span className="text-[#a2db26]">Marketing e Vendas</span> do Brasil
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Descubra o <span className="font-semibold">Método RCW</span> e aumente <span className="text-[#a2db26] font-bold">+ de 20%</span> da sua Receita
          </p>
          
          <a 
            href="https://typebot.io/geral"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#a2db26] hover:bg-[#b3ec37] text-[#111111] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 items-center space-x-3"
          >
            <span>Solicitar Contato</span>
            <ArrowRight size={20} className="animate-pulse" />
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '500+', text: 'Empresas Atendidas' },
            { number: '94%', text: 'Taxa de Retenção' },
            { number: '20%+', text: 'Aumento em Receita' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#1a1a1a] p-6 rounded-lg text-center transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-[#a2db26]/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#a2db26] mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;