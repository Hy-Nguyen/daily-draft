import { AnimatePresence, motion } from 'framer-motion';
import GameFilters from '../components/Landing/GameFilters';
import DraftItem from '../components/MyDrafts/DraftItem';
import DraftFilter from '../components/MyDrafts/Filter';
import { useState } from 'react';

export default function Drafts() {
  // Filter States
  const [sports, setSports] = useState('Football');
  const [leagues, setLeagues] = useState('UEFA Euro 2024');
  const [duration, setDuration] = useState('All Duration');
  const [draftTypes, setDraftTypes] = useState('All Types');
  const [drafts, setDrafts] = useState('All Drafts');

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
      <main className="bg-lobby flex min-h-screen w-screen justify-center text-[#5A5C6F]">
        <div id="container" className="mt-[5vh] flex h-full w-10/12 max-w-[2000px] space-x-4">
          <DraftFilter
            states={[sports, leagues, duration, draftTypes, drafts]}
            setStates={[setSports, setLeagues, setDuration, setDraftTypes, setDrafts]}
          />
          <AnimatePresence>
            <div id="my-drafts" className="h-full w-3/4 rounded-[8px] bg-[#191A22] p-6">
              <div id="header" className="flex w-full justify-between">
                <h1 className="text-[18px] text-white">My Drafts</h1>
                <div id="filters" className="flex space-x-3">
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
                  <motion.div id="header" className="grid grid-cols-12 border-b border-white/10 pb-4">
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
                  <motion.div id="header" className="grid grid-cols-12 border-b border-white/10 pb-4">
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
