import PlayerDisplay from './PlayerDisplay';
import { useState } from 'react';
import players from '../../../data/fieldPlayers.json';
import Pagination from '../../ui/Pagination';

interface PlayerListProps {
  maxPrice: number | null;
  setMaxPrice: React.Dispatch<React.SetStateAction<any>>;
  availability: boolean;
  setAvailability: React.Dispatch<React.SetStateAction<boolean>>;
  playerType: any;
  setPlayerType: React.Dispatch<React.SetStateAction<any>>;
  playerCounts: {
    GK: number;
    DF: number;
    MF: number;
    FW: number;
  };
  setPlayerCounts: React.Dispatch<
    React.SetStateAction<{
      GK: number;
      DF: number;
      MF: number;
      FW: number;
    }>
  >;
}

export default function PlayerList({
  maxPrice,
  setMaxPrice,
  availability,
  setAvailability,
  playerType,
  setPlayerType,
  playerCounts,
  setPlayerCounts,
}: PlayerListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10;
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const totalPages = Math.ceil(players.length / playersPerPage);

  return (
    <div className="relative mt-4 flex h-full w-full flex-col">
      <div id="labels" className="grid grid-cols-7 [&>h1]:text-sm [&>h1]:text-[#5A5C6F]">
        <h1 className="col-span-4">Player({players.length})</h1>
        <h1 className="col-span-1">Form</h1>
        <h1 className="col-span-1">Total</h1>
        <h1 className="col-span-1">Price</h1>
      </div>
      <div id="player-list" className="mt-4 w-full">
        {currentPlayers.map((player) => (
          <PlayerDisplay key={player.id} {...player} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
