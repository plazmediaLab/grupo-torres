export default function HeaderNavMenuItem({ title, label, children, link = true, ...props }) {
  return (
    <button
      {...props}
      title={title}
      className="flex items-center w-full text-left whitespace-nowrap p-2 sm:py-5 sm:px-3 hover:bg-secondary hover:text-white">
      {children}
      <span className="flex-1 sm:hidden lg:inline-block">{label}</span>
      {!link && (
        <svg
          className="w-4 h-4 inline-block sm:mr-0 sm:ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
