import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="flex flex-col xl:flex-row items-center justify-between gap-24 p-11 xl:px-36 xl:pb-44">
      {/* Texto e Botão de Contato */}
      <div className="flex flex-col text-center items-center xl:items-start xl:text-start gap-10 font-inter">
        <h1 className="text-text-headings font-black text-3xl">
          Entre em <span className="text-brand-color">Contato</span>
        </h1>
<<<<<<< HEAD
        <p className="flex flex-col gap-4 text-text-typography font-light text-base">
          Clique no botão abaixo e envie uma mensagem. Vamos conversar!
=======
        <p className="text-text-typography font-light text-base max-w-lg mx-auto xl:mx-0">
          Tem alguma dúvida ou deseja fazer um orçamento? Clique no botão abaixo para falar diretamente no WhatsApp. Estamos à disposição para ajudar!
>>>>>>> 0df84eca962b136a3072a8739f955c712f7306cc
        </p>

        <div className="flex items-center gap-7 p-5 bg-text-muted rounded-lg w-64 border-b-4 border-background-color hover:cursor-pointer">
          <FaWhatsapp className="text-text-headings text-4xl" />
          <div className="flex flex-col">
            <p className="text-text-headings font-medium text-lg">
              Enviar Whatsapp
            </p>
            <p className="text-text-typography text-xs">(+55 13) 97070 7070</p>
          </div>
        </div>
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
