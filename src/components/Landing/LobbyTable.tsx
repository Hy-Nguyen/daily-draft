import { useState } from "react";
import GameFilters from "./GameFilters";
import Switch from "../ui/switch";

export default function LobbyTable() {
	const [gameFilter, setGameFilter] =
		useState("Running");

	return (
		<>
			<div id='header'>
				<div id='left'>
					<div className='my-2 flex space-x-2'>
						<h1>Available Games</h1>
						<p className='h-[20px] w-[20px] rounded-full bg-[#5A5C71] text-center text-black'>
							?
						</p>
					</div>
					<div
						id='filters'
						className='flex items-center space-x-2'
					>
						<GameFilters
							text='Running'
							active={gameFilter === "Running"}
							setActive={setGameFilter}
						/>
						<GameFilters
							text='Ended'
							active={gameFilter === "Ended"}
							setActive={setGameFilter}
						/>
						<GameFilters
							text='Free Games'
							active={gameFilter === "Free Games"}
							setActive={setGameFilter}
						/>
						<GameFilters
							text='Paid Games'
							active={gameFilter === "Paid Games"}
							setActive={setGameFilter}
						/>
						<Switch />
					</div>
				</div>
			</div>
		</>
	);
}
