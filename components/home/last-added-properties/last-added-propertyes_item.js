import CardImageMain from './card/card-image-main';
import Bathroom from 'components/icons/bathroom';
import Betroom from 'components/icons/betroom';
import Parking from 'components/icons/parking';
import Link from 'next/link';

export default function LastAddedPropertyesItem({ item }) {
  const { image, type, status, rating, name, address, rooms, bath, parking } = item;
  return (
    <article className="shadow">
      <CardImageMain image={image} type={type} status={status} rating={rating} />
      <div className="p-4 bg-white">
        <h3 className="text-title-card text-rose-500 mb-3 truncate" title={name}>
          {name}
        </h3>
        <hr className="border-background-dark" />
        <p className="p-small text-title-sub font-light my-2 truncate" title={address}>
          <svg
            className="w-4 h-4 inline-block mr-1 mb-small"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {address}
        </p>
        <section className="grid grid-cols-3 gap-x-4 justify-between my-4">
          <div className="flex items-center">
            <p className="text-title-sub font-semibold">{rooms}</p>
            <Betroom className="w-6 h-6 inline-block ml-2" />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-title-sub font-semibold">{bath}</p>
            <Bathroom className="w-6 h-6 inline-block ml-2" />
          </div>
          <div className="flex items-center justify-end">
            <p className="text-title-sub font-semibold">{parking}</p>
            <Parking className="w-6 h-6 inline-block ml-2" />
          </div>
        </section>
        <Link href="/propertyes">
          <a className="inline-block mt-1 p-button bg-secondary-darkest text-white border border-secondary-darkest">
            Más información
          </a>
        </Link>
      </div>
    </article>
  );
}
