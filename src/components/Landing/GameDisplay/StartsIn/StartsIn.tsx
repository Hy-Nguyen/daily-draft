import LiveStatus from './LiveBlinker';
import ViewDetails from './ViewDetails';

export default function StartsIn({ liveStatus }: { liveStatus: boolean }) {
  return (
    <div id="timer" className="flex w-1/6">
      <div id="status" className="flex items-center justify-center">
        <LiveStatus live={liveStatus} />
      </div>
      <ViewDetails />
    </div>
  );
}
