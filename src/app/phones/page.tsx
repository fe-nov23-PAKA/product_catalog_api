'use client';

/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Phones } from '@prisma/client';
import { TableRow } from '../../components/TableRow/TableRowPhones';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NewPhoneModal from '../../components/NewPhoneModal/NewPhoneModal';

const PhonesPage = () => {
  const [phones, setPhones] = useState<Phones[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);

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

  const handleSavePhone = (newPhone: Phones) => {
    setPhones([...phones, newPhone]);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
    <>
      <Header />
      <div className="flex-1">
        <div className="flex">
          <SideBar />
          <div className="flex flex-col justify-between w-full mb-12">
            <div className="">
              <div>
                <span>Items per page: </span>
                <select
                  value={itemsPerPage}
                  onChange={handleChangeItemsPerPage}
                >
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
                        handleShowModal={handleShowModal}
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
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
                <button
                  onClick={handleGoToEnd}
                  disabled={currentPage === totalPages}
                >
                  Go to End
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showModal && (
        <NewPhoneModal onSave={handleSavePhone} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default PhonesPage;
