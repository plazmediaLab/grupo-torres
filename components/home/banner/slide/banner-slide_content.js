import BannerSlideContentActions from './banner-slide_content_actions';
import BannerSlideContentInfo from './banner-slide_content_info';

export default function BannerSlideContent() {
  return (
    <article className="ml-3 lg:ml-0 sm:w-10/12 md:w-2/3 lg:w-6/12 xl:w-5/12 absolute left-0 bg-white p-5 hidden sm:block">
      <h3 className="text-title-lg font-semibold">North Greenwich Street</h3>
      <p className="my-1 text-title-card font-light">
        <svg
          className="w-4 h-4 inline-block mr-2 mb-1 text-rose-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        215 Greenwich St, New York
      </p>
      <BannerSlideContentInfo />
      <BannerSlideContentActions />
      <style jsx>{`
        article {
          top: 20%;
        }
      `}</style>
    </article>
  );
}
