/* eslint-disable no-console */
import { Phones } from '@prisma/client';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  onSave: (newPhone: Phones) => void;
  onClose: () => void;
};

const NewPhoneModal: React.FC<Props> = ({ onSave, onClose }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/phones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add phone');
      }

      onSave(formData);
      onClose();
    } catch (error) {
      console.error('Error adding phone:', error);
    }
  };

  return (
    <div className="modal fixed left-[50%] top-[50%] z-20 h-[90%] w-[40%] translate-x-[-50%] translate-y-[-50%] rounded-3xl border border-secondary bg-gray-800">
      <div className="modal-content">
        <div className="flex justify-between mt-6 px-6 items-center mb-6">
          <h1 className="text-white font-bold text-3xl">Create a new phone</h1>
          <button className="" onClick={onClose}>
            <Image src="/images/close.svg" width={40} height={40} alt="close" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mx-6 gap-y-2">
          {Object.entries(formData).map(([key, value]) => (
            <div className="flex justify-between" key={key}>
              <label className="text-white mr-6" htmlFor={key}>
                {key}
              </label>
              <input
                type="text"
                id={key}
                value={Array.isArray(value) ? JSON.stringify(value) : value}
                onChange={(e) => handleChange(e, key)}
              />
            </div>
          ))}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default NewPhoneModal;
