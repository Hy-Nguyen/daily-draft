'use client';

import { useState, useMemo } from 'react';
import TableFilters from './Table/TableFilters';
import TransactionItem from './Table/TransactionItem';
import Pagination from '../ui/Pagination';

interface TransactionFilters {
  status: string;
  type: string;
  startDate: string;
  endDate: string;
}

const ITEMS_PER_PAGE = 7;

const initialFilters: TransactionFilters = {
  status: 'All',
  type: 'All',
  startDate: '',
  endDate: '',
};

export default function UserTransactionTable({ transactions }: { transactions: any[] }) {
  const [transactionFilters, setTransactionFilters] = useState<TransactionFilters>(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const resetFilters = () => {
    setTransactionFilters(initialFilters);
    setCurrentPage(1);
  };

  const handleFilterChange = <K extends keyof TransactionFilters>(key: K, value: TransactionFilters[K]) => {
    setTransactionFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const filteredTransactions = useMemo(() => {
    return transactions
      .filter((transaction) => {
        const statusMatch =
          transactionFilters.status === 'All' ||
          (transactionFilters.status === 'Active' && transaction.status) ||
          (transactionFilters.status === 'Inactive' && !transaction.status);

        const typeMatch = transactionFilters.type === 'All' || transaction.type === transactionFilters.type;

        const dateMatch =
          (!transactionFilters.startDate || new Date(transaction.date) >= new Date(transactionFilters.startDate)) &&
          (!transactionFilters.endDate || new Date(transaction.date) <= new Date(transactionFilters.endDate));

        return statusMatch && typeMatch && dateMatch;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [transactions, transactionFilters]);

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="relative flex w-4/5 flex-col gap-6 p-2 pb-20">
      <TableFilters
        transactionFilters={transactionFilters}
        handleFilterChange={handleFilterChange}
        resetFilters={resetFilters}
      />
      <table className="flex w-full flex-col bg-[#191A22] text-white">
        <thead className="flex w-full border-b border-[#2F3037] py-2">
          <tr className="grid w-full grid-cols-9 *:text-start *:text-base *:font-normal *:text-[#5A5C6F]">
            <th className="col-span-1">ID</th>
            <th className="col-span-1">Date</th>
            <th className="col-span-2">Amount</th>
            <th className="col-span-2">Type</th>
            <th className="col-span-3">Status</th>
          </tr>
        </thead>
        <tbody className="flex w-full flex-col">
          {paginatedTransactions.map((transaction, index) => (
            <TransactionItem key={index} {...transaction} />
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
