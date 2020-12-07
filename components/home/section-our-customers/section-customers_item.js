import Image from 'next/image';

export default function SectionCustomersItem({ item, index }) {
  const { customer, image, comment, tag } = item;

  const truncate = (string, length) => {
    let truncate = string.substring(0, length);
    return truncate + '...';
  };

  return (
    <li
      className={`bg-white relative mt-14 py-5 px-14 md:px-5 pt-14 text-center shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
        index === 2 && 'hidden lg:block'
      }`}>
      <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden absolute shadow-md">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          quality={20}
          placeholder={() => <div style={{ backgroundColor: 'grey' }} />}
        />
      </div>
      <h5 className="text-title-card font-semibold mt-1 mb-2">{customer}</h5>
      <p className="mb-3" title={comment}>
        {truncate(comment, 130)}
      </p>
      <p className="text-rose-500 font-semibold flex items-center justify-center">
        <svg
          className="w-4 h-4 inline-block mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
        {tag}
      </p>
      <style jsx>{`
        div {
          top: -3rem;
          left: calc(50% - 3rem);
        }
      `}</style>
    </li>
  );
}
