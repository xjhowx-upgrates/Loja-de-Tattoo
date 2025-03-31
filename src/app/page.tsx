import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="hidden lg:block">
        <p className="absolute left-14 font-londrina-solid text-[325px] text-[#212121] -z-10">TATTOO</p>
      </div>

      <div className="flex justify-end mr-0 lg:justify-between items-center font-inter font-black text-[40px] lg:text-7xl text-text-muted ml-9 lg:mx-36">
        <div className="absolute left-12 lg:static lg:left-0">
          <p>EXPRESSE-SE</p> 
          <p>INSPIRE-SE</p>
          <p className="text-brand-color">E TATUE-SE</p>
        </div>
        <Image 
          src="/Portrait-mobile.svg"
          width={262}
          height={750}
          alt="Foto do tatuador Jhow Tattoos"
          className="lg:hidden -z-10"
        />
        <Image 
          src="/Portrait.svg"
          width={365}
          height={796}
          alt="Foto do tatuador Jhow Tattoos"
          className="hidden lg:block -mb-14 z-10"
        />
      </div>
    </section>
  );
}
