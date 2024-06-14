import { motion } from "framer-motion";
import Lightning from "../../../Icons/Lightning";
import Refresh from "../../../Icons/Refresh";

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
	return (
		<div className='flex h-full w-full outline'>
			<div id='buttons'>
				<div id='left' className='p-4'>
					<div id='top' className="flex ">
						<div className='flex w-[180px] items-center justify-center rounded-[8px] border border-[#52BE70] bg-[#52BE70]/10 py-4'>
							<Lightning />
							<h1>Autocomplete</h1>
						</div>
						<motion.div
							id='reset-search'
							className='border-draft flex w-[180px] flex-row space-x-2 hover:cursor-pointer'
							initial={{
								color: "#5A5C6F",
							}}
							whileHover={{
								color: "#fff",
								borderColor: "#fff",
							}}
						>
							<div className='flex h-[40px] w-full items-center justify-center space-x-3 text-inherit'>
								<h1 className='text-xs text-inherit'>
									Reset
								</h1>
								<Refresh />
							</div>
						</motion.div>
					</div>
				</div>
			</div>
			<div id='field'></div>
			<div id='overview'></div>
		</div>
	);
}
