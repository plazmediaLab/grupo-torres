import BannerSlideButtons from './banner-slide_buttons';
import BannerSlideContent from './banner-slide_content';

export default function BannerSlideContainer() {
  return (
    <aside className="container mx-auto relative grid gap-x-7 grid-cols-2 pb-32">
      <div className="mb-14 md:mb-0 col-span-2 lg:col-span-1">
        <BannerSlideButtons />
        <BannerSlideContent />
      </div>
      <article className="row-start-1 sm:row-start-auto col-span-2 lg:col-span-1 block sm:hidden lg:block w-full lg:w-4/5 mt-8 sm:mt-10 place-self-center text-white text-title-card font-semibold p-5 rounded-lg bg-gray-900 bg-opacity-60 shadow-lg">
        &quot;Dedicados a promover predios, escriturar, regularizar, y entregar dominio pleno con
        todo lo relacionado con las bienes raices.&quot;
      </article>
      <style jsx>{`
        aside {
          height: 100%;
          z-index: 10;
        }
        div {
          place-self: start;
          align-self: center;
        }
        @media (max-width: 1024px) {
          div {
            place-self: center;
          }
        }
        article {
          backdrop-filter: blur(5px);
        }
        @media (max-width: 768px) {
          article {
            width: 95%;
          }
        }
      `}</style>
    </aside>
  );
}
