import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 md:py-20 bg-[#161616] opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#222222] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quer descobrir como <span className="text-[#a2db26]">aumentar suas Vendas?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Receba uma Avaliação Gratuita do seu Negócio e descubra oportunidades inexploradas de crescimento.
              </p>
              
              <a 
                href="https://typebot.io/geral"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-[#a2db26] hover:bg-[#b3ec37] text-[#111111] font-bold px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Fale com um Especialista</span>
                <ArrowRight size={20} />
              </a>
            </div>
            
            <div className="w-full md:w-5/12 bg-[#1d1d1d] p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <div className="text-[#a2db26] text-lg font-semibold mb-2">O QUE VOCÊ RECEBERÁ:</div>
                <ul className="space-y-4">
                  {[
                    "Análise completa da sua presença digital",
                    "Identificação de gargalos no seu funil de vendas",
                    "Comparativo com concorrentes do seu segmento",
                    "Estratégias personalizadas para seu negócio",
                    "Projeção de resultados com o Método RCW"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#a2db26] mr-2">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-[#252525] rounded-xl">
                <div className="italic text-gray-300 mb-4">
                  "A estratégia da RCW Company aumentou nossas conversões em 32% no primeiro trimestre. O ROI foi impressionante."
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center mr-3">
                    M
                  </div>
                  <div>
                    <div className="font-medium">Marcos Silva</div>
                    <div className="text-sm text-gray-400">CEO, TechSolutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;