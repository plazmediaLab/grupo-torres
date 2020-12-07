import Image from 'next/image';

export default function SectionRepresentativesItem({ item, index }) {
  const { name, rol, phone, email, web, image } = item;

  return (
    <li className={`grid bg-white shadow-lg ${index === 2 && 'hidden lg:grid'}`}>
      <div className="relative">
        <Image
          src={image}
          alt="perfil image"
          layout="fill"
          objectFit="cover"
          quality={20}
          placeholder={() => <div style={{ backgroundColor: 'grey' }} />}
        />
      </div>
      <section className="p-4">
        <h5 className="font-semibold text-rose-500 text-title-card">{name}</h5>
        <hr className="my-3 border-gray-300" />
        <p className="text-title-card">{rol}</p>
        <a
          className="mt-3 block text-rose-800 break-words"
          href="www.gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          {email}
        </a>
        <p>{phone}</p>
        <a
          className="block text-rose-800 break-words"
          href={web}
          target="_blank"
          rel="noopener noreferrer">
          {web}
        </a>
      </section>
      <style jsx>{`
        li {
          grid-template-columns: 40% 60%;
        }
      `}</style>
    </li>
  );
}
