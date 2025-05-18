import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0f0f0f] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              A principal empresa de marketing e vendas do Brasil. Transformamos estratégias em resultados.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <Instagram size={20} />, link: "https://www.instagram.com/rcwcompany/" },
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/company/rcwcompany" },
                { icon: <Youtube size={20} />, link: "https://www.youtube.com/channel/UC0E7AkLcq3shWMmEXwUYgpw" },
                { icon: <Facebook size={20} />, link: "https://www.facebook.com/rcwcompany" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-[#a2db26] hover:bg-[#1f1f1f] transition-all duration-300"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {["Sobre nós", "Equipe", "Carreiras", "Parceiros", "Blog"].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#a2db26] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {["Marketing Digital", "Automação de Vendas", "Growth Hacking", "Análise de Dados", "Consultoria"].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#a2db26] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong> contato@rcwcompany.com.br
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Telefone:</strong> (11) 4002-8922
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Endereço:</strong> Av. Paulista, 1000, São Paulo - SP
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2a2a2a] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2013 - {currentYear} RCW Company. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              {["Política de Privacidade", "Cookies", "Termos de Uso"].map((item, index) => (
                <a 
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#a2db26] text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;