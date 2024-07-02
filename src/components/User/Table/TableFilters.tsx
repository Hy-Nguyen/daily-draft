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
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Transactions</h1>
      <div className="flex w-5/6 items-center gap-2">
        <motion.button
          className="flex aspect-square size-[45px] items-center justify-center rounded-[6px] border border-white/10 bg-[#1B1D28]"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 15px rgba(256, 256, 256, 0.5)',
          }}
          onClick={resetFilters}
        >
          <Refresh />
        </motion.button>
        <DropdownFilter
          selected={transactionFilters.status}
          setSelected={(value) => handleFilterChange('status', value)}
          options={['All', 'Active', 'Inactive']}
          label="Status: "
          width="w-1/4"
        />
        <DropdownFilter
          selected={transactionFilters.type}
          setSelected={(value) => handleFilterChange('type', value)}
          options={['All', 'Purchase', 'Withdrawal']}
          label="Type: "
          width="w-1/4"
        />
        <DateInput
          label="From"
          placeholder="Date"
          value={transactionFilters.startDate}
          onChange={(value) => handleFilterChange('startDate', value)}
          width="w-1/4"
        />
        <DateInput
          label="To"
          placeholder="Date"
          value={transactionFilters.endDate}
          onChange={(value) => handleFilterChange('endDate', value)}
          width="w-1/4"
        />
      </div>
    </div>
  );
}
