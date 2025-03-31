import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-24 p-11 pb-0 lg:px-36 lg:py-0">
      <div className="flex flex-col text-center lg:text-start gap-10 font-inter">
        <h1 className="text-text-headings font-black text-3xl lg:text-4xl">
          Prazer, sou <span className="text-brand-color">Jhow Tattoos</span>
        </h1>
        <div className="flex flex-col gap-6 text-text-typography font-light text-base max-w-xl mx-auto lg:mx-0">
          <p>
            Seja bem-vindo(a) ao Jhow Tattoos! Com mais de 10 anos de experiência no universo da tatuagem, meu objetivo é transformar suas emoções em arte. Cada tatuagem que faço é uma representação única de quem você é, refletindo tudo o que você ama.
          </p>
          <p>
            O processo de criação de cada tatuagem é uma verdadeira colaboração. Ouço atentamente as histórias e desejos dos meus clientes, garantindo que cada peça seja exclusiva, pessoal e carregada de significado. Tenho experiência em diversos estilos, desde os traços finos e delicados até as composições mais robustas e coloridas, sempre buscando superar suas expectativas.
          </p>
          <p>
            Em meu estúdio, a segurança e o conforto são essenciais. Utilizo apenas equipamentos esterilizados e de alta qualidade, seguindo todos os protocolos de higiene, para garantir que você tenha uma experiência segura, confortável e sem preocupações.
          </p>
        </div>
        <p className="font-island text-4xl text-center lg:text-start">Jhow Tattoos</p>
      </div>

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
    </section>
  );
}
