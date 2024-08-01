import LiveStatus from './LiveBlinker';
import ViewDetails from './ViewDetails';

export default function StartsIn({ liveStatus }: { liveStatus: boolean }) {
  return (
    <div id="timer" className="col-span-2 flex w-full items-center justify-between xl:pl-4">
      <div id="status" className="flex items-center justify-center">
        <LiveStatus live={liveStatus} />
      </div>
      <ViewDetails />
    </div>
  );
}
