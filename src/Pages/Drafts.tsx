import Filter from "../components/MyDrafts/Filter";
import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Drafts() {
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
						className='h-[100px] w-3/4 rounded-[8px] bg-black'
					>
						
					</div>
				</div>
			</main>
		</>
	);
}
