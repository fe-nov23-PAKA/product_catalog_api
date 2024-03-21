import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <ul className="flex flex-col md:flex-row justify-center md:justify-start">
            <li>
              <a href="#" className="text-white mx-4 hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white mx-4 hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white mx-4 hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0 text-center text-white">
          &copy; 2024 Your Site. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
