'use client';

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <a className="text-white font-bold text-xl">Nice Gadgets</a>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a className="text-white hover:text-gray-300">Phones</a>
            <a className="text-white hover:text-gray-300">Tablets</a>
            <a className="text-white hover:text-gray-300">Accsesoraise</a>
          </nav>
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
          <nav
            className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col w-full items-center absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 p-4`}
          >
            <a className="text-white hover:text-gray-300">About</a>
            <a className="text-white hover:text-gray-300">Services</a>
            <a className="text-white hover:text-gray-300">Contact</a>
            <a className="text-white hover:text-gray-300">Login</a>
          </nav>
          <div className="hidden md:block">
            <a className="text-white hover:text-gray-300">Login</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
