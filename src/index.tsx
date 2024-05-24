import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/global.css";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// Route Imports
import App from "./Pages/App";
import Drafts from "./Pages/Drafts";
import Leaderboards from "./Pages/leaderboards";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<main>
				<App />
			</main>
		),
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

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		{/*<SolanaWalletProvider>*/}
		<RouterProvider router={router} />
		{/*</SolanaWalletProvider>*/}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
