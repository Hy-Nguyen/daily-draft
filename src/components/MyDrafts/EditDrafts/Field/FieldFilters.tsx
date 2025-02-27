import { motion } from 'framer-motion';
import Lightning from '../../../../Icons/Lightning';
import Refresh from '../../../../Icons/Refresh';
import Reset from '../../../../Icons/Reset';
import DotDotDot from '../../../../Icons/DotDotDot';
import DropdownFilter from '../../../ui/DropdownFilter';

interface FieldFiltersProps {
  name: any;
  setName: any;
  position: any;
  setPosition: any;
  onResetPlayers: () => void;
}

export default function FieldFilters({ name, setName, position, setPosition, onResetPlayers }: FieldFiltersProps) {
  return (
    <div id="buttons" className="flex w-full flex-col justify-between gap-4 xl:flex-row">
      <div id="left" className="flex w-full flex-col gap-4 xl:w-1/2">
        <div id="top" className="flex h-[40px] w-full gap-4">
          <div className="flex w-1/2 items-center justify-center gap-2 rounded-[8px] border border-[#52BE70] bg-[#52BE70]/10 py-4">
            <Lightning />
            <h1>Autocomplete</h1>
          </div>
          <div className="flex w-1/2 justify-between">
            <motion.button
              className="border-draft group flex h-full w-[30%] flex-row items-center justify-center space-x-2 hover:cursor-pointer"
              initial={{
                color: '#5A5C6F',
              }}
              whileHover={{
                color: '#fff',
                borderColor: '#fff',
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              onClick={onResetPlayers}
            >
              <Refresh className="fill-[#5A5C6F] transition-all duration-500 ease-in-out group-hover:rotate-[270deg] group-hover:fill-white" />
            </motion.button>
            <motion.div
              id="reset-search"
              className="border-draft group flex h-full w-[30%] flex-row items-center justify-center space-x-2 hover:cursor-pointer"
              initial={{
                color: '#5A5C6F',
              }}
              whileHover={{
                color: '#fff',
                borderColor: '#FF1E31',
              }}
            >
              <Reset className="fill-[#5A5C6F] transition-all duration-500 ease-in-out group-hover:fill-[#FF1E31]" />
            </motion.div>
            <motion.div
              id="reset-search"
              className="border-draft group flex h-full w-[30%] flex-row items-center justify-center space-x-2 hover:cursor-pointer"
              initial={{
                color: '#5A5C6F',
              }}
              whileHover={{
                color: '#fff',
                borderColor: '#fff',
              }}
            >
              <DotDotDot className="fill-[#5A5C6F] transition-all duration-500 ease-in-out group-hover:fill-white" />
            </motion.div>
          </div>
        </div>
        <div id="bottom" className="flex h-[40px] w-full gap-4">
          <div className="flex w-1/2 items-center justify-center rounded-[8px] bg-[#52BE70] py-4 uppercase">
            <h1>90m/90m</h1>
          </div>
          <div className="flex w-1/2 items-center justify-center rounded-[8px] bg-[#52BE70] py-4">
            <h1>0/6 Players</h1>
          </div>
        </div>
      </div>
      <div id="right" className="flex w-full flex-col gap-4 xl:w-1/2">
        <div id="top" className="flex h-[40px] w-full gap-4">
          <motion.div
            className="flex w-full items-center justify-center rounded-[8px] bg-[#52BE70] py-4 font-bold"
            whileHover={{
              boxShadow: '0px 0px 10px 0px #52BE70',
              fontSize: '24px',
            }}
          >
            <h1>Participate (FREE)</h1>
          </motion.div>
        </div>
        <div id="bottom" className="flex h-[40px] w-full gap-4">
          <div className="w-1/2">
            <DropdownFilter
              options={['one', 'two', 'three']}
              selected={name}
              setSelected={setName}
              height="40"
              className="z-10"
            />
          </div>
          <div className="w-1/2">
            <DropdownFilter
              options={['Captain', 'V. Captain', 'three']}
              selected={position}
              setSelected={setPosition}
              height="40"
              className="z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
