export default function BannerFormItemNumber({ name = '', label = '', placeholder = '' }) {
  return (
    <div className="w-full text-body relative grid">
      <label htmlFor={name} className="truncate font-light block whitespace-nowrap">
        {label}
      </label>
      <input
        type="number"
        name={name}
        id={name}
        className="w-full p-3 pr-8 appearance-none truncate bg-background-dark"
        placeholder={placeholder}
      />
      <style jsx>{`
        div {
          grid-template-rows: 1.7rem auto;
        }
      `}</style>
    </div>
  );
}
