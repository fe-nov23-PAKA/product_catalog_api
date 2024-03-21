'use client';

import { useState } from 'react';

const SearchBar = () => {
  return (
    <form className="flex items-center">
      <input
        type="text"
        placeholder="Пошук..."
        className="border border-gray-300 px-3 py-1 rounded-md mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded-md"
      >
        Пошук
      </button>
    </form>
  );
};

export default SearchBar;
