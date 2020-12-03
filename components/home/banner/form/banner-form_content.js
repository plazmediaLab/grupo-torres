import BannerFormItemSelect from './banner-form_item_select';
import ListStates from 'pages/api/municipios-qro';
import PropertyTypes from 'pages/api/property-types';
import PropertyStatus from 'pages/api/property-status';
import PropertyMaterials from 'pages/api/property-materials';
import BannerFormItemSelectItem from './banner-form_item_select_item';
import BannerFormItemNumber from './banner-form-item-number';

export default function BannerFormContent({ tapSelected }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching...');
  };

  return (
    <form
      className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-x-7 gap-y-4"
      onSubmit={(e) => handleSubmit(e)}>
      <div className="col-span-2 sm:col-span-1">
        <BannerFormItemSelect name="location" label="Locación">
          {ListStates.map(
            (item) => !item.disabled && <BannerFormItemSelectItem item={item} key={item.iata} />
          )}
        </BannerFormItemSelect>
      </div>
      <BannerFormItemSelect name="propertie-type" label="Tipo de propiedad">
        {PropertyTypes.map(
          (item, index) =>
            !item.disabled && (
              <option
                key={index}
                value={item.slug}
                className="banner-form_content_option font-semibold truncate bg-white">
                {item.name}
              </option>
            )
        )}
      </BannerFormItemSelect>
      <BannerFormItemSelect name="propertie-status" label="Estado de la propiedad">
        {PropertyStatus.map(
          (item, index) =>
            !item.disabled && (
              <option
                key={index}
                value={item.slug}
                className="banner-form_content_option font-semibold truncate bg-white">
                {item.name}
              </option>
            )
        )}
      </BannerFormItemSelect>
      <BannerFormItemSelect name="materials" label="Materiales">
        {PropertyMaterials.map(
          (item, index) =>
            !item.disabled && (
              <option
                key={index}
                value={item.slug}
                className="banner-form_content_option font-semibold truncate bg-white">
                {item.name}
              </option>
            )
        )}
      </BannerFormItemSelect>
      <BannerFormItemNumber
        name="initial-price"
        label="Precio de:"
        placeholder="$0.00 MX"></BannerFormItemNumber>
      <BannerFormItemNumber
        name="price-up-to"
        label="Precio hasta:"
        placeholder="$-.-- MX"></BannerFormItemNumber>
      <BannerFormItemNumber
        name="rooms"
        label="Cuartos:"
        placeholder="Número de habitaciones"></BannerFormItemNumber>
      <div className="grid col-span-2 sm:col-span-1">
        <button
          type="submit"
          className="p-3 sm:p-0 bg-rose-500 text-white border border-rose-500 row-start-2 uppercase tracking-wider font-semibold hover:border-rose-600 hover:bg-rose-600">
          Buscar
        </button>
        <style jsx>{`
          div {
            grid-template-rows: 1.7rem auto;
          }
          @media (max-width: 620px) {
            div {
              grid-template-rows: repeat(2, auto);
            }
          }
          button {
            height: 100%;
            display: block;
          }
        `}</style>
      </div>
    </form>
  );
}
