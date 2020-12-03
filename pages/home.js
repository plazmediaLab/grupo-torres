import BannerMain from 'components/home/banner/banner-main';
import SectionUsMain from 'components/home/section-us/section-us-main';
import Layout from 'components/layout/layout';

export default function Home() {
  return (
    <Layout>
      <BannerMain />
      <SectionUsMain />
    </Layout>
  );
}
