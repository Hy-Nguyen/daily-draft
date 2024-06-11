import { motion } from "framer-motion";
import Search from "../../../Icons/Search";
import Refresh from "../../../Icons/Refresh";
import { useState } from "react";

export default function SearchSection({
	search,
	setSearch,
}: {
	search: string;
	setSearch: React.Dispatch<
		React.SetStateAction<string>
	>;
}) {

	const [hovered, setHovered] = useState(false);
	return (
		<div
			id='search-section'
			className='flex w-full items-center space-x-3'
		>
			<div
				id='search-bar'
				className='border-draft bg-draft my-3 flex w-3/5 items-center justify-center rounded-[6px]'
			>
				<Search />
				<input
					type='text'
					placeholder='Search for a player'
					className='h-[40px] w-full rounded-r-[6px] bg-inherit text-xs text-[#5A5C6F] transition-all focus:text-white focus:outline-none'
					value={search}
					onChange={(e) =>
						setSearch(e.target.value)
					}
				/>
			</div>
			<motion.div
				id='reset-search'
				className='border-draft flex w-2/5 flex-row space-x-2 hover:cursor-pointer'
				onClick={() => setSearch("")}
				initial={{
					color: "#5A5C6F",
				}}
				whileHover={{
					color: "#fff",
					borderColor: "#fff",
				}}
				onHoverStart={() => setHovered(true)}
				onHoverEnd={() => setHovered(false)}
			>
				<div className='flex h-[40px] w-full items-center justify-center space-x-3 text-inherit'>
					<h1 className='text-xs text-inherit'>
						Reset
					</h1>
					<Refresh hover={hovered}/>
				</div>
			</motion.div>
		</div>
	);
}
