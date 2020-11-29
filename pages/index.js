import SeoHeader from 'components/layout/seo-header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto grid place-content-center h-screen text-center">
      <SeoHeader />
      <div>
        <Image width={250} height={250} src="/Perfil-500px.png" alt="Logotipo Grupo Torres" />
      </div>
      <h1 className="text-4xl sm:text-6xl uppercase font-bold text-secondary mt-5">Grupo Torres</h1>
      <p className="uppercase mt-3 text-xl sm:text-2xl tracking-widest text-primary">
        bienes raíces
      </p>
      <div className="flex flex-col items-center justify-center my-8 space-y-4">
        <Image src="/design-by-regular.svg" width={200} height={50} className="" />
        <small className="text-blue-gray-400 text-xl">Web en construcción</small>
        <Link href="/home">
          <a className="bg-white border border-secondary-darkest py-2 px-10 rounded hover:bg-secondary-darkest hover:text-white transition duration-200 ease-in-out">
            Ver demo - página principal
          </a>
        </Link>
      </div>
    </div>
  );
}
