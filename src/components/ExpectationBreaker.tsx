import React, { useEffect, useRef } from 'react';
import { ThumbsDown, CreditCard } from 'lucide-react';

const ExpectationBreaker: React.FC = () => {
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
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#161616] opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="bg-[#1f1f1f] rounded-full p-4 mb-6">
              <ThumbsDown size={32} className="text-[#a2db26]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 max-w-sm">
              "Curtidas não pagam suas contas!"
            </h3>
            <div className="w-20 h-1 bg-[#a2db26] rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-sm">
              Marketing sem conversão é gasto, não investimento. Focamos em métricas que realmente importam para o seu negócio.
            </p>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="bg-[#1f1f1f] rounded-full p-4 mb-6">
              <CreditCard size={32} className="text-[#a2db26]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 max-w-sm">
              "Vendas pagam suas contas. Nós cuidamos disso."
            </h3>
            <div className="w-20 h-1 bg-[#a2db26] rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-sm">
              Convertemos interesse em receita com estratégias comprovadas de smarketing integrado que realmente funcionam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectationBreaker;