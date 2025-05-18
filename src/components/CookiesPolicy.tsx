import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const CookiesPolicy: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">O que são cookies?</h2>
                <p className="text-gray-300 leading-relaxed">
                  Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Como usamos os cookies?</h2>
                <p className="text-gray-300 leading-relaxed">
                  Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados
                  para fornecer um serviço que você usa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Desativar cookies</h2>
                <p className="text-gray-300 leading-relaxed">
                  Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Cookies que definimos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Cookies relacionados à conta</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Se você criar uma conta conosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Cookies relacionados ao login</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Cookies relacionados a boletins por e-mail</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados
                      para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Pedidos processando cookies relacionados</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Cookies relacionados a pesquisas</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Cookies relacionados a formulários</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Cookies de preferências do site</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Cookies de Terceiros</h2>
                <p className="text-gray-300 leading-relaxed">
                  Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-4 mt-4">
                  <li>
                    Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis
                    da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.
                  </li>
                  <li>
                    As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.
                  </li>
                  <li>
                    O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Compromisso do Usuário</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a RCW Company oferece no site e com caráter enunciativo, mas não limitativo:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                  <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                  <li>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da RCW Company, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#a2db26]">Mais informações</h2>
                <p className="text-gray-300 leading-relaxed">
                  Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Esta política é efetiva a partir de 18 outubro 2022
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

export default CookiesPolicy;