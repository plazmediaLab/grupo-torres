import SeoHeader from './seo-header';

export default function Layout({ children }) {
  return (
    <>
      <SeoHeader />
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
