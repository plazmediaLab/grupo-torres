export default function MenuAccordion({ children, title = '', link = true, ...props }) {
  return (
    <li>
      <button
        title={title}
        className="py-5 px-3 flex items-center w-full text-left border border-transparent hover:border-secondary hover:bg-secondary hover:text-white"
        {...props}>
        {children}{' '}
        {!link && (
          <svg
            className="w-5 h-5 inline-block"
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
    </li>
  );
}
