import { Amount, Teams } from './PrizePoolComps';

export default function PrizePool({ prizePool, poolTeams }: { prizePool: number; poolTeams: number }) {
  return (
    <div id="prize-pool" className="col-span-2 flex items-center">
      <Amount amount={prizePool} />
      <Teams teams={poolTeams} />
    </div>
  );
}
