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
            <a className="text-white font-bold text-xl cursor-pointer">
              Nice Gadgets
            </a>
          </div>
          <div
            id="search-bar"
            className="w-[420px] bg-white rounded-md shadow-lg z-10 ml-24"
          >
            <form className="flex items-center justify-center p-2">
              <input
                type="text"
                placeholder="Search here"
                className="w-full rounded-md px-2 py-1 focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              ></input>
              <button
                type="submit"
                className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
              >
                Search
              </button>
            </form>
          </div>
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
            className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col w-full items-center absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 p-4 z-50 h-screen`}
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
