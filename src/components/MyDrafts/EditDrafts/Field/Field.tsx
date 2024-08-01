import AddPlayer from '../AddPlayer';
import PositionLabel from './PositionLabel';
import { Player } from '../PlayerDisplay';

interface FieldProps {
  selectedPlayers: Player[];
  onRemovePlayer: (playerId: number) => void;
}

export default function Field({ selectedPlayers, onRemovePlayer }: FieldProps) {
  const renderPlayers = (position: string, count: number) => {
    const positionPlayers = selectedPlayers.filter((player) => player.position === position);
    return [...Array(count)].map((_, index) => (
      <AddPlayer
        key={index}
        player={positionPlayers[index]}
        onRemove={positionPlayers[index] ? () => onRemovePlayer(positionPlayers[index].id) : undefined}
      />
    ));
  };

  return (
    <div id="field" className="relative my-16 flex h-fit w-full items-center justify-center xl:my-6">
      <img src="/field/field.png" alt="field" className="w-full rounded-[10px] bg-[#111217] xl:min-h-0" />

      <div
        id="goalkeeper"
        className="absolute left-1/2 top-[-12%] flex h-[50px] w-[50px] -translate-x-1/2 scale-[.65] transform flex-col items-center justify-start space-y-3 xl:top-[10%] xl:scale-100"
      >
        {renderPlayers('GK', 1)}
        <PositionLabel position="Goal Keeper" />
      </div>
      <div
        id="defender"
        className="absolute left-1/2 top-[20%] flex h-[50px] w-[50px] -translate-x-1/2 scale-[.65] transform flex-col items-center justify-start space-y-3 xl:top-[30%] xl:scale-100"
      >
        <div className="flex flex-row space-x-5">{renderPlayers('DF', 5)}</div>
        <PositionLabel position="defender" />
      </div>
      <div
        id="midfielder"
        className="absolute left-1/2 top-[52%] flex h-[50px] w-[50px] -translate-x-1/2 scale-[.65] transform flex-col items-center justify-start space-y-3 xl:top-[50%] xl:scale-100"
      >
        <div className="flex flex-row space-x-5">{renderPlayers('MF', 5)}</div>
        <PositionLabel position="midfielder" />
      </div>
      <div
        id="forward"
        className="absolute left-1/2 top-[82%] flex h-[50px] w-[50px] -translate-x-1/2 scale-[.65] transform flex-col items-center justify-start space-y-3 xl:top-[70%] xl:scale-100"
      >
        <div className="flex flex-row space-x-5">{renderPlayers('FW', 3)}</div>
        <PositionLabel position="forward" />
      </div>
    </div>
  );
}
