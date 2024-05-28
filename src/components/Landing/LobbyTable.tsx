import { useState } from "react";
import GameFilters from "./GameFilters";
import Switch from "../ui/switch";
import Search from "../../SVG/Search";

export default function LobbyTable() {
	const [gameFilter, setGameFilter] =
		useState("Running");

	return (
		<>
			<div id='header' className="flex">
				<div id='left' className=" w-full justify-evenly">
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
					<div className="flex justify-center items-center my-3 bg-[#1B1C25] rounded-[6px] w-full max-w-[340px] border border-white/5 ">
						<Search />
                        <input
                            type='text'
                            placeholder='Search for a team, player or bet.'
                            className='w-full  h-[40px] bg-inherit text-[#5A5C6F] text-xs rounded-r-[6px]'
                        />
					</div>
				</div>
				<div id='right' className="flex flex-col justify-start items-end w-1/2 space-y-3">
					<h1 className="text-[#5A5C6F]/75 w-4/5 text-xs">Sort By</h1>
					<div className="flex items-center bg-[#1A1B23] rounded-[8px] w-4/5 border border-white/5">
						<h1 className="ml-4 whitespace-nowrap text-[#5A5C6F]  text-xs">Prize Pool:</h1>
						<select name="Sort" id="Sort" className=" w-[300px] h-[40px] rounded-[8px] bg-inherit  text-xs">
							<option value="h-t-l" className="text-white">High To Low</option>
							<option value="l-t-h" className="text-white">Low To High</option>
						</select>
					</div>
				</div>
			</div>
			<div id="table-content" className="my-3">
				<div id="header">
					<hr />
					<div className="flex my-5 text-[16px] text-[#A7ADB9]">
						<h1 className="w-2/6">Tournament</h1>
						<h1 className="w-1/6">Starts In</h1>
						<h1 className="w-1/6">Duration</h1>
						<h1 className="w-1/6">Prize Pool</h1>
					</div>
					<hr />
				</div>
			</div>
		</>
	); 
}
