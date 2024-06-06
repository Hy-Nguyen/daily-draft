import GameFilters from "../components/Landing/GameFilters";
import DraftItem from "../components/MyDrafts/DraftItem";
import Filter from "../components/MyDrafts/Filter";
import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Drafts() {
	// Filter States
	const [sports, setSports] =
		useState("Football");
	const [leagues, setLeagues] = useState(
		"UEFA Euro 2024"
	);
	const [duration, setDuration] = useState(
		"All Duration"
	);
	const [draftTypes, setDraftTypes] =
		useState("All Types");
	const [drafts, setDrafts] =
		useState("All Drafts");

	// Draft Filter States
	const [filterDraft, setFilterDraft] =
		useState("Upcoming");

	const filters = [
		"Upcoming",
		"Completed",
		"Cancelled",
		"Live",
	];

	return (
		<>
			<NavBar />
			<main className='bg-lobby flex min-h-screen w-screen justify-center text-[#5A5C6F]'>
				<div
					id='container'
					className='mt-[5vh] flex h-full w-10/12 space-x-4'
				>
					<Filter
						states={[
							sports,
							leagues,
							duration,
							draftTypes,
							drafts,
						]}
						setStates={[
							setSports,
							setLeagues,
							setDuration,
							setDraftTypes,
							setDrafts,
						]}
					/>
					<div
						id='my-drafts'
						className='h-[500px] w-3/4 rounded-[8px] bg-[#191A22] p-6'
					>
						<div
							id='header'
							className='flex w-full justify-between'
						>
							<h1 className='text-[18px] text-white'>
								My Drafts
							</h1>
							<div
								id='filters'
								className='flex space-x-3'
							>
								{filters.map((filter) => (
									<GameFilters
										key={filter}
										text={filter}
										active={
											filter === filterDraft
										}
										setActive={setFilterDraft}
									/>
								))}
							</div>
						</div>
						<div id='table' className='mt-6'>
							<div
								id='header'
								className='grid grid-cols-12 border-b border-white/10 pb-4'
							>
								<h1 className='col-span-4'>
									Drafts
								</h1>
								<h1 className='col-span-1'>
									Entry Fee
								</h1>
								<h1 className='col-span-1'>
									Prize
								</h1>
								<h1 className='col-span-2'>
									Entries
								</h1>
								<div className='flex'>
									<h1>Date</h1>
									<div>{">"}</div>
								</div>
							</div>
							<div id='my-drafts'>
								<DraftItem />
								<DraftItem />
								<DraftItem />
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
