import Image from 'next/image';
import CardImageRatingStars from './card-image_rating_stars';

export default function CardImageMain({ image, type, status, rating }) {
  return (
    <div className="relative">
      <div className="image-last-property h-40 relative">
        <CardImageRatingStars rating={rating} />
        <p className="absolute py-2 pr-2 pl-4 rounded-bl-xl bg-blue-gray-900 bg-opacity-40 top-0 right-0 text-white">
          {type}
        </p>
        <p className="absolute py-2 pr-2 pl-4 rounded-l-full bg-rose-500 bg-opacity-50 bottom-0 right-0 text-white">
          {status}
        </p>
        <Image
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          src={image}
          alt="Image - last property"
          layout="fill"
          objectFit="cover"
          quality={30}
          priority={true}
        />
      </div>
      <style jsx>{`
        p {
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
