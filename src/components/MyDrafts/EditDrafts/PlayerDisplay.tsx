import Jersey from '../../../Icons/Jersey';
import Plus from '../../../Icons/Plus';

// {
// 	id: 1,
// 	name: "Cristiano Ronaldo",
// 	position: "FW",
// 	form: 8.5,
// 	total: 8.5,
// 	price: 10.5,
// },
export interface Player {
  id: number;
  name: string;
  position: string;
  form: number;
  total: number;
  price: number;
}

export default function PlayerDisplay(player: Player) {
  return (
    <>
      <div className="grid grid-cols-7">
        <div className="col-span-4 flex items-center justify-start space-x-3">
          <div className="border-draft flex h-[50px] min-w-[50px] items-center justify-center">
            <Plus />
          </div>
          <div className="relative flex aspect-square w-[50px] items-center justify-center">
            <Jersey />
            <div className="absolute bottom-0 w-full rounded-[4px] bg-[#52BE70]/80 text-center">FOR</div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">{player.name}</h1>
            <div className="flex items-center space-x-1 text-sm">
              <div className="w-fit rounded-[4px] border border-[#52BE70] px-2 text-[#52BE70]">May</div>
              <h1 className="whitespace-nowrap text-xs">
                AstonVilla - <span className="text-[#A7ADB9]">Brentford</span>
              </h1>
            </div>
          </div>
        </div>
        <h1 className="col-span-1 flex items-center">{player.form}</h1>
        <h1 className="col-span-1 flex items-center">{player.total}</h1>
        <h1 className="col-span-1 flex items-center text-[#52BE70]">{player.price}M</h1>
      </div>
      <hr className="my-4 border-white/30" />
    </>
  );
}
