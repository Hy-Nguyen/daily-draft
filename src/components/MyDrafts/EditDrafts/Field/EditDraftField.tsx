import { motion } from 'framer-motion';
import { useState } from 'react';
import AddPlayer from '../AddPlayer';
import FieldFilters from './FieldFilters';
import PositionLabel from './PositionLabel';
import Field from './Field';
import Overview from './Overview';

interface PlayerListProps {
  maxPrice: number | null;
  setMaxPrice: React.Dispatch<React.SetStateAction<any>>;
  availability: boolean;
  setAvailability: React.Dispatch<React.SetStateAction<boolean>>;
  playerType: any;
  setPlayerType: React.Dispatch<React.SetStateAction<any>>;
  playerCounts: {
    GK: number;
    DF: number;
    MF: number;
    FW: number;
  };
  setPlayerCounts: React.Dispatch<
    React.SetStateAction<{
      GK: number;
      DF: number;
      MF: number;
      FW: number;
    }>
  >;
}

export default function DraftField({
  maxPrice,
  setMaxPrice,
  availability,
  setAvailability,
  playerType,
  setPlayerType,
  playerCounts,
  setPlayerCounts,
}: PlayerListProps) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  return (
    <div className="flex h-full w-full flex-col items-center">
      <FieldFilters name={name} setName={setName} position={position} setPosition={setPosition} />

      <Field />
      <Overview />
    </div>
  );
}
