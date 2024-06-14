/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import EditDraftHero from "./EditDraftHero";
import { useState } from "react";
import NavBar from "../../NavBar";

import players from "../../../data/players.json";
import { motion } from "framer-motion";
import SearchSection from "./SearchSection";
import PlayerFilters from "./PlayerFilters";
import PlayerList from "./PlayerList";
import DraftField from "./EditDraftField";

export default function EditDraftPage() {
	const { id } = useParams();
	const [playerType, setPlayerType] = useState<
		string | null
	>(null);
	const [playerCounts, setPlayerCounts] =
		useState({
			GK: 0,
			DF: 0,
			MF: 0,
			FW: 0,
		});
	const [searchInput, setSearchInput] =
		useState("");
	const [maxPrice, setMaxPrice] = useState(null);
	const [availability, setAvailability] =
		useState(false);

	return (
		<>
			<NavBar />
			<main className='bg-lobby flex min-h-screen w-screen justify-center text-white'>
				<div
					id='container'
					className='mt-[5vh] flex h-full w-10/12 max-w-[2000px] flex-col items-center justify-center space-x-4'
				>
					<EditDraftHero
						title='UEFA EURO 2024'
						date='May 16, 2024'
						team='15'
						prizePool='1.5'
						buyIn='.5'
					/>
					<hr className='my-10 w-full border-white/10' />
					<div
						id='body'
						className='flex h-full w-full justify-between'
					>
						<div
							id='player-list'
							className='border-draft bg-draft flex h-[1000px] w-[30%] flex-col rounded-[8px] px-4 py-6'
						>
							<SearchSection
								search={searchInput}
								setSearch={setSearchInput}
							/>
							<PlayerFilters
								maxPrice={maxPrice}
								setMaxPrice={setMaxPrice}
								availability={availability}
								setAvailability={setAvailability}
								playerType={playerType}
								setPlayerType={setPlayerType}
								playerCounts={playerCounts}
							/>

							<PlayerList
								maxPrice={maxPrice}
								setMaxPrice={setMaxPrice}
								availability={availability}
								setAvailability={setAvailability}
								playerType={playerType}
								setPlayerType={setPlayerType}
								playerCounts={playerCounts}
								setPlayerCounts={setPlayerCounts}
							/>
						</div>
						<div className='border-draft bg-draft flex h-[1000px] w-[68%] flex-col rounded-[8px] px-4 py-6'>
						<DraftField
								maxPrice={maxPrice}
								setMaxPrice={setMaxPrice}
								availability={availability}
								setAvailability={setAvailability}
								playerType={playerType}
								setPlayerType={setPlayerType}
								playerCounts={playerCounts}
								setPlayerCounts={setPlayerCounts}
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
