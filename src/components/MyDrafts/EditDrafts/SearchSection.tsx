import { motion } from 'framer-motion';
import Search from '../../../Icons/SearchIcon';
import Refresh from '../../../Icons/Refresh';

export default function SearchSection({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div id="search-section" className="flex w-full items-center gap-4">
      <div id="search-bar" className="border-draft bg-draft my-3 flex w-3/5 items-center justify-center rounded-[6px]">
        <Search />
        <input
          type="text"
          placeholder="Search for a player"
          className="h-[40px] w-full rounded-r-[6px] bg-inherit text-xs text-[#5A5C6F] transition-all focus:text-white focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <motion.div
        id="reset-search"
        className="border-draft group flex w-2/5 flex-row space-x-2 hover:cursor-pointer"
        onClick={() => setSearch('')}
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
      >
        <div className="flex h-[40px] w-full items-center justify-center space-x-3 text-inherit">
          <h1 className="text-xs text-inherit">Reset</h1>
          <Refresh className="fill-[#5A5C6F] transition-all duration-500 ease-in-out group-hover:rotate-[270deg] group-hover:fill-white" />
        </div>
      </motion.div>
    </div>
  );
}
