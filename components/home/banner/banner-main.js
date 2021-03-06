import Image from 'next/image';
import BannerFormContainer from './form/banner-form-container';
import BannerSlideContainer from './slide/banner-slide-container';

export default function BannerMain() {
  return (
    <section className="w-full relative z-10">
      <BannerSlideContainer />
      <BannerFormContainer />
      <Image
        className="image-banner"
        src="/cover-home-page-main.jpg"
        alt="Main banner image Home page"
        layout="fill"
        objectFit="cover"
        quality={60}
        priority={true}
        placeholder={() => <div style={{ backgroundColor: 'grey' }} />}
      />
      <style global jsx>{`
        img.image-banner {
          z-index: -1;
        }
      `}</style>
      <style jsx>{`
        section {
          height: 600px;
        }
        @media (max-width: 620px) {
          section {
            height: 50vh;
          }
        }
      `}</style>
    </section>
  );
}
