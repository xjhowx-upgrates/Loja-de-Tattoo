import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="font-londrina-solid text-text-headings text-3xl flex flex-col gap-5 lg:items-center justify-between px-12 py-10 lg:px-36 lg:py-16 lg:flex-row lg:gap-0">
      <Link href="/" className="leading-none">
        <p>
        Jhow <span className="text-brand-color">Tattoos</span>
        </p>
        <p>Pinturas</p>
        <p>Graffiti</p>
      </Link>

      <nav>
        <ul className="flex gap-4 text-lg lg:text-3xl">
          <li>
            <Link href="/services" className="hover:underline">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contato
            </Link>
            <p className="hidden text-xs text-text-muted lg:flex items-center gap-1">
              <FaWhatsapp /> +55 (13) 97070-9999
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
