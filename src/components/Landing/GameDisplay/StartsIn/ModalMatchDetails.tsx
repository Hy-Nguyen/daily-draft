interface ModalMatchDetailsProps {
  team1: Team1;
  team2: Team2;
  date: string;
  time: string;
}
interface Team1 {
  name: string;
  image: string;
}
interface Team2 {
  name: string;
  image: string;
}

export default function ModalMatchDetails(props: ModalMatchDetailsProps) {
  return (
    <div
      id="match-details"
      className="flex w-full grid-cols-3 items-center justify-center border-b border-[#515954] bg-[#1A1B23] px-2 py-4 last:border-b-0 xl:grid"
    >
      <div
        id="team1"
        className="flex w-1/3 flex-col items-center justify-around gap-2 font-semibold xl:w-full xl:flex-row-reverse"
      >
        <TeamImage src={props.team1.image} alt={props.team1.name} />
        <h1>{props.team1.name}</h1>
      </div>
      <div id="date-info" className="flex w-1/3 flex-col items-center justify-center gap-2 text-[#52BE70] xl:w-full">
        <h1>00:00</h1>
        <h1>04/24/2024</h1>
      </div>
      <div
        id="team2"
        className="flex w-1/3 flex-col items-center justify-around gap-2 font-semibold xl:w-full xl:flex-row"
      >
        <TeamImage src={props.team2.image} alt={props.team2.name} />

        <h1>{props.team2.name}</h1>
      </div>
    </div>
  );
}

function TeamImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex w-1/3 items-center justify-center">
      <img src={src} alt={alt} className="aspect-square w-full object-contain" />
    </div>
  );
}
