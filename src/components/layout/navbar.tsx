import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="font-londrina-solid text-text-headings text-3xl flex flex-col gap-5 lg:items-center justify-between px-12 py-10 lg:px-36 lg:py-16 lg:flex-row lg:gap-0">
      <Link href="/" className="leading-none">
        <p>
          Jhow <span className="text-brand-color">Tattoos</span>
        </p>
      </Link>

      <nav>
        <ul className="flex flex-col lg:flex-row gap-4 text-lg lg:text-3xl items-center lg:items-center">
          <li>
            <Link href="/services" className="hover:underline transition-all duration-300">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline transition-all duration-300">
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline transition-all duration-300">
              Contato
            </Link>
            {/* Exibição condicional do texto */}
            <p className="hidden text-xs text-text-muted lg:flex items-center gap-1 mt-2 lg:mt-0">
              <FaWhatsapp aria-hidden="true" /> Faça seu orçamento sem compromisso!
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
