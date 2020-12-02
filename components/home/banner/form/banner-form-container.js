import { useState } from 'react';
import BannerFormContent from './banner-form_content';
import BannerFormTapSelector from './banner-form_tap_selector';

export default function BannerFormContainer() {
  const [tapSelected, setTapSelected] = useState('rent');

  return (
    <section className="container mx-auto relative bg-teal-500 p-5">
      <BannerFormTapSelector tapSelected={tapSelected} setTapSelected={setTapSelected} />
      <BannerFormContent tapSelected={tapSelected} name="location" label="Locación" />
      <style jsx>{`
        section {
          z-index: 11;
          bottom: 0;
        }
      `}</style>
    </section>
  );
}
