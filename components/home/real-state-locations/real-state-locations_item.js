import Image from 'next/image';

export default function RealStateLocationsItem({ item }) {
  const { image, name, available, country } = item;
  console.log(image);

  return (
    <li className="relative">
      <article className="relative grid place-items-center p-5 bg-blue-gray-900 bg-opacity-50">
        <h5 className="text-title-card font-black text-white my-10">{name}</h5>
        <div className="flex justify-between w-full">
          <p className="text-white rounded-full py-1 px-3 bg-gray-900 bg-opacity-70">
            {available > 0 ? `Disponibles ${available}` : 'No disponibles'}
          </p>
          <p className="font-bold text-rose-500 shadow">
            <svg
              className="w-4 h-4 inline-block mr-1 mb-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
            {country}
          </p>
        </div>
      </article>
      <div className="locations-image-container absolute top-0 w-full h-full">
        <Image alt={image} src={image} layout="fill" objectFit="cover" quality={30} />
      </div>
      <style jsx>{`
        article {
          z-index: 5;
        }
        h5,
        p.shadow {
          text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.6), 0px 2px 3px rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </li>
  );
}
