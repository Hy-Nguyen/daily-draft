import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import EditDraftHero from './EditDraftHero';
import SearchSection from './SearchSection';
import PlayerFilters from './PlayerFilters';
import PlayerList from './PlayerList';
import DraftField from './Field/EditDraftField';
import { Player } from './PlayerDisplay';
import players from '../../../data/fieldPlayers.json';

const MAX_PLAYERS_BY_POSITION = { GK: 1, DF: 5, MF: 5, FW: 3 };

export default function EditDraftPage() {
  const { id } = useParams();
  const [playerType, setPlayerType] = useState<string | null>(null);
  const [playerCounts, setPlayerCounts] = useState({ GK: 0, DF: 0, MF: 0, FW: 0 });
  const [searchInput, setSearchInput] = useState('');
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const filteredPlayers = useMemo(() => {
    return players.filter((player) => {
      const matchesSearch = player.name.toLowerCase().includes(searchInput.toLowerCase());
      const matchesType = !playerType || player.position === playerType;
      const matchesPrice = !maxPrice || player.price <= maxPrice;
      const matchesAvailability = availability === null || player.available === availability;

      return matchesSearch && matchesType && matchesPrice && matchesAvailability;
    });
  }, [searchInput, playerType, maxPrice, availability]);

  const handleAddPlayer = (player: Player) => {
    setSelectedPlayers((prevPlayers) => {
      const positionCount = prevPlayers.filter((p) => p.position === player.position).length;
      const maxPlayers = MAX_PLAYERS_BY_POSITION[player.position as keyof typeof MAX_PLAYERS_BY_POSITION] || 0;

      if (positionCount < maxPlayers) {
        setPlayerCounts((prev) => ({
          ...prev,
          [player.position]: prev[player.position as keyof typeof prev] + 1,
        }));
        return [...prevPlayers, player];
      }
      return prevPlayers;
    });
  };

  const handleRemovePlayer = (playerId: number) => {
    setSelectedPlayers((prevPlayers) => {
      const playerToRemove = prevPlayers.find((p) => p.id === playerId);
      if (playerToRemove) {
        setPlayerCounts((prev) => ({
          ...prev,
          [playerToRemove.position]: prev[playerToRemove.position as keyof typeof prev] - 1,
        }));
      }
      return prevPlayers.filter((p) => p.id !== playerId);
    });
  };

  const handleResetPlayers = () => {
    setSelectedPlayers([]);
    setPlayerCounts({ GK: 0, DF: 0, MF: 0, FW: 0 });
  };

  const sharedProps = {
    maxPrice,
    setMaxPrice,
    availability,
    setAvailability,
    playerType,
    setPlayerType,
    playerCounts,
  };

  const playerListProps = {
    ...sharedProps,
    players: filteredPlayers,
    setPlayerCounts,
    onAddPlayer: handleAddPlayer,
    selectedPlayers,
  };

  return (
    <main className="bg-lobby flex min-h-screen w-screen justify-center pb-10 text-white">
      <div className="mt-[5vh] flex h-full w-10/12 max-w-[2000px] flex-col items-center justify-center space-x-4">
        <EditDraftHero title="UEFA EURO 2024" date="May 16, 2024" team="15" prizePool="1.5" buyIn=".5" />
        <hr className="my-10 w-full border-white/10" />
        <div className="flex h-[1200px] w-full justify-between">
          <div className="border-draft bg-draft flex w-[30%] flex-col rounded-[8px] px-4 py-6">
            <SearchSection search={searchInput} setSearch={setSearchInput} />
            <PlayerFilters {...sharedProps} />
            <PlayerList {...playerListProps} />
          </div>
          <div className="border-draft bg-draft flex w-[68%] flex-col rounded-[8px] px-4 py-6">
            <DraftField
              selectedPlayers={selectedPlayers}
              onRemovePlayer={handleRemovePlayer}
              onResetPlayers={handleResetPlayers}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
