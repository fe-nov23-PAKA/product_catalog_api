import { Tablets } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

type Props = {
  tablet: Tablets;
  onDelete: () => void;
};

export const TableRow: React.FC<Props> = ({ tablet, onDelete }) => (
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {tablet.id}
    </th>
    <td className="px-6 py-4">{tablet.namespaceId}</td>
    <td className="px-6 py-4">{tablet.priceRegular}</td>
    <td className="px-6 py-4">{tablet.priceDiscount}</td>
    <td className="px-6 py-4">
      <div className="flex gap-x-4 items-center h-full">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
        <button onClick={onDelete}>
          <Image src="/images/trash.svg" width={18} height={18} alt="sas" />
        </button>
      </div>
    </td>
    <td className="px-6 py-4">
      <button className="bg-black px-2 py-2 rounded-md">Add new</button>
    </td>
  </tr>
);
