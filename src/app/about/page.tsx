import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-24 p-11 pb-0 lg:px-36 lg:py-0">
      <div className="flex flex-col text-center lg:text-start gap-10 font-inter">
        <h1 className="text-text-headings font-black text-3xl">
          Prazer, sou <span className="text-brand-color">Jhow Tattoos</span>
        </h1>
        <div className="flex flex-col gap-4 text-text-typography font-light text-base">
        <p>
        Seja bem-vindo(a) ao site Jhow Tattoos! Com mais de 10 anos de experiência no universo da tatuagem, minha missão é transformar suas emoções e visões em arte corporal que reflete quem você é e tudo o que você ama.
        </p>
        <p>
        Cada tatuagem realizada em meu estúdio é um verdadeiro trabalho de colaboração. 
        Ouço atentamente as histórias e desejos de cada cliente, garantindo que cada peça seja única, pessoal e repleta de significado. Tenho experiência em diversos estilos, desde os traços finos e delicados até as composições mais robustas e coloridas, sempre com o objetivo de não apenas atender, mas superar suas expectativas.
        </p>
        <p>
        Além de minha dedicação à arte, a segurança e o conforto são prioridades absolutas em meu estúdio. 
        Utilizo apenas equipamentos esterilizados e de alta qualidade, e sigo rigorosamente todos os protocolos de higiene e segurança, proporcionando uma experiência segura, confortável e tranquila para cada um dos meus clientes.
        </p>
        </div>
        <p className="font-island text-4xl">Jhow Tattoos</p>
        </div>

        <Image
        src="/Image 2.svg"
        width={430}
        height={541}
        alt="Foto do tatuador Jhow Tattoos"
        className="lg:hidden"
        />

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
