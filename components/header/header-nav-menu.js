import Link from 'next/link';

export default function HeaderNavMenu() {
  return (
    <nav
      id="menu-toggle"
      className="hidden sm:flex col-span-2 sm:col-span-1 w-full flex-col sm:flex-row my-2 sm:my-0">
      <Link href="/home">
        <a className="block bg-blue-300 p-2 sm:py-4 sm:px-3 hover:bg-secondary-darkest hover:text-white">
          Inicio
        </a>
      </Link>
      <Link href="/services">
        <a className="block bg-blue-300 p-2 sm:py-4 sm:px-3 hover:bg-secondary-darkest hover:text-white">
          Servicios
        </a>
      </Link>
      <Link href="/properties">
        <a className="block bg-blue-300 p-2 sm:py-4 sm:px-3 hover:bg-secondary-darkest hover:text-white">
          Propiedades
        </a>
      </Link>
      <Link href="/contact-us">
        <a className="block bg-blue-300 p-2 sm:py-4 sm:px-3 hover:bg-secondary-darkest hover:text-white">
          Contactanos
        </a>
      </Link>
    </nav>
  );
}
