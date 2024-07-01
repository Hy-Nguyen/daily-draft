import { Duration2, DurationTimer } from './DurationBadges';

export default function Duration({ durationTime }: { durationTime: string }) {
  return (
    <div id="duration" className="flex w-1/6 items-center">
      <DurationTimer time={durationTime} />
      <Duration2 text="GW3" alert={3} />
    </div>
  );
}
