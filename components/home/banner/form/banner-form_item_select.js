export default function BannerFormItemSelect({ name, label, children }) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <select name={name} id={name}>
          {children}
        </select>
      </label>
    </div>
  );
}
