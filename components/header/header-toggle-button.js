import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function HeaderToggleButton() {
  const [open, setOpen] = useState(false);

  const handleToggleAction = () => {
    document.getElementById('menu-toggle').classList.toggle('hidden');
    setOpen(!open);
  };

  useEffect(() => {
    if (document.getElementById('close-toggle')) {
      if (open) {
        document.getElementById('close-toggle').classList.remove('hidden');
      } else {
        document.getElementById('close-toggle').classList.add('hidden');
      }
    }
  }, [open]);

  return (
    <button
      className="sm:hidden p-3 rounded-full hover:text-white hover:bg-secondary"
      onClick={handleToggleAction}>
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {open &&
        ReactDOM.createPortal(
          <button
            id="close-toggle"
            className="close-toggle sm:block bg-gray-400 opacity-25 cursor-default absolute top-0 left-0 w-full h-screen"
          />,
          document.getElementById('header-main-container')
        )}
      <style global jsx>{`
        button.close-toggle {
          z-index: -1;
        }
        @media (min-width: 620px) {
          button.close-toggle {
            display: none;
          }
        }
      `}</style>
    </button>
  );
}
