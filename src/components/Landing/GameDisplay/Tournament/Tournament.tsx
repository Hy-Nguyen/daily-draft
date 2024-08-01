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
    <div
      id="Tournament"
      className="col-span-6 flex h-full w-full flex-col items-center justify-between gap-4 xl:flex-row xl:gap-0"
    >
      <div className="flex w-full items-center justify-between gap-2 xl:w-2/3 xl:justify-center">
        <div
          id="images"
          className="relative flex h-full w-[64px] items-center justify-normal xl:ml-4 xl:justify-center"
        >
          <TournamentImage />
          <TournamentImageRight />
        </div>
        <div id="title" className="ml-4 flex w-full flex-col">
          <p className="text-xs text-[#5A5C6F]">{matchName}</p>
          <h1 className="m-0 text-lg uppercase">{tournamentName}</h1>
        </div>
      </div>
      <div id="badges" className="flex w-full gap-2 xl:w-2/6 xl:justify-end">
        <GreenBadge time={durationTime} />
        <YellowBadge />
      </div>
    </div>
  );
}
