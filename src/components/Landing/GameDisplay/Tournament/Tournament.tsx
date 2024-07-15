import { GreenBadge, YellowBadge } from './Badges';
import { TournamentImage, TournamentImageRight } from './TournamentImage';

export default function Tournament({
  matchName,
  tournamentName,
  durationTime,
}: {
  matchName: string;
  tournamentName: string;
  durationTime: string;
}) {
  return (
    <div id="Tournament" className="flex w-2/6 items-center outline">
      <div id="images" className="relative ml-4 flex w-[14.5%]">
        <TournamentImage />
        <TournamentImageRight />
      </div>
      <div id="title" className="ml-4 flex w-[43%] flex-col">
        <p className="text-xs text-[#5A5C6F]">{matchName}</p>
        <h1 className="m-0 text-lg uppercase">{tournamentName}</h1>
      </div>
      <div id="badges" className="'ml-4 flex w-[43%]">
        <GreenBadge time={durationTime} />
        <YellowBadge />
      </div>
    </div>
  );
}
