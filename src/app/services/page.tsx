import Card from "@/components/card/card";

export default function Services() {
  return (
    <section className="font-inter px-16 py-11 lg:px-36 lg:pb-48 flex flex-col items-center lg:items-start gap-20">
      <h1 className="font-black text-brand-color text-3xl lg:text-4xl text-center lg:text-left">
        Nossos <span className="text-black">Serviços</span>
      </h1>
      <p className="text-text-typography text-base max-w-4xl text-center lg:text-left">
        No Jhow Tattoos, oferecemos uma ampla gama de serviços para atender às suas necessidades, seja você um cliente em busca de uma tatuagem única, ou alguém precisando restaurar ou cobrir uma tatuagem antiga. Estamos aqui para transformar suas ideias em arte.
      </p>
      <div className="flex flex-col lg:flex-row gap-14 justify-center lg:justify-start">
        <Card 
          title="Tatuagens Personalizadas" 
          description="Criamos tatuagens exclusivas, feitas sob medida, onde trabalhamos lado a lado com você para transformar sua ideia em uma obra de arte única, refletindo sua personalidade e emoções." 
        />
        <Card 
          title="Restauração" 
          description="Se sua tatuagem perdeu a definição ou desbotou com o tempo, nossa restauração traz de volta a intensidade das cores e contornos, revivendo a arte como no primeiro dia." 
        />
        <Card 
          title="Cover-Up" 
          description="Transforme uma tatuagem antiga ou indesejada em uma nova obra de arte. Nosso serviço de cover-up é especializado em criar designs originais, reformulando a tatuagem de forma criativa e significativa." 
        />
        <Card 
          title="Henna" 
          description="Experimente tatuagens temporárias de alta qualidade com henna. Ideal para quem quer testar um design antes de se comprometer, ou para quem deseja algo temporário, com durabilidade de semanas a meses." 
        />
      </div>
    </section>
  );
}
