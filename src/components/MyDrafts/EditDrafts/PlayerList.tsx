import PlayerDisplay from './PlayerDisplay';
import { useState, useMemo } from 'react';
import Pagination from '../../ui/Pagination';
import { Player } from './PlayerDisplay';

interface PlayerListProps {
  players: Player[];
  maxPrice: number | null;
  setMaxPrice: React.Dispatch<React.SetStateAction<number | null>>;
  availability: boolean | null;
  setAvailability: React.Dispatch<React.SetStateAction<boolean | null>>;
  playerType: string | null;
  setPlayerType: React.Dispatch<React.SetStateAction<string | null>>;
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
  onAddPlayer: (player: Player) => void;
  selectedPlayers: Player[];
}

export default function PlayerList({
  players,
  maxPrice,
  setMaxPrice,
  availability,
  setAvailability,
  playerType,
  setPlayerType,
  playerCounts,
  setPlayerCounts,
  onAddPlayer,
  selectedPlayers,
}: PlayerListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10;

  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
      const aIsSelected = selectedPlayers.some((p) => p.id === a.id);
      const bIsSelected = selectedPlayers.some((p) => p.id === b.id);

      if (a.available === b.available) {
        if (aIsSelected === bIsSelected) {
          return 0;
        }
        return aIsSelected ? 1 : -1;
      }
      return a.available ? -1 : 1;
    });
  }, [players, selectedPlayers]);

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = sortedPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const totalPages = Math.ceil(sortedPlayers.length / playersPerPage);

  return (
    <div className="relative mt-4 flex h-full w-full flex-col">
      <div id="labels" className="grid grid-cols-7 [&>h1]:text-sm [&>h1]:text-[#5A5C6F]">
        <h1 className="col-span-4">Player({sortedPlayers.length})</h1>
        <h1 className="col-span-1">Form</h1>
        <h1 className="col-span-1">Total</h1>
        <h1 className="col-span-1">Price</h1>
      </div>
      <div id="player-list" className="mt-4 w-full">
        {currentPlayers.map((player) => (
          <PlayerDisplay
            key={player.id}
            {...player}
            onAddPlayer={onAddPlayer}
            isSelected={selectedPlayers.some((p) => p.id === player.id)}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
