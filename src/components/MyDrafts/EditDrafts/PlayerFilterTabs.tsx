import { motion } from 'framer-motion';
import { act } from 'react';

interface PlayerFilterTabProps {
  label: string;
  currentFilled?: string;
  maxFilled?: string;
  active: boolean;
  setPlayerType: React.Dispatch<React.SetStateAction<any>>;
}

export default function PlayerFilterTab({
  label,
  currentFilled,
  maxFilled,
  active,
  setPlayerType,
}: PlayerFilterTabProps) {
  function handleChange() {
    if (label === 'All') {
      setPlayerType(null);
    } else {
      setPlayerType(label);
    }
  }
  return (
    <motion.button
      className={`h-git group flex w-11/12 items-center justify-center rounded-[6px] border bg-[#1B1D28] py-2 ${active ? 'game-filter-glow border-[#52BE70]' : 'border-white/5'}`}
      onClick={handleChange}
      whileHover={{ borderColor: '#52BE70' }}
      animate={{
        borderColor: active ? '#52BE70' : 'rgba(255, 255, 255, 0.05)',
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className={`text-center text-[12px] font-semibold transition-all duration-500 ease-in-out ${active ? 'text-[#52BE70]' : 'text-[#5A5C6F] group-hover:text-[#52BE70]'}`}
      >
        {label} {currentFilled && maxFilled ? `${currentFilled}/${maxFilled}` : ''}
      </motion.p>
    </motion.button>
  );
}
