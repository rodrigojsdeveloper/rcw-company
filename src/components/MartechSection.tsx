import React, { useEffect, useRef } from 'react';
import { BarChart3, TrendingUp, Target, Users } from 'lucide-react';

const MartechSection: React.FC = () => {
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
      id="metodo-rcw"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#111111] opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="bg-[#a2db26]/10 text-[#a2db26] px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            SOMOS UMA MARTECH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Marketing e Tecnologia unidos para <span className="text-[#a2db26]">maximizar suas vendas</span>
          </h2>
          <p className="text-gray-300 text-lg">
            A RCW Company combina estratégias avançadas de marketing com tecnologia de ponta para criar soluções que efetivamente aumentam sua receita. Não apenas atraímos leads - nós convertemos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              icon: <BarChart3 size={32} className="text-[#a2db26]" />,
              title: "Decisões baseadas em dados",
              description: "Analisamos métricas reais e indicadores de performance para otimizar constantemente suas campanhas."
            },
            {
              icon: <TrendingUp size={32} className="text-[#a2db26]" />,
              title: "Growth-driven",
              description: "Aplicamos metodologias comprovadas de Growth Marketing para impulsionar seu crescimento de forma sustentável."
            },
            {
              icon: <Target size={32} className="text-[#a2db26]" />,
              title: "Estratégias personalizadas",
              description: "Cada negócio é único. Desenvolvemos soluções exclusivas com base nos objetivos e desafios específicos da sua empresa."
            },
            {
              icon: <Users size={32} className="text-[#a2db26]" />,
              title: "Smarketing integrado",
              description: "Alinhamos as equipes de vendas e marketing para criar uma máquina de crescimento consistente e escalável."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-xl transition-all duration-300 hover:bg-[#1f1f1f] hover:shadow-lg hover:shadow-[#a2db26]/5"
            >
              <div className="bg-[#252525] rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1f1f1f] to-[#252525] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "97%", description: "Taxa de satisfação dos clientes" },
              { stat: "30M+", description: "Em receita gerada para clientes" },
              { stat: "250K+", description: "Leads gerados em 2023" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-gray-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MartechSection;