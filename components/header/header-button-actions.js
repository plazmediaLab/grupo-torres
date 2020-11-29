import Link from 'next/link';

export default function HeaderButtonActions() {
  return (
    <section className="mt-2 sm:mt-0 sm:ml-2 grid grid-cols-2 text-center gap-x-2 items-center">
      <Link href="/login">
        <a className="flex items-center justify-center whitespace-nowrap border border-rose-500 bg-rose-500 hover:border-rose-600 hover:bg-rose-600 text-white py-2 px-4 rounded-md">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <span className="inline-block sm:hidden md:inline-block">Iniciar sesión</span>
        </a>
      </Link>
      <Link href="/sell-property">
        <a className="flex items-center justify-center whitespace-nowrap border border-secondary-darkest hover:bg-secondary-darkest hover:text-white py-2 px-4 rounded-md">
          <svg
            className="w-6 h-6 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="inline-block sm:hidden md:inline-block">Vender</span>
        </a>
      </Link>
      <style jsx>{`
        section {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 768px) {
          section {
            grid-template-columns: 1fr auto;
          }
        }
      `}</style>
    </section>
  );
}
