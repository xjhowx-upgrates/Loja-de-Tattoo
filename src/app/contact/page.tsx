import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="flex flex-col xl:flex-row items-center justify-between gap-24 p-11 xl:px-36 xl:pb-44">
      <div className="flex flex-col text-center items-center xl:items-start xl:text-start gap-10 font-inter">
        <h1 className="text-text-headings font-black text-3xl">
          Entre em <span className="text-brand-color">Contato</span>
        </h1>
        <p className="flex flex-col gap-4 text-text-typography font-light text-base">
          Clique no botão abaixo e envie uma mensagem. Vamos conversar!
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

      <Image
        src="/Imagem.svg"
        width={550}
        height={504}
        alt="Foto do tatuador Jhow Tattoos"
        className="hidden xl:block"
      />
    </section>
  );
}
