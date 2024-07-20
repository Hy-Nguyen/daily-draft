import { Duration2, DurationTimer } from './DurationBadges';

export default function Duration({ durationTime }: { durationTime: string }) {
  return (
    <div id="duration" className="col-span-1 flex items-center gap-2">
      <DurationTimer time={durationTime} />
      <Duration2 text="GW3" alert={3} />
    </div>
  );
}
