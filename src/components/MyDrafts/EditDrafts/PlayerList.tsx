import PlayerDisplay from "./PlayerDisplay";

interface PlayerListProps {
	maxPrice: number | null;
	setMaxPrice: React.Dispatch<
		React.SetStateAction<any>
	>;
	availability: boolean;
	setAvailability: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	playerType: any;
	setPlayerType: React.Dispatch<
		React.SetStateAction<any>
	>;
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

export default function PlayerList({
	maxPrice,
	setMaxPrice,
	availability,
	setAvailability,
	playerType,
	setPlayerType,
	playerCounts,
	setPlayerCounts,
}: PlayerListProps) {
	return (
		<div className='mt-4 flex w-full flex-col'>
			<div
				id='labels'
				className='grid grid-cols-7 [&>h1]:text-sm [&>h1]:text-[#5A5C6F]'
			>
				<h1 className='col-span-4'>
					Player(456)
				</h1>
				<h1 className='col-span-1'>Form</h1>
				<h1 className='col-span-1'>Total</h1>
				<h1 className='col-span-1'>Price</h1>
			</div>
			<div
				id='player-list'
				className='mt-4 w-full'
			>
				<PlayerDisplay />
				<PlayerDisplay />
				<PlayerDisplay />
				<PlayerDisplay />
				<PlayerDisplay />
			</div>
		</div>
	);
}
