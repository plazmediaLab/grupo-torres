import HeaderMain from 'components/header/header-main';
import SeoHeader from './seo-header';

export default function Layout({ children }) {
  return (
    <>
      <SeoHeader />
      <HeaderMain />
      <main className="mt-16 sm:mt-0 text-body tracking-wider">{children}</main>
      <footer className="text-body tracking-wider"></footer>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
        body {
          color: #4b586c;
          font-family: 'Poppins', sans-serif;
        }
        *:focus {
          outline: none !important;
        }
      `}</style>
    </>
  );
}
