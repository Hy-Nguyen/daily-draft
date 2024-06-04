import NavBar from "../components/NavBar";
import React from "react";

export default function Drafts() {
	return (
		<>
			<NavBar />
			<main className='bg-lobby flex min-h-screen w-screen justify-center text-white'>
				<div
					id='container'
					className='mt-[5vh] h-full w-10/12'
				>
					Draft
				</div>
			</main>
		</>
	);
}
