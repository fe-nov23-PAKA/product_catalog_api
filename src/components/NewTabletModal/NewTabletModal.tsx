/* eslint-disable no-console */
import { Tablets } from '@prisma/client';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  onSave: (newTablet: Tablets) => void;
  onClose: () => void;
};

const NewTabletModal: React.FC<Props> = ({ onSave, onClose }) => {
  const [formData, setFormData] = useState({
    id: '',
    namespaceId: '',
    name: '',
    capacityAvailable: [''],
    capacity: '',
    priceRegular: 0,
    priceDiscount: 0,
    colorsAvailable: [''],
    color: '',
    images: [''],
    description: [{}],
    screen: '',
    resolution: '',
    processor: '',
    ram: '',
    camera: '',
    zoom: '',
    cell: [''],
  });

  const handleChange = (e, key) => {
    const value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/tablets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add tablet');
      }

      onSave(formData);
      onClose();
    } catch (error) {
      console.error('Error adding tablet:', error);
    }
  };

  return (
    <>
      <div className="fixed top-0 z-10 h-[100%] w-[100%] opacity-100 backdrop-brightness-[0.55] transition-all"></div>
      <div className="modal transition-all fixed left-[50%] top-[50%] z-20 h-[90%] w-[40%] translate-x-[-50%] translate-y-[-50%] rounded-3xl border border-secondary bg-gray-800">
        <div className="modal-content">
          <div className="flex justify-between mt-6 px-6 items-center mb-6">
            <h1 className="text-white font-bold text-3xl">
              Create a new tablet
            </h1>
            <button className="" onClick={onClose}>
              <Image
                src="/images/close.svg"
                width={40}
                height={40}
                alt="close"
              />
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mx-12 gap-y-3 justify-between"
          >
            {Object.entries(formData).map(([key, value]) => (
              <div className="flex justify-between" key={key}>
                <label className="text-white mr-6" htmlFor={key}>
                  {key}
                </label>
                <input
                  type="text"
                  className="rounded-md"
                  id={key}
                  value={Array.isArray(value) ? JSON.stringify(value) : value}
                  onChange={(e) => handleChange(e, key)}
                />
              </div>
            ))}
            <button
              className="bg-gray-700 mt-3 rounded-lg transition-all hover:bg-gray-500 text-white w-max self-center px-8 py-4"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewTabletModal;
