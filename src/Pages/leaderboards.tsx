import NavBar from "../components/NavBar";
import React from "react";

export default function Leaderboards() {
	return (
		<>
			<NavBar />
			<main className='flex min-h-screen items-center justify-center bg-slate-400'>
				<h1 className='text-4xl font-bold'>
					Leaderboard Page
				</h1>
			</main>
		</>
	);
}
