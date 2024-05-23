import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<main className='flex min-h-screen items-center justify-center bg-slate-400'>
				<h1 className='text-4xl font-bold'>
					hello world
				</h1>
			</main>
		</>
	);
}

export default App;
