import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const mensagemPersonalizada = "Olá! Gostaria de fazer um orçamento sem compromisso, por favor...";

  return (
    <section className="flex flex-col xl:flex-row items-center justify-between gap-24 p-11 xl:px-36 xl:pb-44">
      {/* Texto e Botão de Contato */}
      <div className="flex flex-col text-center items-center xl:items-start xl:text-start gap-10 font-inter">
        <h1 className="text-text-headings font-black text-3xl">
          Entre em <span className="text-brand-color">Contato</span>
        </h1>
        <p className="text-text-typography font-light text-base max-w-lg mx-auto xl:mx-0">
          Tem alguma dúvida ou deseja fazer um orçamento? Clique no botão abaixo para falar diretamente no WhatsApp. Estamos à disposição para ajudar!
        </p>

        <a
          href={`https://wa.me/5513970707070?text=${encodeURIComponent(mensagemPersonalizada)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-7 p-5 bg-brand-color rounded-lg w-64 border-b-4 border-background-color hover:cursor-pointer transition-all duration-300 hover:bg-opacity-80">
            <FaWhatsapp className="text-white text-4xl" />
            <div className="flex flex-col">
              <p className="text-white font-medium text-lg">
                Fale conosco no WhatsApp
              </p>
              <p className="text-text-typography text-xs">(+55 13) 97070 7070</p>
            </div>
          </div>
        </a>
      </div>

      {/* Imagem de contato - visível apenas em telas maiores */}
      <Image
        src="/Imagem.svg"
        width={550}
        height={504}
        alt="Foto do tatuador Jhow Tattoos, com o intuito de personalizar o atendimento de tatuagem"
        className="hidden xl:block"
      />
    </section>
  );
}
