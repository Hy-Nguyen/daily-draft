import { motion } from 'framer-motion';
import Jersey from '../../../Icons/Jersey';
import { Player } from './PlayerDisplay';

interface AddPlayerProps {
  player?: Player;
  onRemove?: () => void;
}

export default function AddPlayer({ player, onRemove }: AddPlayerProps) {
  if (!player) {
    return (
      <div className="flex flex-col">
        <Jersey width="70" />
        <motion.button
          className="-mt-[15px] flex w-full items-center justify-center bg-gradient-to-b from-black to-slate-900"
          initial={{
            border: '1px solid #000',
          }}
          whileHover={{
            border: '1px solid #fff',
          }}
        >
          <h1 className="">+</h1>
        </motion.button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center">
      <Jersey width="70" />
      <div className="-mt-[15px] flex w-full min-w-fit flex-col items-center justify-center bg-gradient-to-b from-black to-slate-900 p-1">
        <h3 className="w-full min-w-fit text-center text-xs font-semibold">{player.name}</h3>
      </div>
      {onRemove && (
        <motion.button
          className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
          onClick={onRemove}
          whileHover={{
            scale: 1.1,
          }}
        >
          X
        </motion.button>
      )}
    </div>
  );
}
