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
    <div className="my-2 flex min-h-[70px] w-full items-center rounded-[8px] border border-[#FFFFFF]/5 bg-[#1A1B23]">
      <Tournament matchName={matchName} tournamentName={tournamentName} durationTime={durationTime} />
      <StartsIn liveStatus={liveStatus} />
      <Duration durationTime={durationTime} />
      <PrizePool prizePool={prizePool} poolTeams={poolTeams} />
      <Participate />
    </div>
  );
}
