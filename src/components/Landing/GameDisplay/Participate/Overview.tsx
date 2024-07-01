import { motion } from 'framer-motion';
import { GreenBadge, YellowBadge } from '../Tournament/Badges';

export default function OverviewBody() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
          mass: 1,
          duration: 0.5,
        },
      }}
      className="w-full space-y-3"
    >
      <div className="grid w-full grid-cols-2">
        <h1 className="text-base font-normal text-[#5A5C6F]">Starts At</h1>
        <h1 className="text-base font-medium text-white">4 April 2024 00:00</h1>
      </div>
      <div className="grid w-full grid-cols-2">
        <h1 className="text-base font-normal text-[#5A5C6F]">End At</h1>
        <h1 className="text-base font-medium text-white">4 April 2024 02:45</h1>
      </div>
      <div className="grid w-full grid-cols-2">
        <h1 className="text-base font-normal text-[#5A5C6F]">Entrants</h1>
        <h1 className="text-base font-medium text-white">15 Teams</h1>
      </div>
      <div className="grid w-full grid-cols-2">
        <h1 className="text-base font-normal text-[#5A5C6F]">Guaranteed Prizepool</h1>
        <h1 className="text-base font-medium text-white">0.1 SOL</h1>
      </div>
      <div className="grid w-full grid-cols-2">
        <h1 className="text-base font-normal text-[#5A5C6F]">Prizepool</h1>
        <h1 className="text-base font-medium text-white">0.1 SOL</h1>
      </div>
      <div className="grid w-full grid-cols-2">
        <h1 className="text-base font-normal text-[#5A5C6F]">ID</h1>
        <h1 className="text-base font-medium text-white">873030</h1>
      </div>
      <div className="grid w-full grid-cols-2">
        <h1 className="text-base font-normal text-[#5A5C6F]">Game Week</h1>
        <h1 className="text-base font-medium text-white">31</h1>
      </div>
      <div className="grid w-full grid-cols-2">
        <h1 className="text-base font-normal text-[#5A5C6F]">Rake</h1>
        <h1 className="text-base font-medium text-white">0.005 SOL</h1>
      </div>
      <div className="grid w-full grid-cols-2">
        <h1 className="text-base font-normal text-[#5A5C6F]">Details</h1>
        <div className="flex w-full">
          <GreenBadge time="50M" />
          <YellowBadge />
        </div>
      </div>
    </motion.div>
  );
}
