import BannerFormItemSelect from './banner-form_item_select';
import List from 'components/home/banner/form/municipios-qro';

const ItemEst = ({ item }) => {
  const { iata, name, municipios } = item;
  console.log(iata);
  console.log(name);
  console.log(municipios);
  return (
    <>
      <option value={iata} selected={iata === 'QRO' && true}>
        {name}
      </option>
      {municipios.map((mun) => (
        <option key={mun.iata} value={mun.iata}>
          &raquo; {mun.name}
        </option>
      ))}
    </>
  );
};

export default function BannerFormContent({ tapSelected }) {
  return (
    <form>
      <BannerFormItemSelect>
        {List.map((item) => (
          <ItemEst item={item} key={item.iata} />
        ))}
      </BannerFormItemSelect>
    </form>
  );
}
