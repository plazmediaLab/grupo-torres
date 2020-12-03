export default function BannerFormItemSelectItem({ item = {} }) {
  const { iata, name, municipios } = item;
  return (
    <>
      <option
        value={iata}
        selected={iata === 'QRO' && true}
        className="banner-form_content_option font-semibold truncate bg-white">
        {name}
      </option>
      {municipios.map(
        (mun) =>
          !mun.disabled && (
            <option
              key={mun.iata}
              value={mun.iata}
              disabled={mun.disabled}
              className="banner-form_content_option truncate bg-white">
              &raquo; {mun.name}
            </option>
          )
      )}
      <style global jsx>{`
        option.banner-form_content_option:disabled {
          color: #818a98;
          font-weight: 300;
        }
      `}</style>
    </>
  );
}
