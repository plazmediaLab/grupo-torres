import HeaderMain from 'components/header/header-main';
import SeoHeader from './seo-header';

export default function Layout({ children }) {
  return (
    <>
      <SeoHeader />
      <HeaderMain />
      <main className="mt-16 sm:mt-0 text-body">{children}</main>
      <footer className="text-body"></footer>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
        body {
          color: #4b586c;
          font-family: 'Poppins', sans-serif;
        }
        *:focus {
          outline: none !important;
        }
        input,
        select {
          background-color: #fff;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        * {
          border-radius: 0;
        }
      `}</style>
    </>
  );
}
