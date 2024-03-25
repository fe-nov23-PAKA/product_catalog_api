'use client';

import { useState } from 'react';

const EditProduct = () => {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-2">Редагування товару</h2>
      <form>
        <label htmlFor="name" className="block mb-2">
          Назва:
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </label>
        <label htmlFor="price" className="block mb-2">
          Ціна:
          <input
            type="number"
            id="price"
            name="price"
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          Зберегти
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
