import NavBar from "../components/NavBar";
// App.js
import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Drafts from "./Drafts";
import Leaderboards from "./leaderboards";
import Hero from "../components/Landing/Hero";
import LobbyTable from "../components/Landing/LobbyTable";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/drafts",
			element: <Drafts />,
		},
		{
			path: "/leaderboard",
			element: <Leaderboards />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;

function HomePage() {
	return (
		<>
			<NavBar />
			<main className='bg-lobby flex min-h-screen max-w-screen justify-center text-white'>
				<div
					id='container'
					className=' mt-[5vh] w-10/12'
				>
					<Hero />
					<hr className='my-10 opacity-10' />
					<LobbyTable />
				</div>
			</main>
		</>
	);
}
