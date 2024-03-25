'use client';

/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Tablets } from '@prisma/client';
import { TableRow } from '../../components/TableRow/TableRowTablets';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NewTabletModal from '../../components/NewTabletModal/NewTabletModal';

const prepareTablets = (initialTablets: Tablets[], query: string) => {
  let preparedTablets = initialTablets;
  const normalizedQuery = query.trim().toLowerCase();

  if (query) {
    preparedTablets = preparedTablets.filter((tablet: Tablets) =>
      tablet.id.toLowerCase().includes(normalizedQuery),
    );
  }

  return preparedTablets;
};

const TabletsPage = () => {
  const [tablets, setTablets] = useState<Tablets[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');

  const visibleTablets = prepareTablets(tablets, query);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/tablets');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        setTablets(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage, query]);

  const handleSaveTablet = (newTablet: Tablets) => {
    setTablets([...tablets, newTablet]);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const totalPages = Math.ceil(visibleTablets.length / itemsPerPage);

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

  const handleDeleteTablet = async (id: string) => {
    try {
      const response = await fetch(`/api/tablets/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete tablet');
      }

      setTablets(tablets.filter((tablet) => tablet.id !== id));
    } catch (error) {
      console.error('Error deleting tablet:', error);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, visibleTablets.length);

  return (
    <>
      <div className="h-screen">
        <Header query={query} setQuery={setQuery} />
        <div className="flex flex-col justify-between bg-gray-800 min-h-[calc(100vh-80px)]">
          <div className="flex">
            <SideBar />
            <div className="flex flex-col justify-between w-full">
              <div className="bg-gray-800">
                <div className="flex gap-4 mb-4 items-end">
                  <div className="">
                    <span className="text-white">Items per page: </span>
                    <select
                      value={itemsPerPage}
                      onChange={handleChangeItemsPerPage}
                      className="border border-gray-800 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-800 dark:text-white"
                    >
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                      <option value={20}>20</option>
                    </select>
                  </div>
                  <button
                    className="text-white bg-gray-700 px-6 py-2 hover:bg-gray-500 rounded-lg"
                    onClick={handleShowModal}
                  >
                    Add new
                  </button>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-6">
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
                      </tr>
                    </thead>
                    <tbody>
                      {visibleTablets
                        .slice(startIndex, endIndex)
                        .map((tablet) => (
                          <TableRow
                            key={tablet.id}
                            tablet={tablet}
                            onDelete={() => handleDeleteTablet(tablet.id)}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between items-center w-[40%] m-auto mb-6">
                  <button
                    className="px-4 py-2 transition hover:bg-gray-400 bg-gray-500 text-white rounded-md"
                    onClick={handleGoToStart}
                    disabled={currentPage === 1}
                  >
                    Go to Start
                  </button>
                  <button
                    className="px-4 py-2 transition hover:bg-gray-400 bg-gray-500 text-white rounded-md"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <span className="text-white self-end">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    className="px-4 py-2 transition hover:bg-gray-400 bg-gray-500 text-white rounded-md"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                  <button
                    className="px-4 py-2 transition hover:bg-gray-400 bg-gray-500 text-white rounded-md"
                    onClick={handleGoToEnd}
                    disabled={currentPage === totalPages}
                  >
                    Go to End
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        {showModal && (
          <NewTabletModal onSave={handleSaveTablet} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default TabletsPage;
