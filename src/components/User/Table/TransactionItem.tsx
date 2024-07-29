import SOLIcon from '../../ui/SOLIcon';
import LiveStatus from '../../Landing/GameDisplay/StartsIn/LiveBlinker';
import { motion } from 'framer-motion';

interface TransactionItemProps {
  transactionId: string;
  date: string;
  amount: number;
  type: string;
  status: boolean;
}

export default function TransactionItem({ transactionId, date, amount, type, status }: TransactionItemProps) {
  return (
    <motion.tr
      className="flex w-full grid-cols-9 flex-col items-center gap-2 border-b border-[#2F3037] px-2 py-4 *:text-start *:text-base *:font-normal *:text-white xl:grid xl:gap-0 xl:px-0"
      whileHover={{ backgroundColor: 'rgb(0,0,0,0.2)' }}
    >
      <th className="col-span-1 flex w-full justify-between pl-2 xl:w-fit">
        <h1 className="text-slate-draft xl:hidden">ID:</h1>
        <h1>{transactionId}</h1>
      </th>
      <th className="col-span-1 flex w-full justify-between pl-2 xl:w-fit">
        <h1 className="text-slate-draft xl:hidden">Date:</h1>
        <h1>{dateFormatter(date)}</h1>
      </th>
      <th className="col-span-2 flex w-full justify-between pl-2 xl:w-fit">
        <h1 className="text-slate-draft xl:hidden">Amount:</h1>
        <div className="flex w-fit gap-3 xl:w-full">
          <h1>{<SOLIcon />}</h1>
          <h1>{amount}</h1>
        </div>
      </th>
      <th className="col-span-2 flex w-full justify-between pl-2 xl:w-fit">
        <h1 className="text-slate-draft xl:hidden">Type:</h1>
        <h1>{type}</h1>
      </th>
      <th className="col-span-3 flex w-full justify-between pl-2 xl:w-fit">
        <h1 className="text-slate-draft xl:hidden">Status:</h1>
        <LiveStatus live={status} />
      </th>
    </motion.tr>
  );
}

const dateFormatter = (input: string) => {
  let date = new Date(input);
  let month = date.toLocaleString('default', { month: '2-digit' });
  let day = date.getDate().toString().padStart(2, '0');
  let year = date.getFullYear().toString().slice(-2);
  return `${month}/${day}/${year}`;
};
