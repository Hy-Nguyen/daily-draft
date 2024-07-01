import { useState } from 'react';
import GameFilters from './GameFilters';
import Switch from '../ui/switch';
import Search from '../../Icons/Search';
import LobbyGameDisplay from './LobbyGameDisplay';

export default function LobbyTable() {
  const [gameFilter, setGameFilter] = useState('Running');

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
            <Search />
            <input
              type="text"
              placeholder="Search for a team, player or bet."
              className="h-[40px] w-full rounded-r-[6px] bg-inherit text-xs text-[#5A5C6F] focus:outline-none"
            />
          </div>
        </div>
        <div id="right" className="flex w-1/2 flex-col items-end justify-start space-y-3">
          <h1 className="w-3/5 text-xs text-[#5A5C6F]/75">Sort By</h1>
          <div className="bg-draft border-draft flex w-3/5 items-center">
            <h1 className="ml-4 whitespace-nowrap text-xs text-[#5A5C6F]">Prize Pool:</h1>
            <select name="Sort" id="Sort" className="h-[40px] w-full rounded-[8px] bg-inherit text-xs">
              <option value="h-t-l" className="text-white">
                High To Low
              </option>
              <option value="l-t-h" className="text-white">
                Low To High
              </option>
            </select>
          </div>
        </div>
      </div>
      <div id="table-header" className="my-3">
        <div id="header">
          <hr />
          <div className="my-5 flex text-[16px] text-[#A7ADB9]">
            <h1 className="w-2/6">Tournament</h1>
            <h1 className="w-1/6">Starts In</h1>
            <h1 className="w-1/6">Duration</h1>
            <h1 className="w-1/6">Prize Pool</h1>
          </div>
          <hr />
        </div>
      </div>
      <div
        id="table-content"
        className="scrollbar scrollbar-thumb-[#52BE70] scrollbar-track-black mt-6 flex max-h-[400px] flex-col space-y-[20px] overflow-y-scroll pr-4"
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
      </div>
    </>
  );
}
