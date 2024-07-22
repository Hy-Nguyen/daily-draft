import FilterItem from './FilterItem';
import { motion } from 'framer-motion';
import Refresh from '../../Icons/Refresh';

export default function DraftFilter({ states, setStates }: { states: any[]; setStates: any[] }) {
  return (
    <>
      <form
        id="filters"
        className="h-full w-full rounded-[8px] bg-[#1A1B23] px-6 py-4 md:w-1/4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div id="filter-header" className="flex h-[50px] w-full items-center justify-between">
          <h1 className="text-2xl">Filters</h1>
          <motion.button
            id="reset-filters"
            type="reset"
            className="flex aspect-square w-[40px] items-center justify-center rounded-[6px] border border-white/10 bg-[#1B1D28]"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px rgba(256, 256, 256, 0.5)',
            }}
          >
            <Refresh />
          </motion.button>
        </div>
        <div className="mb-6 mt-4">
          <hr
            style={{
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          />
        </div>
        <div id="filter-content" className="h-full w-full">
          <FilterItem
            id="Sports"
            label="Sports"
            options={['Football', 'Basketball', 'Baseball', 'Hockey']}
            selected={states[0]}
            setSelected={setStates[0]}
          />
          <FilterItem
            id="Leagues"
            label="Leagues"
            options={['UEFA Euro 2024', 'UEFA Champions League', 'Premier League']}
            selected={states[1]}
            setSelected={setStates[1]}
          />
          <FilterItem
            id="Duration"
            label="Duration"
            options={['All Duration', '50M', '2H']}
            selected={states[2]}
            setSelected={setStates[2]}
          />
          <FilterItem
            id="Draft Types"
            label="Draft Types"
            options={['All Types', 'Type 1', 'Type 2']}
            selected={states[3]}
            setSelected={setStates[3]}
          />
          <FilterItem
            id="Draft"
            label="Draft"
            options={['All Drafts', 'Drafts', 'Drafts']}
            selected={states[4]}
            setSelected={setStates[4]}
          />
          <motion.button
            type="submit"
            className="my-2 h-[60px] w-full rounded-[6px] bg-[#52BE70] text-2xl font-semibold text-white"
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
