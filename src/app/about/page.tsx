import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-24 p-11 pb-0 lg:px-36 lg:py-0">
      {/* Texto sobre o tatuador */}
      <div className="flex flex-col text-center lg:text-start gap-10 font-inter">
        <h1 className="text-text-headings font-black text-3xl lg:text-4xl">
          Prazer, sou <span className="text-brand-color">Jhow Tattoos</span>
        </h1>
        <div className="flex flex-col gap-6 text-text-typography font-light text-base max-w-xl mx-auto lg:mx-0">
          <p>
            Bem-vindo(a) ao Jhow Tattoos! Com mais de 10 anos de experiência no universo da tatuagem, meu objetivo é transformar suas emoções em arte. Cada tatuagem que crio é uma representação única de quem você é, refletindo seus valores e paixões.
          </p>
          <p>
            O processo de criação de uma tatuagem é uma verdadeira colaboração. Escuto atentamente as histórias e desejos dos meus clientes para garantir que cada peça seja exclusiva e pessoal. Desde traços delicados até composições robustas e coloridas, sempre busco superar suas expectativas.
          </p>
          <p>
            No meu estúdio, a segurança e o conforto vêm em primeiro lugar. Utilizo apenas equipamentos esterilizados e de alta qualidade, seguindo rigorosos protocolos de higiene para garantir uma experiência segura e tranquila.
          </p>
        </div>
        <p className="font-island text-4xl text-center lg:text-start">Jhow Tattoos</p>
      </div>

      {/* Imagens de perfil (responsivas) */}
      <div className="flex gap-10">
        {/* Imagem para telas pequenas */}
        <Image
          src="/Image 2.svg"
          width={430}
          height={541}
          alt="Foto do tatuador Jhow Tattoos"
          className="lg:hidden"
        />

        {/* Imagem para telas grandes */}
        <Image
          src="/Portrait-1.svg"
          width={365}
          height={796}
          alt="Foto do tatuador Jhow Tattoos"
          className="hidden lg:block -mb-14 z-10"
        />
      </div>
    </section>
  );
}
