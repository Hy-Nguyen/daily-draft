import EntriesSlot from './EntriesSlot';

interface EntrySlotsProps {
  entryNum: number;
  entryMax: number;
}

export default function Entries({ entryNum, entryMax }: EntrySlotsProps) {
  const slots = [];

  for (let i = 0; i < entryMax; i++) {
    if (i < entryNum) {
      slots.push(<EntriesSlot key={i} fill="white" />);
    } else {
      slots.push(<EntriesSlot key={i} fill="gray" />);
    }
  }

  return (
    <div className="col-span-2 flex items-center">
      <h1 className="mr-2">{`${entryNum}/${entryMax}`}</h1>
      {slots}
    </div>
  );
}
