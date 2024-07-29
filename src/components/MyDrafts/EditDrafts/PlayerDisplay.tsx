import { motion } from 'framer-motion';
import Jersey from '../../../Icons/Jersey';
import Plus from '../../../Icons/Plus';

export interface Player {
  id: number;
  name: string;
  position: string;
  form: number;
  total: number;
  price: number;
  available: boolean;
}

interface PlayerDisplayProps extends Player {
  onAddPlayer: (player: Player) => void;
  isSelected: boolean;
}

export default function PlayerDisplay({ onAddPlayer, isSelected, ...player }: PlayerDisplayProps) {
  const positionHandler = (position: string) => {
    switch (position) {
      case 'GK':
        return 'GK';
      case 'DF':
        return 'DEF';
      case 'MF':
        return 'MID';
      case 'FW':
        return 'FOR';
      default:
        return 'UNK';
    }
  };

  const handleAddPlayer = () => {
    if (!isSelected) {
      onAddPlayer(player);
    }
  };

  return (
    <>
      <div className="flex grid-cols-9 flex-col gap-3 xl:grid xl:gap-0">
        <div className="col-span-6 flex items-start justify-start space-x-3 xl:items-center">
          <motion.button
            className={`border-draft group flex h-[50px] min-w-[50px] items-center justify-center ${
              isSelected ? 'cursor-not-allowed opacity-50' : ''
            }`}
            whileHover={
              isSelected
                ? {}
                : {
                    boxShadow: '0px 0px 6px #ffffff',
                    borderColor: '#ffffff',
                  }
            }
            onClick={handleAddPlayer}
            disabled={isSelected}
          >
            <Plus
              disabled={isSelected}
              className="fill-slate-draft disabled:group-hover:fill-slate-draft transition-all duration-500 ease-in-out group-hover:fill-white"
            />
          </motion.button>
          <div className="relative flex aspect-square w-[50px] items-center justify-center">
            <Jersey />
            <div className="absolute bottom-0 w-full rounded-[4px] bg-[#52BE70]/90 text-center">
              {positionHandler(player.position)}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">{player.name}</h1>
            <div className="flex items-center gap-2 space-x-1 text-sm">
              <h1 className="w-fit rounded-[4px] border border-[#52BE70] px-2 text-[#52BE70]">May</h1>
              <h1 className="truncatte whitespace-nowrap text-xs">
                AstonVilla - <span className="text-[#A7ADB9]">Brentford</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 *:gap-2 *:xl:gap-0">
          <div className="col-span-1 flex items-center">
            <h1 className="text-slate-draft xl:hidden">Form:</h1>
            <h1>{player.form}</h1>
          </div>
          <div className="col-span-1 flex items-center">
            <h1 className="text-slate-draft xl:hidden">Total:</h1>
            <h1>{player.total}</h1>
          </div>
          <div className="col-span-1 flex items-center">
            <h1 className="text-slate-draft xl:hidden">Price:</h1>
            <h1 className="text-[#52BE70]">{player.price}M</h1>
          </div>
        </div>{' '}
      </div>
      <hr className="my-4 border-white/30" />
    </>
  );
}
