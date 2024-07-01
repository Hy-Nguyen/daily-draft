import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import DropdownArrow from '../../Icons/DropdownArrow';

interface FilterItemProps {
  selected: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  options: any[];
  label?: string;
  height?: string;
  className?: string;
}

export default function FilterItem({
  selected,
  setSelected,
  options,
  label,
  height = '50',
  className,
}: FilterItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className={`${className} bg-draft border-draft relative flex h-[${height}px] w-full items-center justify-start`}
    >
      <div className="flex w-full items-center justify-between p-4" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="text-draft text-sm">{label || ''}:</h1>

        <div className="flex items-center space-x-3 text-white">
          <h1>{selected ? selected : options[0]}</h1>
          <DropdownArrow isOpen={isOpen} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`dropdown-content bg-draft border-draft absolute left-0 z-10 top-[${Number(height) + 10}px] h-fit w-full space-y-2 overflow-hidden`}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {options.map((option) => (
              <motion.div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="flex items-center p-2"
                whileHover={{
                  backgroundColor: '#FFFFFF1E',
                }}
              >
                <h1 className="w-full text-center text-lg text-white">{option}</h1>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
