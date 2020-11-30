import HeaderLogo from './header-logo';
import HeaderNavMenu from './header-nav-menu';
import HeaderToggleButton from './header-toggle-button';

export default function HeaderMain() {
  return (
    <header
      id="header-main-container"
      className="bg-white right-0 top-0 fixed sm:relative w-full z-10 text-body tracking-wider">
      <section className="bg-white container p-2 sm:p-0 mx-auto grid gap-x-4 justify-items-start items-center">
        <HeaderLogo />
        <HeaderToggleButton />
        <HeaderNavMenu />
      </section>
      <style jsx>{`
        section {
          grid-template-columns: 1fr auto;
        }
      `}</style>
    </header>
  );
}
