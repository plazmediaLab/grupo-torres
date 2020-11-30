import Layout from 'components/layout/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <section className="w-full overflow-hidden relative">
        <Image
          src="/cover-home-page-main.jpg"
          alt="Main banner image Home page"
          layout="fill"
          objectFit="cover"
          quality={60}
          priority={true}
        />
      </section>
      <style jsx>{`
        section {
          height: 70vh;
        }
        @media (max-width: 620px) {
          section {
            height: 50vh;
          }
        }
      `}</style>
    </Layout>
  );
}
