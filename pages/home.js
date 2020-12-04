import BannerMain from 'components/home/banner/banner-main';
import LastAddedPropertyesMain from 'components/home/last-added-properties/last-added-propertyes-main';
import SectionUsMain from 'components/home/section-us/section-us-main';
import Layout from 'components/layout/layout';

export default function Home() {
  return (
    <Layout>
      <BannerMain />
      <SectionUsMain />
      <LastAddedPropertyesMain />
    </Layout>
  );
}
