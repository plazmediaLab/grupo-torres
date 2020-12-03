export default function BannerFormItemSelect({ name, label, children }) {
  return (
    <div className="w-full text-body relative">
      <svg
        className="w-4 h-4 absolute right-3 pointer-events-none bottom-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <label htmlFor={name} className="truncate">
        <span className="mb-2 font-light block">{label}</span>
        <select
          name={name}
          id={name}
          className="w-full p-3 pr-8 appearance-none truncate bg-background-dark">
          {children}
        </select>
      </label>
    </div>
  );
}
