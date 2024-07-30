'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import LeaderboardSlot from '../components/Leaderboard/LeaderboardSlot';
import leaderboardData from '../data/leaderboard.json';
import Pagination from '../components/ui/Pagination';

export default function Leaderboard() {
  const [currentUser, setCurrentUser] = useState(leaderboardData[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 6;
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;

  useEffect(() => {
    const randomPlayer = getRandomPlayer(leaderboardData);
    setCurrentUser(randomPlayer);
  }, []);

  const prepareLeaderboardData = () => {
    if (!currentUser) return leaderboardData.slice(indexOfFirstPlayer, indexOfLastPlayer);
    const otherPlayers = leaderboardData.filter((player) => player.rank !== currentUser.rank);
    const slicedPlayers = otherPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);
    return [currentUser, ...slicedPlayers];
  };

  const currentListing = prepareLeaderboardData();

  const totalPages = Math.ceil(leaderboardData.length / playersPerPage);

  function getRandomPlayer(players: any) {
    if (!Array.isArray(players) || players.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  }

  return (
    <>
      <main className="bg-lobby flex min-h-screen w-screen justify-center pb-10 text-[#5A5C6F]">
        <div id="container" className="mt-[3vh] flex h-full w-full max-w-[2000px] space-x-4 px-4 xl:px-6">
          <AnimatePresence>
            <div
              id="my-drafts"
              className="relative h-full min-h-[840px] w-full rounded-[8px] bg-[#191A22] p-3 pb-[80px] md:p-6"
            >
              <div id="header" className="flex w-full justify-between">
                <h1 className="text-2xl font-semibold text-white">Leaderboard</h1>
              </div>
              <motion.table className="mt-6 w-full pb-[70px]">
                <motion.tr
                  id="header"
                  className="grid w-full grid-cols-12 border-b border-white/10 pb-4 text-sm *:font-medium md:text-base"
                >
                  <th className="col-span-1">
                    <p className="w-full text-start">#</p>
                  </th>
                  <th className="col-span-7">
                    <p className="w-full text-start">Name</p>
                  </th>
                  <th className="col-span-2">
                    <p className="w-full text-center">Played</p>
                  </th>
                  <th className="col-span-2">
                    <p className="w-full text-center">Won</p>
                  </th>
                </motion.tr>
                <motion.div id="my-drafts">
                  {currentListing.map((slot, index) => (
                    <LeaderboardSlot
                      key={slot.rank}
                      {...slot}
                      isCurrentUser={index === 0 && slot.rank === currentUser?.rank}
                    />
                  ))}
                </motion.div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </motion.table>
            </div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
