/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import EditDraftHero from "./EditDraftHero";
import { useState } from "react";

export default function EditDraftPage() {
	const { id } = useParams();
	const [playerType, setPlayerType] =
		useState("");
	const [playerCounts, setPlayerCounts] =
		useState({
			GK: 0,
			DF: 0,
			MF: 0,
			FW: 0,
		});

	// Rest of the code...

	return (
		<>
			<main>
				<div
					id='container'
					className='mt-[5vh] flex h-full w-10/12 flex-col space-x-4'
				>
					<EditDraftHero
						title='UEFA EURO 2024'
						date='May 16, 2024'
						team='15'
						prizePool='1.5'
						buyIn='.5'
					/>
					<hr className='my-10 border-white/10' />
					<div id='body'>hi</div>
				</div>
			</main>
		</>
	);
}
