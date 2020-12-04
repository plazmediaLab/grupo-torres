import { useEffect, useRef, useState } from 'react';
import BannerFormContent from './banner-form_content';
import BannerFormTapSelector from './banner-form_tap_selector';

export default function BannerFormContainer() {
  const [tapSelected, setTapSelected] = useState('rent');

  return (
    <section className="container mx-auto relative bg-white p-5 grid place-items-center shadow-lg">
      <BannerFormTapSelector tapSelected={tapSelected} setTapSelected={setTapSelected} />
      <BannerFormContent tapSelected={tapSelected} name="location" label="Locación" />
      <style jsx>{`
        section {
          z-index: 11;
          bottom: 100px;
        }
        @media (max-width: 768px) {
          section {
            width: 95%;
          }
        }
      `}</style>
    </section>
  );
}
