import BannerSlideButtons from './banner-slide_buttons';
import BannerSlideContent from './banner-slide_content';

export default function BannerSlideContainer() {
  return (
    <aside className="container mx-auto relative">
      <BannerSlideButtons />
      <BannerSlideContent />
      <style jsx>{`
        aside {
          height: 100%;
          z-index: 10;
        }
      `}</style>
    </aside>
  );
}
