export default function PositionLabel({ position }: { position: string }) {
  return (
    <div className="w-fit rounded-[8px] bg-white px-[6px] py-[2px]">
      <h1 className="whitespace-nowrap font-semibold uppercase text-black">{position}</h1>
    </div>
  );
}
