import Duration from './GameDisplay/Duration/Duration';
import Participate from './GameDisplay/Participate/ParticipateButton';
import PrizePool from './GameDisplay/PrizePool/PrizePool';
import StartsIn from './GameDisplay/StartsIn/StartsIn';
import Tournament from './GameDisplay/Tournament/Tournament';

export default function LobbyGameDisplay({
  matchName,
  tournamentName,
  durationTime,
  liveStatus,
  prizePool,
  poolTeams,
}: {
  matchName: string;
  tournamentName: string;
  durationTime: string;
  liveStatus: boolean;
  prizePool: number;
  poolTeams: number;
}) {
  return (
    <tr className="my-2 flex h-fit w-full grid-cols-12 grid-rows-1 flex-col items-center gap-4 rounded-[8px] border border-[#FFFFFF]/5 bg-[#1A1B23] px-4 py-2 xl:grid">
      <Tournament matchName={matchName} tournamentName={tournamentName} durationTime={durationTime} />
      <StartsIn liveStatus={liveStatus} />
      <div className="flex w-full justify-between gap-2 xl:col-span-3 xl:grid xl:grid-cols-3 xl:gap-4">
        <Duration durationTime={durationTime} />
        <PrizePool prizePool={prizePool} poolTeams={poolTeams} />
      </div>
      <Participate />
    </tr>
  );
}
