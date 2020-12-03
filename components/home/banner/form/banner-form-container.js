import { useEffect, useRef, useState } from 'react';
import BannerFormContent from './banner-form_content';
import BannerFormTapSelector from './banner-form_tap_selector';

export default function BannerFormContainer() {
  const [tapSelected, setTapSelected] = useState('rent');
  const [height, setHeight] = useState(0);

  const sectionForm = useRef(null);

  useEffect(() => {
    if (window.document) {
      setHeight(sectionForm.current.offsetHeight);
    }
  }, [sectionForm]);

  return (
    <section
      ref={sectionForm}
      className="container mx-auto relative bg-white p-5 grid place-items-center">
      <BannerFormTapSelector tapSelected={tapSelected} setTapSelected={setTapSelected} />
      <BannerFormContent tapSelected={tapSelected} name="location" label="Locación" />
      <style jsx>{`
        section {
          z-index: 11;
          bottom: calc(${Math.floor(height / 2)}px);
        }
        @media (max-width: 768px) {
          section {
            width: 95%;
            bottom: 100px;
          }
        }
      `}</style>
    </section>
  );
}
