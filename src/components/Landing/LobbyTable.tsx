import { useEffect, useRef, useState } from 'react';
import GameFilters from './GameFilters';
import Switch from '../ui/switch';
import SearchIcon from '../../Icons/SearchIcon';
import LobbyGameDisplay from './LobbyGameDisplay';
import DropdownFilter from '../ui/DropdownFilter';

export default function LobbyTable() {
  const [gameFilter, setGameFilter] = useState('Running');
  const [searchValue, setSearchValue] = useState('');
  const [sortFilter, setSortFilter] = useState('All');

  const tbodyRef = useRef<HTMLTableSectionElement | null>(null);

  useEffect(() => {
    const tbody = tbodyRef.current;
    if (!tbody) return;

    const checkOverflow = () => {
      const isOverflowing = tbody.scrollHeight > tbody.clientHeight;
      const isAtTop = tbody.scrollTop === 0;
      const isAtBottom = Math.abs(tbody.scrollHeight - tbody.scrollTop - tbody.clientHeight) < 1;

      let maskValue = '';

      if (isOverflowing) {
        if (!isAtTop && !isAtBottom) {
          maskValue = 'linear-gradient(180deg, transparent, white 20%, white 80%, transparent)';
        } else if (!isAtTop) {
          maskValue = 'linear-gradient(180deg, transparent, white 20%, white)';
        } else if (!isAtBottom) {
          maskValue = 'linear-gradient(180deg, white, white 80%, transparent)';
        } else {
          maskValue = 'linear-gradient(180deg, white, white)';
        }
      } else {
        maskValue = 'linear-gradient(180deg, white, white)';
      }

      tbody.style.setProperty('-webkit-mask', maskValue);
      tbody.style.setProperty('mask', maskValue);
    };

    checkOverflow();

    tbody.addEventListener('scroll', checkOverflow);

    window.addEventListener('resize', checkOverflow);

    return () => {
      tbody.removeEventListener('scroll', checkOverflow);
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  return (
    <>
      <div id="header" className="flex">
        <div id="left" className="w-full justify-evenly">
          <div className="my-2 flex space-x-2">
            <h1>Available Games</h1>
            <p className="h-[20px] w-[20px] rounded-full bg-[#5A5C71] text-center text-black">?</p>
          </div>
          <div id="filters" className="flex items-center space-x-2">
            <GameFilters text="Running" active={gameFilter === 'Running'} setActive={setGameFilter} />
            <GameFilters text="Ended" active={gameFilter === 'Ended'} setActive={setGameFilter} />
            <GameFilters text="Free Games" active={gameFilter === 'Free Games'} setActive={setGameFilter} />
            <GameFilters text="Paid Games" active={gameFilter === 'Paid Games'} setActive={setGameFilter} />
            <Switch />
          </div>
          <div className="my-3 flex w-full max-w-[340px] items-center justify-center rounded-[6px] border border-white/5 bg-[#1B1C25]">
            <SearchIcon />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for a team, player or bet."
              className="h-[40px] w-full rounded-r-[6px] bg-inherit text-xs text-[#5A5C6F] text-white focus:outline-none"
            />
          </div>
        </div>
        <div id="right" className="flex w-1/2 flex-col items-end justify-start space-y-3">
          <h1 className="w-3/5 text-xs text-[#5A5C6F]/75">Sort By</h1>
          <DropdownFilter
            label="Prize Pool:"
            selected={sortFilter}
            setSelected={setSortFilter}
            options={['High to Low', 'Low to High']}
            width="w-3/5"
          />
        </div>
      </div>
      <table className="mt-3 w-full">
        <thead className="border-y">
          <tr className="my-5 flex text-[16px] text-[#A7ADB9] *:text-start *:font-normal">
            <th className="w-2/6">Tournament</th>
            <th className="w-1/6">Starts In</th>
            <th className="w-1/6">Duration</th>
            <th className="w-1/6">Prize Pool</th>
          </tr>
        </thead>

        <tbody
          id="lobby-table"
          ref={tbodyRef}
          className="scrollbar scrollbar-thumb-[#52BE70] scrollbar-track-black mt-6 flex max-h-[500px] flex-col space-y-[20px] overflow-y-scroll pr-4"
        >
          <LobbyGameDisplay
            matchName="Uefa Euro 2024"
            tournamentName="UEC DAILY MEGA WIN"
            durationTime="2H"
            liveStatus={true}
            prizePool={1.5}
            poolTeams={15}
          />
          <LobbyGameDisplay
            matchName="Uefa Euro 2025"
            tournamentName="UEC DAILY MEGA mega WIN"
            durationTime="50M"
            liveStatus={false}
            prizePool={2}
            poolTeams={5}
          />
          <LobbyGameDisplay
            matchName="Uefa Euro 2026"
            tournamentName="UEC DAILY MEGA duper WIN"
            durationTime="90M"
            liveStatus={true}
            prizePool={15}
            poolTeams={200}
          />
          <LobbyGameDisplay
            matchName="Uefa Euro 2024"
            tournamentName="UEC DAILY MEGA WIN"
            durationTime="2H"
            liveStatus={true}
            prizePool={1.5}
            poolTeams={15}
          />
          <LobbyGameDisplay
            matchName="Uefa Euro 2025"
            tournamentName="UEC DAILY MEGA mega WIN"
            durationTime="50M"
            liveStatus={false}
            prizePool={2}
            poolTeams={5}
          />
          <LobbyGameDisplay
            matchName="Uefa Euro 2026"
            tournamentName="UEC DAILY MEGA duper WIN"
            durationTime="90M"
            liveStatus={true}
            prizePool={15}
            poolTeams={200}
          />
          <LobbyGameDisplay
            matchName="Uefa Euro 2024"
            tournamentName="UEC DAILY MEGA WIN"
            durationTime="2H"
            liveStatus={true}
            prizePool={1.5}
            poolTeams={15}
          />
          <LobbyGameDisplay
            matchName="Uefa Euro 2025"
            tournamentName="UEC DAILY MEGA mega WIN"
            durationTime="50M"
            liveStatus={false}
            prizePool={2}
            poolTeams={5}
          />
          <LobbyGameDisplay
            matchName="Uefa Euro 2026"
            tournamentName="UEC DAILY MEGA duper WIN"
            durationTime="90M"
            liveStatus={true}
            prizePool={15}
            poolTeams={200}
          />
        </tbody>
      </table>
    </>
  );
}
