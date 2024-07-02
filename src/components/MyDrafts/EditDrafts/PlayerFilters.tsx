import PlayerFilterTab from './PlayerFilterTabs';
import DropdownFilter from '../../ui/DropdownFilter';

interface PlayerFiltersProps {
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
}

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
            selected={maxPrice?.toString() || ''}
            setSelected={(value) => setMaxPrice(value ? Number(value) : null)}
            className="z-10"
          />
        </div>
        <div className="w-1/2">
          <DropdownFilter
            label="Availability:"
            options={['All', 'Available', 'Not Available']}
            selected={availability === null ? 'All' : availability ? 'Available' : 'Not Available'}
            setSelected={(value) => {
              if (value === 'All') setAvailability(null);
              else if (value === 'Available') setAvailability(true);
              else setAvailability(false);
            }}
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
          maxFilled={'5'}
          setPlayerType={setPlayerType}
        />
        <PlayerFilterTab
          label="MF"
          active={playerType === 'MF'}
          currentFilled={playerCounts.MF.toString()}
          maxFilled={'5'}
          setPlayerType={setPlayerType}
        />
        <PlayerFilterTab
          label="FW"
          active={playerType === 'FW'}
          currentFilled={playerCounts.FW.toString()}
          maxFilled={'3'}
          setPlayerType={setPlayerType}
        />
      </div>
    </div>
  );
}
