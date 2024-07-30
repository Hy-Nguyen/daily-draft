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
      <TextContainer label="Starts At" text="4 April 2024 00:00" />
      <TextContainer label="End At" text="4 April 2024 02:45" />
      <TextContainer label="Entrants" text="15 Teams" />
      <TextContainer label="Guaranteed Prizepool" text="0.1 SOL" />
      <TextContainer label="Prizepool" text="0.1 SOL" />
      <TextContainer label="ID" text="873030" />
      <TextContainer label="Game Week" text="31" />
      <TextContainer label="Rake" text="0.005 SOL" />
      <div className="grid w-full grid-cols-2 items-center justify-center">
        <h1 className="text-base font-normal text-[#5A5C6F]">Details</h1>
        <div className="flex w-full flex-row gap-2">
          <GreenBadge time="50M" />
          <YellowBadge />
        </div>
      </div>
    </motion.div>
  );
}

function TextContainer({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid w-full grid-cols-2 items-center justify-center">
      <h1 className="text-base font-normal text-[#5A5C6F]">{label}</h1>
      <h1 className="text-base font-medium text-white">{text}</h1>
    </div>
  );
}
