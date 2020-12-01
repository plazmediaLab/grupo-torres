export default function BannerFormTapSelector({ tapSelected, setTapSelected }) {
  const handleClick = (e) => {
    setTapSelected(e.target.value);
  };

  return (
    <div className="absolute text-title-sub leading-relaxed left-0">
      <button
        onClick={(e) => handleClick(e)}
        value="rent"
        className={`inline-block font-medium uppercase p-button ${
          tapSelected === 'rent' ? 'bg-rose-500 text-white' : 'bg-white text-rose-500'
        }  hover:bg-rose-600 hover:text-white`}>
        Renta
      </button>
      <button
        onClick={(e) => handleClick(e)}
        value="buy"
        className={`inline-block font-medium uppercase p-button ${
          tapSelected === 'buy' ? 'bg-rose-500 text-white' : 'bg-white text-rose-500'
        }  hover:bg-rose-600 hover:text-white`}>
        Compra
      </button>
      <style jsx>{`
        div {
          top: -46px;
        }
      `}</style>
    </div>
  );
}
