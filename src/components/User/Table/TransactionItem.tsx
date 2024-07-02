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
      className="grid w-full grid-cols-9 items-center border-b border-[#2F3037] py-4 *:text-start *:text-base *:font-normal *:text-white"
      whileHover={{ backgroundColor: 'rgb(0,0,0,0.2)' }}
    >
      <th className="col-span-1 pl-2">{transactionId}</th>
      <th className="col-span-1">{dateFormatter(date)}</th>
      <th className="col-span-2 flex gap-3">
        {<SOLIcon />}
        {amount}
      </th>
      <th className="col-span-2">{type}</th>
      <th className="col-span-3">
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
