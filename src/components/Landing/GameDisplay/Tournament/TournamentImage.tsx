export function TournamentImage() {
  return (
    <div
      id="image"
      className="absolute right-4 flex aspect-square w-fit flex-shrink-0 items-center justify-center rounded-full bg-[#131619] p-2"
    >
      <img src="/Lobby/Madrid.png" alt="Team one" className="size-6 object-cover" />
    </div>
  );
}
export function TournamentImageRight() {
  return (
    <div
      id="image"
      className="absolute -right-2 flex aspect-square w-fit flex-shrink-0 items-center justify-center rounded-full bg-[#131619] p-2"
    >
      <img src="/Lobby/Madrid.png" alt="Team Two" className="size-6 object-cover" />
    </div>
  );
}
