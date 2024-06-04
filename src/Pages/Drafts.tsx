import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Drafts() {
	const [sports, setSports] = useState("");
	const [leagues, setLeagues] = useState("");
	const [duration, setDuration] = useState("");
	const [draftTypes, setDraftTypes] =
		useState("");
	const [drafts, setDrafts] = useState("");

	return (
		<>
			<NavBar />
			<main className='bg-lobby flex min-h-screen w-screen justify-center text-[#5A5C6F]'>
				<div
					id='container'
					className='mt-[5vh] flex h-full w-10/12 space-x-4'
				>
					<div
						id='filters'
						className='h-[400px] w-1/4 rounded-[8px] bg-[#1A1B23]'
					>
						<div
							id='filter-header'
							className='flex h-[50px] w-full items-center justify-start pl-4'
						>
							<h1 className='text-2xl'>
								Filters
							</h1>
						</div>
						<div
							id='filter-content'
							className='h-[350px] w-full'
						></div>
					</div>
					<div
						id='my-drafts'
						className='h-full w-3/4 rounded-[8px] bg-black'
					></div>
				</div>
			</main>
		</>
	);
}
