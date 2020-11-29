import HeaderButtonActions from './header-button-actions';
import HeaderNavMenuItem from './header-nav-menu_item';

export default function HeaderNavMenu() {
  return (
    <nav
      id="menu-toggle"
      className="hidden sm:flex col-span-2 sm:col-span-1 w-full flex-col sm:flex-row mt-2 sm:my-0">
      <HeaderNavMenuItem label="Inicio" title="Página principal">
        <svg
          className="w-5 h-5 inline-block mr-2 lg:hidden"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </HeaderNavMenuItem>
      <HeaderNavMenuItem label="Servicios" title="Nuestros servicios" link={false}>
        <svg
          className="w-5 h-5 inline-block mr-2 lg:hidden"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      </HeaderNavMenuItem>
      <HeaderNavMenuItem label="Propiedades" title="Nuestras propiedades en venta" link={false}>
        <svg
          className="w-5 h-5 inline-block mr-2 lg:hidden"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
            clipRule="evenodd"
          />
        </svg>
      </HeaderNavMenuItem>
      <HeaderNavMenuItem label="Contactanos" title="Contactanos">
        <svg
          className="w-5 h-5 inline-block mr-2 lg:hidden"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </HeaderNavMenuItem>
      <HeaderButtonActions />
    </nav>
  );
}
