import { motion } from 'framer-motion';

export default function GameFilters({
  text,
  active,
  setActive,
}: {
  text: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <motion.button
      className={`flex h-[30px] w-fit items-center justify-center rounded-[6px] border bg-[#1B1D28] px-3 ${active ? 'game-filter-glow border-[#52BE70]' : 'border-white/5'}`}
      onClick={() => setActive(text)}
      whileHover={{ borderColor: '#52BE70' }}
      animate={{
        borderColor: active ? '#52BE70' : 'rgba(255, 255, 255, 0.05)',
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className={`whitespace-nowrap text-center text-[12px] font-semibold ${active ? 'text-[#52BE70]' : 'text-[#5A5C6F]'}`}
        animate={{
          color: active ? '#52BE70' : '#5A5C6F',
        }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.p>
    </motion.button>
  );
}
