import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import LeaderboardFilter from '../components/Leaderboard/LeaderboardFilter';
import NavBar from '../components/NavBar';
import LeaderboardSlot from '../components/Leaderboard/LeaderboardSlot';
import leaderboardData from '../data/leaderboard.json';
import Pagination from '../components/MyDrafts/EditDrafts/Field/Pagination';

interface Slot {
  avatar: string;
  name: string;
  played: number;
  rank: number;
  won: number;
}

export default function Leaderboards() {
  const [leagues, setLeagues] = useState('');
  const [duration, setDuration] = useState('');
  const [draftTypes, setDraftTypes] = useState('');
  const [geography, setGeography] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10;
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentListing = leaderboardData.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const totalPages = Math.ceil(leaderboardData.length / playersPerPage);

  return (
    <>
      <NavBar />
      <main className="bg-lobby flex min-h-screen w-screen justify-center text-[#5A5C6F]">
        <div id="container" className="mt-[5vh] flex h-full w-10/12 max-w-[2000px] space-x-4">
          <LeaderboardFilter
            states={[leagues, duration, draftTypes, geography]}
            setStates={[setLeagues, setDuration, setDraftTypes, setGeography]}
          />
          <AnimatePresence>
            <div id="my-drafts" className="h-full w-3/4 rounded-[8px] bg-[#191A22] p-6">
              <div id="header" className="flex w-full justify-between">
                <h1 className="text-2xl font-semibold text-white">Leaderboard</h1>
                <div id="filters" className="flex space-x-3"></div>
              </div>
              <motion.div id="table" className="relative mt-6 pb-[70px]">
                <motion.div id="header" className="grid grid-cols-12 border-b border-white/10 pb-4">
                  <h1 className="col-span-1">Rank</h1>
                  <h1 className="col-span-7">Name</h1>
                  <h1 className="col-span-2">Played</h1>
                  <h1 className="col-span-2">Won</h1>
                </motion.div>
                <motion.div id="my-drafts">
                  {currentListing.map((slot) => (
                    <LeaderboardSlot {...slot} />
                  ))}
                </motion.div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
