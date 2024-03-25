/* eslint-disable no-console */
'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { TableRow } from '../TableRow/TableRowPhones';
import { Phones } from '@prisma/client';

const Table = () => {
  const [phones, setPhones] = useState<Phones[]>([]);

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
  }, []);

  return (
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
          {phones.map((phone) => (
            <TableRow key={phone.id} phone={phone} />
          ))}

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              apple-iphone-11-128gb-black
            </th>
            <td className="px-6 py-4">apple-iphone-11</td>
            <td className="px-6 py-4">1100</td>
            <td className="px-6 py-4">1050</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-4 items-center h-full">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#">
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="sas"
                  />
                </a>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="bg-black px-2 py-2 rounded-md">Add new</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              apple-iphone-11-128gb-black
            </th>
            <td className="px-6 py-4">apple-iphone-11</td>
            <td className="px-6 py-4">1100</td>
            <td className="px-6 py-4">1050</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-4 items-center h-full">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#">
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="sas"
                  />
                </a>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="bg-black px-2 py-2 rounded-md">Add new</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              apple-iphone-11-128gb-black
            </th>
            <td className="px-6 py-4">apple-iphone-11</td>
            <td className="px-6 py-4">1100</td>
            <td className="px-6 py-4">1050</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-4 items-center h-full">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#">
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="sas"
                  />
                </a>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="bg-black px-2 py-2 rounded-md">Add new</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              apple-iphone-11-128gb-black
            </th>
            <td className="px-6 py-4">apple-iphone-11</td>
            <td className="px-6 py-4">1100</td>
            <td className="px-6 py-4">1050</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-4 items-center h-full">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#">
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="sas"
                  />
                </a>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="bg-black px-2 py-2 rounded-md">Add new</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              apple-iphone-11-128gb-black
            </th>
            <td className="px-6 py-4">apple-iphone-11</td>
            <td className="px-6 py-4">1100</td>
            <td className="px-6 py-4">1050</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-4 items-center h-full">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#">
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="sas"
                  />
                </a>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="bg-black px-2 py-2 rounded-md">Add new</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              apple-iphone-11-128gb-black
            </th>
            <td className="px-6 py-4">apple-iphone-11</td>
            <td className="px-6 py-4">1100</td>
            <td className="px-6 py-4">1050</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-4 items-center h-full">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#">
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="sas"
                  />
                </a>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="bg-black px-2 py-2 rounded-md">Add new</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              apple-iphone-11-128gb-black
            </th>
            <td className="px-6 py-4">apple-iphone-11</td>
            <td className="px-6 py-4">1100</td>
            <td className="px-6 py-4">1050</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-4 items-center h-full">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#">
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="sas"
                  />
                </a>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="bg-black px-2 py-2 rounded-md">Add new</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              apple-iphone-11-128gb-black
            </th>
            <td className="px-6 py-4">apple-iphone-11</td>
            <td className="px-6 py-4">1100</td>
            <td className="px-6 py-4">1050</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-4 items-center h-full">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#">
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="sas"
                  />
                </a>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="bg-black px-2 py-2 rounded-md">Add new</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              apple-iphone-11-128gb-black
            </th>
            <td className="px-6 py-4">apple-iphone-11</td>
            <td className="px-6 py-4">1100</td>
            <td className="px-6 py-4">1050</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-4 items-center h-full">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#">
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="sas"
                  />
                </a>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="bg-black px-2 py-2 rounded-md">Add new</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
