import DropdownFilter from '../../ui/DropdownFilter';
import DateInput from '../../ui/DateInput';
import { motion } from 'framer-motion';
import Refresh from '../../../Icons/Refresh';

interface TransactionFilters {
  status: string;
  type: string;
  startDate: string;
  endDate: string;
}

interface TableFiltersProps {
  transactionFilters: TransactionFilters;
  handleFilterChange: <K extends keyof TransactionFilters>(key: K, value: TransactionFilters[K]) => void;
  resetFilters: () => void;
}

export default function TableFilters({ transactionFilters, handleFilterChange, resetFilters }: TableFiltersProps) {
  return (
    <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
      <h1 className="pb-4 text-2xl font-semibold">Transactions</h1>
      <div className="flex w-full flex-col items-start gap-2 md:w-5/6 md:flex-row md:items-center">
        <motion.button
          className="group flex aspect-square size-[45px] items-center justify-center rounded-[6px] border border-white/10 bg-[#1B1D28]"
          whileHover={{
            borderColor: '#fff',
            scale: 1.05,
            boxShadow: '0 0 15px rgba(256, 256, 256, 0.75)',
            cursor: 'pointer',
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          onClick={resetFilters}
        >
          <Refresh className="fill-[#5A5C6F] transition-all duration-500 ease-in-out group-hover:rotate-[270deg] group-hover:fill-white" />
        </motion.button>
        <DropdownFilter
          selected={transactionFilters.status}
          setSelected={(value) => handleFilterChange('status', value)}
          options={['All', 'Active', 'Inactive']}
          label="Status: "
          width="w-full md:w-1/4"
        />
        <DropdownFilter
          selected={transactionFilters.type}
          setSelected={(value) => handleFilterChange('type', value)}
          options={['All', 'Purchase', 'Withdrawal']}
          label="Type: "
          width="w-full md:w-1/4"
        />
        <DateInput
          label="From"
          placeholder="Date"
          value={transactionFilters.startDate}
          onChange={(value) => handleFilterChange('startDate', value)}
          width="w-full md:w-1/4"
        />
        <DateInput
          label="To"
          placeholder="Date"
          value={transactionFilters.endDate}
          onChange={(value) => handleFilterChange('endDate', value)}
          width="w-full md:w-1/4"
        />
      </div>
    </div>
  );
}
