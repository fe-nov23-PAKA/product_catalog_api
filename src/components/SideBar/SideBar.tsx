'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="block sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50 w-full h-full"
        style={{ display: isOpen ? 'block' : 'none' }}
        aria-label="Overlay"
      ></button>
      <aside
        id="default-sidebar"
        className={`z-40 w-64 h-full transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/phones"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Image
                  src="/images/smartphone.svg"
                  width={24}
                  height={24}
                  alt="smartphone"
                />
                <span className="ms-3">Phones</span>
              </Link>
            </li>
            <li>
              <Link
                href="/tablets"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Image
                  src="/images/tablet.svg"
                  width={24}
                  height={24}
                  alt="smartphone"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Tablets</span>
              </Link>
            </li>
            <li>
              <Link
                href="/accessories"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Image
                  src="/images/watch.svg"
                  width={24}
                  height={24}
                  alt="smartphone"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Accessories
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <button
        onClick={toggleSidebar}
        className="fixed top-0 left-0 z-50 block sm:hidden p-4"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 7.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 0 1-1.414 0L10 9.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SideBar;
