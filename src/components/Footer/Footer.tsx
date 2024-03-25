import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="mt-4 md:mt-0 text-center text-white">
          &copy; 2024 Your Site. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
