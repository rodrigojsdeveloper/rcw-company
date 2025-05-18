import React, { useEffect, useRef } from 'react';

const clientImages = [
  'magazord.png',
  'weget2u.png',
  'lojaintegrada.png',
  'pgbsecurity.png',
  'usina.png',
  'mobye.png',
  'enkoberta.png',
  'beraca.png',
  'grafsystem.png',
  'versuo.png',
  'systeminformatica.png',
  'colegiofaraos.png',
];

const Partners: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);  

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-[#161616] opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Quem está com a gente é nosso <span className="text-[#a2db26]">Parceiro</span>
          </h2>
          <p className="text-gray-400">
            Empresas que confiaram no Método RCW e transformaram seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clientImages.map((image, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] h-20 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#1f1f1f] opacity-70 hover:opacity-100 p-2"
            >
              <img
                src={`/clients/${image}`}
                alt={`Logo cliente ${index + 1}`}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
