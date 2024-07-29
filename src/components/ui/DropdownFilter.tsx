import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import DropdownArrow from '../../Icons/DropdownArrow';

interface DropdownFilterProps {
  selected: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  options: any[];
  label?: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function DropdownFilter({
  selected,
  setSelected,
  options,
  label,
  height,
  className,
  width = 'w-full',
}: DropdownFilterProps) {
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
      className={`${className} bg-draft border-draft relative flex h-[${height || 50}px] ${width} items-center justify-start`}
    >
      <div className="flex w-full items-center justify-between gap-2 px-2 py-4" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="text-draft text-sm lg:text-base">{label || ''}</h1>

        <div className="flex items-center gap-2 text-sm lg:text-base">
          <h1>{selected ? selected : 'All'}</h1>
          <DropdownArrow isOpen={isOpen} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="dropdown-content bg-draft border-draft absolute left-0 top-[60px] z-20 h-fit w-full space-y-2 overflow-hidden"
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
                <h1 className="w-full text-center text-lg">{option}</h1>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
