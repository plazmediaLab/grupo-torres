import Link from 'next/link';
import MenuAccordion from './menu-accordion';
import MenuButtons from './menu-buttons';
import MenuIcon from './menu-icon';

export default function HeaderMain() {
  return (
    <header className="bg-gray-200 px-3 py-2 sm:p-0 top-0 right-0 fixed sm:relative w-full">
      <section className="container mx-auto grid gap-x-4 justify-items-start items-center bg-gray-400">
        <div className="flex items-center flex-col sm:flex-row">
          <Link href="/home">
            <a>
              <img src="/isologo-color.svg" alt="Grupo Torres Logo" className="logo" />
            </a>
          </Link>
        </div>
        <button className="sm:hidden bg-blue-400 p-3">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <nav className="nav-hidden col-span-2 sm:col-span-1 w-full sm:space-x-4 flex-col sm:flex-row justify-items-start">
          <ul className="flex flex-col sm:flex-row mt-2 sm:mt-0">
            <MenuAccordion title="Página principals">
              <MenuIcon label="Inicio">
                <svg
                  className="w-6 h-6 inline-block lg:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </MenuIcon>
            </MenuAccordion>
            <MenuAccordion title="Propiedades en venta" link={false}>
              <MenuIcon label="Propiedades">
                <svg
                  className="w-6 h-6 inline-block lg:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </MenuIcon>
            </MenuAccordion>
            <MenuAccordion title="Nuestros ervicios" link={false}>
              <MenuIcon label="Servicios">
                <svg
                  className="w-6 h-6 inline-block lg:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clipRule="evenodd"
                  />
                </svg>
              </MenuIcon>
            </MenuAccordion>
            <MenuAccordion title="Contactanos">
              <MenuIcon label="Contactanos">
                <svg
                  className="w-6 h-6 inline-block lg:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </MenuIcon>
            </MenuAccordion>
          </ul>
          <MenuButtons />
        </nav>
      </section>
      <style jsx>{`
        img.logo {
          min-width: 13rem !important;
        }
        nav.nav-hidden {
          display: none;
        }
        section {
          grid-template-columns: 1fr auto;
        }
        @media (min-width: 640px) {
          nav.nav-hidden {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
