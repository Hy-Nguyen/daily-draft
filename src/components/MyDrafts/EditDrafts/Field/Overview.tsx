import { match } from 'assert';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import DropdownArrow from '../../../../Icons/DropdownArrow';

const matches = [
  {
    home: 'England',
    away: 'Germany',
    time: '12:00',
  },
  {
    home: 'France',
    away: 'Portugal',
    time: '14:00',
  },
  {
    home: 'Italy',
    away: 'Spain',
    time: '14:00',
  },
  {
    home: 'Netherlands',
    away: 'Belgium',
    time: '9:00',
  },
  {
    home: 'Croatia',
    away: 'Sweden',
    time: '18:00',
  },
];

export default function Overview() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="overview" className="w-10/12">
      <div className="border-draft h-full">
        <button onClick={toggleDropdown} className="flex w-full items-center justify-between p-4">
          <h1 className="text-sm">Saturday, 6 April 2024 ({matches.length} matches) </h1>
          <DropdownArrow isOpen={isOpen} className="" />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}>
              {matches.map((match, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center border-t border-white/10 px-4 py-2"
                  whileHover={{
                    backgroundColor: '#0000000F',
                  }}
                >
                  <div className="grid w-2/5 grid-cols-3 [&>h1]:cursor-default [&>h1]:font-semibold">
                    <h1 className="text-start text-[#A7ADB9]">{match.home}</h1>
                    <h1 className="text-center text-[#52BE70]">{match.time}</h1>
                    <h1 className="text-end text-[#A7ADB9]">{match.away}</h1>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
