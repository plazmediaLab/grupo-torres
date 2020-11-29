import HeaderLogo from './header-logo';
import HeaderNavMenu from './header-nav-menu';
import HeaderToggleButton from './header-toggle-button';

export default function HeaderMain() {
  return (
    <header
      id="header-main-container"
      className="bg-gray-200 right-0 top-0 fixed sm:relative w-full">
      <section className="container p-2 sm:p-0 mx-auto grid gap-x-4 justify-items-start items-center bg-gray-400">
        <HeaderLogo />
        <HeaderToggleButton />
        <HeaderNavMenu />
      </section>
      <button
        onClick={() => console.log('Close toggle...')}
        id="close-modal"
        className="w-full h-screen bg-purple-500 hidden sm:hidden cursor-default absolute top-0 left-0"></button>
      <style jsx>{`
        section {
          grid-template-columns: 1fr auto;
        }
      `}</style>
    </header>
  );
}
