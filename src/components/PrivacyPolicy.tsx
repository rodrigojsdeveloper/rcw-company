import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);  

  return (
    <div className="bg-[#111111] text-white min-h-screen font-sans">
      <Header />
      <main className="pt-32 pb-20">
        <div
          ref={sectionRef}
          className="container mx-auto px-4 lg:px-8 opacity-0 transition-opacity duration-1000"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

            <div className="space-y-8">
              <section>
                <p className="text-gray-300 leading-relaxed">
                  A sua privacidade é importante para nós. É política da RCW Company respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site RCW Company, e outros sites que possuímos e operamos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Coleta de Informações</h2>
                <p className="text-gray-300 leading-relaxed">
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemos por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Retenção de Dados</h2>
                <p className="text-gray-300 leading-relaxed">
                  Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis
                  para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Compartilhamento de Dados</h2>
                <p className="text-gray-300 leading-relaxed">
                  Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Links Externos</h2>
                <p className="text-gray-300 leading-relaxed">
                  O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Seus Direitos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Aceitação</h2>
                <p className="text-gray-300 leading-relaxed">
                  O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;