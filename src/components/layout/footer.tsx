import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const mensagemPersonalizada = "Olá! Gostaria de fazer um orçamento sem compromisso, por favor...";

  return (
    <footer className="bg-footer-background font-inter text-[10px] lg:text-xs text-text-muted flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 h-auto lg:h-14 px-8 py-3.5 lg:px-36">
      {/* Informações do Estúdio */}
      <div className="flex flex-col items-center lg:items-start">
        <p className="hidden lg:block">Jhow Tattoos</p>
        <div className="hidden lg:block w-1.5 h-1.5 bg-brand-color rounded-full border border-black mb-2 lg:mb-0" />
        <p className="hidden lg:block">Av. Presidente Getúlio Vargas, Morro dos Barbosas - São Vicente/SP</p>
      </div>
      
      {/* WhatsApp Link */}
      <div className="flex items-center gap-2">
        <FaWhatsapp aria-label="Ícone do WhatsApp" className="text-brand-color" />
        <a 
          href={`https://wa.me/5513970707070?text=${encodeURIComponent(mensagemPersonalizada)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-color hover:text-text-headings transition-colors duration-200"
          aria-label="Clique para enviar uma mensagem via WhatsApp"
        >
          Clique aqui para orçamento
        </a>
      </div>
    </footer>
  );
}
