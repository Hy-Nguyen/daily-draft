import FilterItem from './FilterItemLeaderboard';
import { motion } from 'framer-motion';
import Refresh from '../../Icons/Refresh';

export default function LeaderboardFilter({ states, setStates }: { states: any[]; setStates: any[] }) {
  // Initial states
  const initialStates = ['UEFA Euro 2024', 'All Duration', 'All Types', 'Geography'];

  // Reset function
  function resetFilters() {
    setStates[0](initialStates[0]);
    setStates[1](initialStates[1]);
    setStates[2](initialStates[2]);
    setStates[3](initialStates[3]);
  }

  return (
    <>
      <form
        id="filters"
        className="h-full w-1/4 rounded-[8px] bg-[#1A1B23] px-6 py-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div id="filter-header" className="flex h-[50px] w-full items-center justify-between">
          <h1 className="text-2xl">Filters</h1>
          <motion.button
            id="reset-filters"
            onClick={resetFilters}
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
            label="Leagues"
            options={['UEFA Euro 2024', 'UEFA Champions League', 'Premier League']}
            selected={states[0]}
            setSelected={setStates[0]}
            className="mb-[12px]"
          />
          <FilterItem
            label="Duration"
            options={['All Duration', '50M', '2H']}
            selected={states[1]}
            setSelected={setStates[1]}
            className="mb-[12px]"
          />
          <FilterItem
            label="Draft Types"
            options={['All Types', 'Type 1', 'Type 2']}
            selected={states[2]}
            setSelected={setStates[2]}
            className="mb-[12px]"
          />
          <FilterItem
            label="Geography"
            options={['Geography', 'Geography', 'Geography']}
            selected={states[3]}
            setSelected={setStates[3]}
            className="mb-[12px]"
          />
          <motion.button
            type="submit"
            className="mb-2 mt-4 h-[50px] w-full rounded-[6px] bg-[#52BE70] text-2xl font-semibold text-white"
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
