import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto grid place-content-center h-screen text-center">
      <div>
        <Image width={200} height={200} src="/isotype-color.png" />
      </div>
      <h1 className="text-6xl uppercase font-bold text-blue-gray-600 mt-5">Grupo Torres</h1>
      <p className="uppercase mt-3 text-2xl tracking-widest text-light-blue-600">bienes raíces</p>
      <div className="flex flex-col items-center justify-center my-8 space-y-4">
        <Image src="/imagotype-dark.svg" width={140} height={30} />
        <small className="text-blue-gray-400 text-xl">Web en construcción</small>
      </div>
    </div>
  );
}
