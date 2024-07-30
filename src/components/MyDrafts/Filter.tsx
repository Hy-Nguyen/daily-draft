import { motion } from 'framer-motion';
import Refresh from '../../Icons/Refresh';
import DropdownFilter from '../ui/DropdownFilter';

export default function DraftFilter({
  states,
  setStates,
  defaultStates,
}: {
  states: any[];
  setStates: any[];
  defaultStates: any[];
}) {
  const resetStates = () => {
    setStates.forEach((set, index) => {
      set(defaultStates[index].value);
    });
  };
  return (
    <>
      <form
        id="filters"
        className="h-full w-full rounded-[8px] bg-[#1A1B23] px-6 py-4 xl:w-1/4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div id="filter-header" className="flex h-[50px] w-full items-center justify-between">
          <h1 className="text-2xl">Filters</h1>
          <motion.button
            id="reset-filters"
            onClick={resetStates}
            className="group flex aspect-square w-[40px] items-center justify-center rounded-[6px] border border-white/10 bg-[#1B1D28]"
            initial={{
              color: '#5A5C6F',
            }}
            whileHover={{
              color: '#fff',
              borderColor: '#fff',
              boxShadow: '0 0 15px rgba(256, 256, 256, 0.75)',
              cursor: 'pointer',
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <Refresh className="fill-[#5A5C6F] transition-all duration-500 ease-in-out group-hover:rotate-[270deg] group-hover:fill-white" />
          </motion.button>
        </div>
        <div className="mb-6 mt-4">
          <hr
            style={{
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          />
        </div>
        <div id="filter-content" className="flex h-full w-full flex-col gap-4">
          <DropdownFilter
            selected={states[0]}
            setSelected={setStates[0]}
            options={['Football', 'Basketball', 'Baseball', 'Hockey']}
            label="Sports"
          />
          <DropdownFilter
            selected={states[1]}
            setSelected={setStates[1]}
            options={['UEFA Euro 2024', 'UEFA Champions League', 'Premier League']}
            label="Leagues"
          />
          <DropdownFilter
            selected={states[2]}
            setSelected={setStates[2]}
            options={['50M', '2H', '1D']}
            label="Duration"
          />
          <DropdownFilter
            selected={states[3]}
            setSelected={setStates[3]}
            options={['All Types', 'Type 1', 'Type 2', 'Type 3']}
            label="Draft Types"
          />
          <DropdownFilter
            selected={states[4]}
            setSelected={setStates[4]}
            options={['All Drafts', 'Draft 1', 'Draft 2', 'Draft 3']}
            label="Drafts"
          />
          <motion.button
            type="submit"
            className="my-2 h-fit w-full rounded-[6px] bg-[#52BE70] py-2 text-2xl font-semibold text-white"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 4px 8px 0px rgba(82, 190, 112, 0.2), 0px 6px 20px 0px rgba(82, 190, 112, 0.19)',
            }}
          >
            Apply Filters
          </motion.button>
        </div>
      </form>
    </>
  );
}
