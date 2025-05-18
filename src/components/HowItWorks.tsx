import React, { useEffect, useRef } from 'react';
import { 
  Target, 
  Zap, 
  BarChart4, 
  TrendingUp, 
  Repeat, 
  Users
} from 'lucide-react';

const HowItWorks: React.FC = () => {
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
      id="como-funciona"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#111111] opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="bg-[#a2db26]/10 text-[#a2db26] px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            COMO FUNCIONA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O <span className="text-[#a2db26]">Método RCW</span> para acelerar seu crescimento
          </h2>
          <p className="text-gray-300 text-lg">
            Nossa abordagem exclusiva combina estratégias de Smarketing e Growth para criar um sistema completo de geração de demanda e conversão.
          </p>
        </div>

        <div className="relative">
          {/* Desktop timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#2a2a2a] -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10">
            {[
              {
                icon: <Target className="text-[#a2db26]" size={28} />,
                title: "Diagnóstico Estratégico",
                description: "Análise completa do seu negócio, mercado e concorrência para identificar oportunidades."
              },
              {
                icon: <Zap className="text-[#a2db26]" size={28} />,
                title: "Planejamento RCW",
                description: "Desenvolvimento de um plano personalizado com KPIs claros e metas de crescimento."
              },
              {
                icon: <BarChart4 className="text-[#a2db26]" size={28} />,
                title: "Implementação Técnica",
                description: "Execução de estratégias de marketing digital, automação e qualificação de leads."
              },
              {
                icon: <Users className="text-[#a2db26]" size={28} />,
                title: "Smarketing Integrado",
                description: "Alinhamento entre as equipes de marketing e vendas para um processo sem atritos."
              },
              {
                icon: <TrendingUp className="text-[#a2db26]" size={28} />,
                title: "Otimização Contínua",
                description: "Análise de resultados e refinamento constante para maximizar o ROI."
              },
              {
                icon: <Repeat className="text-[#a2db26]" size={28} />,
                title: "Escala e Expansão",
                description: "Ampliação das estratégias bem-sucedidas para novos canais e mercados."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center md:items-start mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`bg-[#1a1a1a] p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#a2db26]/10 hover:bg-[#1f1f1f] ${
                    index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                  }`}>
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <div className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center mr-4 md:mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-10 h-10 rounded-full bg-[#a2db26] flex items-center justify-center text-[#111111] font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="w-full md:w-5/12 md:invisible"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-[#1a1a1a] rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Vantagens do Smarketing:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Equilíbrio entre marketing e vendas",
                description: "Alinhamento perfeito entre atração e conversão para maximizar resultados."
              },
              {
                title: "Alinhamento de personas",
                description: "Entendimento compartilhado de quem são seus clientes ideais e como atendê-los."
              },
              {
                title: "Processos colaborativos",
                description: "Segundo a Queens University of Charlotte, 75% dos funcionários consideram o trabalho colaborativo essencial."
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-[#a2db26] pl-4">
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;