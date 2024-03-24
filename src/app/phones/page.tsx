'use client';

/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Phones } from '@prisma/client';
import { TableRow } from '../../components/TableRow/TableRowPhones';

const PhonesPage = () => {
  const [phones, setPhones] = useState<Phones[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/phones');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        setPhones(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(phones.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGoToStart = () => {
    setCurrentPage(1);
  };

  const handleGoToEnd = () => {
    setCurrentPage(totalPages);
  };

  const handleChangeItemsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const handleDeletePhone = async (id: string) => {
    try {
      const response = await fetch(`/api/phones/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete phone');
      }

      setPhones(phones.filter((phone) => phone.id !== id));
    } catch (error) {
      console.error('Error deleting phone:', error);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, phones.length);

  return (
    <div className="">
      <div>
        <span>Items per page: </span>
        <select value={itemsPerPage} onChange={handleChangeItemsPerPage}>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product_ID
              </th>
              <th scope="col" className="px-6 py-3">
                namespace_ID
              </th>
              <th scope="col" className="px-6 py-3">
                Price_Regular
              </th>
              <th scope="col" className="px-6 py-3">
                price_Discount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Create
              </th>
            </tr>
          </thead>
          <tbody>
            {phones.slice(startIndex, endIndex).map((phone) => (
              <TableRow
                key={phone.id}
                phone={phone}
                onDelete={() => handleDeletePhone(phone.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center">
        <button onClick={handleGoToStart} disabled={currentPage === 1}>
          Go to Start
        </button>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        <button onClick={handleGoToEnd} disabled={currentPage === totalPages}>
          Go to End
        </button>
      </div>
    </div>
  );
};

export default PhonesPage;
