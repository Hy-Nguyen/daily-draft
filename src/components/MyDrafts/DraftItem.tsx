import { GreenBadge, YellowBadge } from '../Landing/GameDisplay/Tournament/Badges';
import SOLIcon from '../ui/SOLIcon';
import EditDraft from './EditDrafts/EditDraft';
import Entries from './Entries';

interface DraftItemProps {
  completed: boolean;
}

export default function DraftItem({ completed }: DraftItemProps) {
  if (completed) {
    return (
      <>
        <div className="mt-2 flex h-fit w-full grid-cols-12 flex-col items-center gap-2 border-b border-white/10 py-2 text-white lg:grid">
          <div id="drafts" className="flex w-full justify-between lg:col-span-4 lg:grid lg:grid-cols-2">
            <div className="flex w-1/2 flex-col lg:w-5/6">
              <h1 className="text-xs text-[#5A5C6F]">Cup</h1>
              <h1 className="w-full truncate">Name</h1>
            </div>
            <div className="flex items-center gap-2">
              <GreenBadge time="50M" />
              <YellowBadge />
            </div>
          </div>
          <div className="flex w-full justify-between gap-4 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-0">
            <div id="entry-fee" className="col-span-1 flex items-center space-x-2">
              <h1 className="text-slate-draft lg:hidden">Entry Fee: </h1>
              <SOLIcon />
              <h1>.5</h1>
            </div>
            <div id="prize" className="col-span-1 flex items-center space-x-2">
              <h1 className="text-slate-draft lg:hidden">Prize: </h1>
              <SOLIcon />
              <h1>1.5</h1>
            </div>
          </div>
          <div className="flex w-full justify-between gap-4 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-0">
            <div id="winning" className="col-span-1 flex items-center space-x-2">
              <h1 className="text-slate-draft lg:hidden">Winning: </h1>
              <SOLIcon />
              <h1>1.5</h1>
            </div>
            <div id="score" className="col-span-1 flex items-center space-x-2">
              <h1 className="text-slate-draft lg:hidden">Score: </h1>
              <h1>110M</h1>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-2 lg:col-span-3 lg:grid lg:grid-cols-3 lg:gap-0">
            <div id="rank" className="col-span-1 flex items-center justify-between space-x-2">
              <h1 className="text-slate-draft lg:hidden">Rank: </h1>
              <h1>1/15</h1>
            </div>
            <div id="date" className="col-span-2 flex w-full items-center justify-between whitespace-nowrap">
              <h1 className="text-slate-draft lg:hidden">Date: </h1>
              <h1>Apr 01, Sat 08:30 AM</h1>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mt-2 flex h-fit w-full grid-cols-12 flex-col items-center gap-3 border-b border-white/10 py-2 text-white lg:grid">
          <div className="w-full col-span-4 grid grid-cols-2">
            <div className="flex flex-col">
              <h1 className="text-xs text-[#5A5C6F]">Cup</h1>
              <h1 className="">Name</h1>
            </div>
            <div className="flex items-center gap-2">
              <GreenBadge time="50M" />
              <YellowBadge />
            </div>
          </div>
          <div className="flex w-full justify-between gap-4 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-0">
            <div id="entry-fee" className="col-span-1 flex items-center space-x-2">
              <h1 className="text-slate-draft lg:hidden">Entry Fee: </h1>
              <SOLIcon />
              <h1>.5</h1>
            </div>
            <div id="prize" className="col-span-1 flex items-center space-x-2">
              <h1 className="text-slate-draft lg:hidden">Prize: </h1>
              <SOLIcon />
              <h1>1.5</h1>
            </div>
          </div>
          <div className="col-span-2 flex w-full items-center justify-between space-x-2">
            <h1 className="text-slate-draft lg:hidden">Entries: </h1>
            <Entries entryNum={7} entryMax={10} />
          </div>
          <div className="col-span-2 flex w-full items-center justify-between whitespace-nowrap">
            <h1 className="text-slate-draft lg:hidden">Date: </h1>
            <h1>Apr 01, Sat 08:30 AM</h1>
          </div>
          <EditDraft />
        </div>
      </>
    );
  }
}
