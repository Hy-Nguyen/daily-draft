import { Amount, Teams } from './PrizePoolComps';

export default function PrizePool({ prizePool, poolTeams }: { prizePool: number; poolTeams: number }) {
  return (
    <div id="prize-pool" className="flex w-1/6 items-center">
      <Amount amount={prizePool} />
      <Teams teams={poolTeams} />
    </div>
  );
}
