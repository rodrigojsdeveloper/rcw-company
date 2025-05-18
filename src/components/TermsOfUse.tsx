import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsOfUse: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">1. Termos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Ao acessar ao site RCW Company, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis
                  e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">2. Uso de Licença</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site RCW Company, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>modificar ou copiar os materiais;</li>
                  <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                  <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site RCW Company;</li>
                  <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
                  <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">3. Isenção de responsabilidade</h2>
                <p className="text-gray-300 leading-relaxed">
                  Os materiais no site da RCW Company são fornecidos 'como estão'. RCW Company não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">4. Limitações</h2>
                <p className="text-gray-300 leading-relaxed">
                  Em nenhum caso a RCW Company ou seus fornecedores serão responsáveis
                  por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em RCW Company, mesmo que a RCW Company ou um representante autorizado da RCW Company tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">5. Precisão dos materiais</h2>
                <p className="text-gray-300 leading-relaxed">
                  Os materiais exibidos no site da RCW Company podem incluir erros técnicos, tipográficos ou fotográficos. RCW Company não garante que qualquer material em seu site seja preciso, completo ou atual. RCW Company pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, RCW Company não se compromete a atualizar os materiais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">6. Links</h2>
                <p className="text-gray-300 leading-relaxed">
                  A RCW Company não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por RCW Company do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Modificações</h2>
                <p className="text-gray-300 leading-relaxed">
                  A RCW Company pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Lei aplicável</h2>
                <p className="text-gray-300 leading-relaxed">
                  Estes termos e condições são regidos e interpretados de acordo com as leis da RCW Company e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
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

export default TermsOfUse;