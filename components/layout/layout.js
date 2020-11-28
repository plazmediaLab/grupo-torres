import HeaderMain from 'components/header/header-main';
import SeoHeader from './seo-header';

export default function Layout({ children }) {
  return (
    <>
      <SeoHeader />
      <HeaderMain />
      <main className="mt-16 sm:mt-0">{children}</main>
      <footer></footer>
      <style global jsx>{`
        body {
          color: #2d3541;
        }
      `}</style>
    </>
  );
}
