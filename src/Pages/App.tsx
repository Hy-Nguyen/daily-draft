import NavBar from "../components/NavBar";
// App.js
import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import SolanaWalletProvider from "../components/wallet/Providers";

import Drafts from "./Drafts";
import Leaderboards from "./Leaderboards";
import Hero from "../components/Landing/Hero";
import LobbyTable from "../components/Landing/LobbyTable";
import EditDraftPage from "../components/MyDrafts/EditDrafts/EditDraftPage";

import { Buffer } from "buffer";
window.Buffer = Buffer;

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "drafts",
			element: <Drafts />,
		},
		{
			path: "drafts/:id", // Add a parameter to the path
			element: <EditDraftPage />, // Use the new component to handle the dynamic page
		},
		{
			path: "/leaderboard",
			element: <Leaderboards />,
		},
	]);
	return (
		<SolanaWalletProvider>
			<NextUIProvider>
				<RouterProvider router={router} />
			</NextUIProvider>
		</SolanaWalletProvider>
	);
};

export default App;

function HomePage() {
	return (
		<>
			<NavBar />
			<main className='bg-lobby flex min-h-screen w-screen justify-center text-white'>
				<div
					id='container'
					className='mt-[5vh] h-full w-10/12 max-w-[2000px]'
				>
					<Hero />
					<hr className='my-10 opacity-10' />
					<LobbyTable />
				</div>
			</main>
		</>
	);
}
