import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <div className="flex items-center flex-col sm:flex-row">
      <Link href="/home">
        <a>
          <img src="/isologo-color.svg" alt="Grupo Torres Logo" className="logo" />
        </a>
      </Link>
      <style jsx>{`
        img {
          min-width: 13rem !important;
        }
      `}</style>
    </div>
  );
}
