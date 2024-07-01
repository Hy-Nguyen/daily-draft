import { motion } from 'framer-motion';

interface LeaderboardSlotProps {
  rank: number;
  avatar: string;
  name: string;
  played: number;
  won: number;
}

export default function LeaderboardSlot({ rank, avatar, name, played, won }: LeaderboardSlotProps) {
  return (
    <motion.div
      id="header"
      className="[&>*]: grid grid-cols-12 border-b border-white/10 py-4 text-white [&>*]:flex [&>*]:items-center [&>h1]:pl-4"
      whileHover={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1 className="col-span-1 text-center text-[#52BE70]">{rank}</h1>
      <div className="col-span-7" content="">
        <img src={avatar} alt={name} className="mr-4 h-14 w-14 rounded-full" />
        <h1>{name}</h1>
      </div>
      <h1 className="col-span-2">{played}</h1>
      <h1 className="col-span-2">{won}</h1>
    </motion.div>
  );
}
