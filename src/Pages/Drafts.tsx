import { AnimatePresence, motion } from 'framer-motion';
import GameFilters from '../components/Landing/GameFilters';
import DraftItem from '../components/MyDrafts/DraftItem';
import DraftFilter from '../components/MyDrafts/Filter';
import { useState } from 'react';

export default function Drafts() {
  const defaultFilterStates = [
    { name: 'sports', value: 'Football' },
    { name: 'leagues', value: 'UEFA Euro 2024' },
    { name: 'duration', value: 'All Duration' },
    { name: 'draftTypes', value: 'All Types' },
    { name: 'drafts', value: 'All Drafts' },
  ];

  // Filter States
  const [sports, setSports] = useState(defaultFilterStates[0].value);
  const [leagues, setLeagues] = useState(defaultFilterStates[1].value);
  const [duration, setDuration] = useState(defaultFilterStates[2].value);
  const [draftTypes, setDraftTypes] = useState(defaultFilterStates[3].value);
  const [drafts, setDrafts] = useState(defaultFilterStates[4].value);

  // Draft Filter States
  const [filterDraft, setFilterDraft] = useState('Upcoming');

  const filters = ['Upcoming', 'Completed', 'Cancelled', 'Live'];

  const variants = {
    hidden: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <>
      <main className="bg-lobby flex min-h-screen w-screen justify-center pb-6 text-[#5A5C6F] xl:pb-0">
        <div
          id="container"
          className="mt-[5vh] flex h-full w-full max-w-[2000px] flex-col gap-4 px-4 xl:flex-row xl:px-6"
        >
          <DraftFilter
            states={[sports, leagues, duration, draftTypes, drafts]}
            setStates={[setSports, setLeagues, setDuration, setDraftTypes, setDrafts]}
            defaultStates={defaultFilterStates}
          />
          <AnimatePresence>
            <div id="my-drafts" className="h-full w-full rounded-[8px] bg-[#191A22] p-6 xl:w-3/4">
              <div id="header" className="flex w-full flex-col justify-between gap-2 md:flex-row">
                <h1 className="min-w-fit text-[18px] text-white">My Drafts</h1>
                <div
                  id="filters"
                  className="scrollbar scrollbar-thumb-[#52BE70] scrollbar-track-black flex w-full space-x-3 overflow-x-scroll md:overflow-x-visible"
                >
                  {filters.map((filter) => (
                    <GameFilters
                      key={filter}
                      text={filter}
                      active={filter === filterDraft}
                      setActive={setFilterDraft}
                    />
                  ))}
                </div>
              </div>

              {filterDraft === 'Upcoming' && (
                <motion.div
                  id="table"
                  className="mt-6"
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div id="header" className="hidden grid-cols-12 border-b border-white/10 pb-4 lg:grid">
                    <h1 className="col-span-4">Drafts</h1>
                    <h1 className="col-span-1">Entry Fee</h1>
                    <h1 className="col-span-1">Prize</h1>
                    <h1 className="col-span-2">Entries</h1>
                    <div className="flex">
                      <h1>Date</h1>
                      <div>{'>'}</div>
                    </div>
                  </motion.div>
                  <motion.div id="my-drafts">
                    <DraftItem completed={false} />
                    <DraftItem completed={false} />
                    <DraftItem completed={false} />
                    <DraftItem completed={false} />
                    <DraftItem completed={false} />
                  </motion.div>
                </motion.div>
              )}
              {filterDraft === 'Completed' && (
                <motion.div
                  id="table"
                  className="mt-6"
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div id="header" className="hidden grid-cols-12 border-b border-white/10 pb-4 lg:grid">
                    <h1 className="col-span-4">Drafts</h1>
                    <h1 className="col-span-1">Entry Fee</h1>
                    <h1 className="col-span-1">Prize</h1>

                    <h1 className="col-span-1">Winning</h1>
                    <h1 className="col-span-1">Score</h1>
                    <h1 className="col-span-1">Rank</h1>
                    <div className="flex">
                      <h1>Date</h1>
                    </div>
                  </motion.div>
                  <motion.div id="my-drafts">
                    <DraftItem completed />
                    <DraftItem completed />
                    <DraftItem completed />
                    <DraftItem completed />
                    <DraftItem completed />
                  </motion.div>
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
