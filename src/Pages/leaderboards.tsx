'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import LeaderboardSlot from '../components/Leaderboard/LeaderboardSlot';
import leaderboardData from '../data/leaderboard.json';
import Pagination from '../components/ui/Pagination';

export default function Leaderboards() {
  const [currentUser, setCurrentUser] = useState(leaderboardData[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 9; // Reduced to 9 to make room for the current user
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;

  useEffect(() => {
    // Select a random player as the current user when the component mounts
    const randomPlayer = getRandomPlayer(leaderboardData);
    setCurrentUser(randomPlayer);
  }, []);

  const prepareLeaderboardData = () => {
    if (!currentUser) return leaderboardData.slice(indexOfFirstPlayer, indexOfLastPlayer);

    // Filter out the current user from the main list
    const otherPlayers = leaderboardData.filter((player) => player.rank !== currentUser.rank);

    // Slice the remaining players
    const slicedPlayers = otherPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);

    // Return an array with the current user at the top, followed by other players
    return [currentUser, ...slicedPlayers];
  };

  const currentListing = prepareLeaderboardData();

  const totalPages = Math.ceil(leaderboardData.length / playersPerPage);

  function getRandomPlayer(players: any) {
    if (!Array.isArray(players) || players.length === 0) {
      return null; // Return null if the input is not a valid array or is empty
    }

    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  }

  return (
    <>
      <main className="bg-lobby flex min-h-screen w-screen justify-center text-[#5A5C6F]">
        <div id="container" className="mt-[5vh] flex h-full w-10/12 max-w-[2000px] space-x-4">
          <AnimatePresence>
            <div id="my-drafts" className="relative h-full w-full rounded-[8px] bg-[#191A22] p-6 pb-[80px]">
              <div id="header" className="flex w-full justify-between">
                <h1 className="text-2xl font-semibold text-white">Leaderboard</h1>
              </div>
              <motion.table className="mt-6 w-full pb-[70px]">
                <motion.tr id="header" className="grid w-full grid-cols-12 border-b border-white/10 pb-4 *:text-start">
                  <th className="col-span-1">Rank</th>
                  <th className="col-span-7">Name</th>
                  <th className="col-span-2">Played</th>
                  <th className="col-span-2">Won</th>
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
