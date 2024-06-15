import { motion } from "framer-motion";
import Lightning from "../../../Icons/Lightning";
import Refresh from "../../../Icons/Refresh";
import Reset from "../../../Icons/Reset";
import DotDotDot from "../../../Icons/DotDotDot";
import DropdownFilter from "../../ui/DropdownFilter";
import { useState } from "react";
import AddPlayer from "./AddPlayer";

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
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	return (
		<div className='flex h-full w-full flex-col items-center'>
			<div
				id='buttons'
				className='flex w-full justify-between space-x-3'
			>
				<div
					id='left'
					className='w-1/2 space-y-3 p-4'
				>
					<div
						id='top'
						className='flex h-[40px] w-full space-x-3'
					>
						<div className='flex w-1/2 items-center justify-center rounded-[8px] border border-[#52BE70] bg-[#52BE70]/10 py-4'>
							<Lightning />
							<h1>Autocomplete</h1>
						</div>
						<div className='flex w-1/2 justify-between'>
							<motion.div
								id='reset-search'
								className='border-draft flex h-full w-[30%] flex-row items-center justify-center space-x-2 hover:cursor-pointer'
								initial={{
									color: "#5A5C6F",
								}}
								whileHover={{
									color: "#fff",
									borderColor: "#fff",
								}}
							>
								<Refresh />
							</motion.div>
							<motion.div
								id='reset-search'
								className='border-draft flex h-full w-[30%] flex-row items-center justify-center space-x-2 hover:cursor-pointer'
								initial={{
									color: "#5A5C6F",
								}}
								whileHover={{
									color: "#fff",
									borderColor: "#fff",
								}}
							>
								<Reset />
							</motion.div>
							<motion.div
								id='reset-search'
								className='border-draft flex h-full w-[30%] flex-row items-center justify-center space-x-2 hover:cursor-pointer'
								initial={{
									color: "#5A5C6F",
								}}
								whileHover={{
									color: "#fff",
									borderColor: "#fff",
								}}
							>
								<DotDotDot />
							</motion.div>
						</div>
					</div>
					<div
						id='bottom'
						className='flex h-[40px] w-full space-x-3'
					>
						<div className='flex w-1/2 items-center justify-center rounded-[8px] bg-[#52BE70] py-4 uppercase'>
							<h1>90m/90m</h1>
						</div>
						<div className='flex w-1/2 items-center justify-center rounded-[8px] bg-[#52BE70] py-4'>
							<h1>0/6 Players</h1>
						</div>
					</div>
				</div>
				<div
					id='right'
					className='w-1/2 space-y-3 p-4'
				>
					<div
						id='top'
						className='flex h-[40px] w-full space-x-3'
					>
						<motion.div
							className='flex w-full items-center justify-center rounded-[8px] bg-[#52BE70] py-4 font-bold'
							whileHover={{
								boxShadow:
									"0px 0px 10px 0px #52BE70",
								fontSize: "24px",
							}}
						>
							<h1>Participate (FREE)</h1>
						</motion.div>
					</div>
					<div
						id='bottom'
						className='flex h-[40px] w-full space-x-3'
					>
						<div className='w-1/2'>
							<DropdownFilter
								options={["one", "two", "three"]}
								selected={name}
								setSelected={setName}
								height='40'
							/>
						</div>
						<div className='w-1/2'>
							<DropdownFilter
								options={[
									"Captain",
									"V. Captain",
									"three",
								]}
								selected={position}
								setSelected={setPosition}
								height='40'
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				id='field'
				className='relative mt-4 h-fit w-fit'
			>
				<img
					src='/field/field.png'
					alt='field'
					className='rounded-[10px] bg-[#111217]'
				/>
				<div>
					<div
						id='player-1'
						className='absolute left-[10%] top-[10%] flex h-[50px] w-[50px] items-center justify-center'
					>
						<AddPlayer />
					</div>
					<div
						id='player-2'
						className='absolute right-[10%] top-[10%] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#52BE70]'
					>
						<h1>2</h1>
					</div>
					<div
						id='player-3'
						className='absolute left-[10%] top-[50%] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#52BE70]'
					>
						<h1>3</h1>
					</div>
					<div
						id='player-4'
						className='absolute right-[10%] top-[50%] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#52BE70]'
					>
						<h1>4</h1>
					</div>
					<div
						id='player-5'
						className='absolute left-[10%] top-[90%] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#52BE70]'
					>
						<h1>5</h1>
					</div>
					<div
						id='player-6'
						className='absolute right-[10%] top-[90%] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#52BE70]'
					>
						<h1>6</h1>
					</div>
				</div>
			</div>
			<div id='overview'></div>
		</div>
	);
}
