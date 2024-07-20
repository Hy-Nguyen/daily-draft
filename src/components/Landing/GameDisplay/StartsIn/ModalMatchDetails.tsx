export default function ModalMatchDetails() {
  return (
    <div
      id="match-details"
      className="flex w-full grid-cols-3 border-b border-[#515954] bg-[#1A1B23] py-4 last:border-b-0 md:grid"
    >
      <div id="team1" className="flex flex-row-reverse items-center justify-start font-semibold">
        <div>icon</div>
        <h1>Team Name</h1>
      </div>
      <div id="date-info" className="flex w-full flex-col items-center justify-center text-[#52BE70]">
        <h1>00:00</h1>
        <h1>04/24/2024</h1>
      </div>
      <div id="team2" className="flex items-center justify-start font-semibold">
        <div>icon</div>
        <h1>Team Name</h1>
      </div>
    </div>
  );
}
