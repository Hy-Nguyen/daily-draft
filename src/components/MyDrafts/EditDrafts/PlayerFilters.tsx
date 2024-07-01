import React from 'react';
import DropdownFilter from '../../ui/DropdownFilter';
import PlayerFilterTab from './PlayerFilterTabs';

interface PlayerFiltersProps {
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
}

// 	const [playerType, setPlayerType] = useState<
// 		string | null
// 	>(null);
// 	const [playerCounts, setPlayerCounts] =
// 		useState({
// 			GK: 0,
// 			DF: 0,
// 			MF: 0,
// 			FW: 0,
// 		});
// 	const [searchInput, setSearchInput] =
// 		useState("");
// 	const [maxPrice, setMaxPrice] = useState(null);
// 	const [availability, setAvailability] =
// 		useState(false);

export default function PlayerFilters({
  maxPrice,
  setMaxPrice,
  availability,
  setAvailability,
  playerType,
  setPlayerType,
  playerCounts,
}: PlayerFiltersProps) {
  return (
    <div className="mt-10 flex w-full flex-col">
      <div id="filter-dropdowns" className="flex w-full space-x-6">
        <div className="w-1/2">
          <DropdownFilter
            label="Max Price:"
            options={['100', '200', '300', '400', '500']}
            selected={maxPrice}
            setSelected={setMaxPrice}
            className="z-10"
          />
        </div>
        <div className="w-1/2">
          <DropdownFilter
            label="Availability:"
            options={['Available', 'Not Available']}
            selected={availability}
            setSelected={setAvailability}
            className="z-10"
          />
        </div>
      </div>
      <div id="player-roles" className="mt-4 grid grid-cols-5">
        <PlayerFilterTab label="All" active={playerType === null} setPlayerType={setPlayerType} />
        <PlayerFilterTab
          label="GK"
          active={playerType === 'GK'}
          currentFilled={playerCounts.GK.toString()}
          maxFilled={'1'}
          setPlayerType={setPlayerType}
        />
        <PlayerFilterTab
          label="DF"
          active={playerType === 'DF'}
          currentFilled={playerCounts.DF.toString()}
          maxFilled={'3'}
          setPlayerType={setPlayerType}
        />
        <PlayerFilterTab
          label="MF"
          active={playerType === 'MF'}
          currentFilled={playerCounts.GK.toString()}
          maxFilled={'4'}
          setPlayerType={setPlayerType}
        />
        <PlayerFilterTab
          label="FW"
          active={playerType === 'FW'}
          currentFilled={playerCounts.GK.toString()}
          maxFilled={'3'}
          setPlayerType={setPlayerType}
        />
      </div>
    </div>
  );
}
