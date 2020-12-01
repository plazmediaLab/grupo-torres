import Bathroom from 'components/icons/bathroom';
import Parking from 'components/icons/parking';
import Betroom from 'components/icons/betroom';
import Ground from 'components/icons/ground';

export default function BannerSlideContentInfo() {
  return (
    <section className="grid grid-cols-4 text-title-sub gap-2 my-7 font-semibold">
      <div className="" title="Dimenciones del terreno">
        <Ground className="w-9 h-9 mb-2" fill="#F43F5E" />
        <p className="">
          519.16{' '}
          <span>
            m<sup>2</sup>
          </span>
        </p>
      </div>
      <div className="" title="Recamaras disponibles">
        <Betroom className="w-9 h-9 mb-2" fill="#F43F5E" />
        <p className="">
          3 <span>Recamaras</span>
        </p>
      </div>
      <div className="" title="Baños disponibles">
        <Bathroom className="w-9 h-9 mb-2" fill="#F43F5E" />
        <p className="">
          2 <span>Baños</span>
        </p>
      </div>
      <div className="" title="Estacionamientos en la propiedad">
        <Parking className="w-9 h-9 mb-2" fill="#F43F5E" />
        <p className="">
          1 <span>Estacionamiento</span>
        </p>
      </div>
      <style jsx>{`
        div p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        div p span {
          font-weight: 300;
        }
      `}</style>
    </section>
  );
}
