import { useState } from 'react';
import FieldFilters from './FieldFilters';
import Field from './Field';
import Overview from './Overview';
import { Player } from '../PlayerDisplay';

interface DraftFieldProps {
  selectedPlayers: Player[];
  onRemovePlayer: (playerId: number) => void;
  onResetPlayers: () => void;
}

export default function DraftField({ selectedPlayers, onRemovePlayer, onResetPlayers }: DraftFieldProps) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  return (
    <div className="flex h-full w-full flex-col items-center">
      <FieldFilters
        name={name}
        setName={setName}
        position={position}
        setPosition={setPosition}
        onResetPlayers={onResetPlayers}
      />
      <Field selectedPlayers={selectedPlayers} onRemovePlayer={onRemovePlayer} />
      <Overview />
    </div>
  );
}
