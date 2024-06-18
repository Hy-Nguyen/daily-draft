"use client";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import {
	AlphaWalletAdapter,
	LedgerWalletAdapter,
	PhantomWalletAdapter,
	SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

import { WalletModalProvider } from "./WalletModalProvider";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

// Default styles that can be overridden by your app
import "./wallet.css";


const SolanaWalletProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {

  const network = WalletAdapterNetwork.Devnet;


	const endpoint = useMemo(
		() => clusterApiUrl(network),
		[network]
	);

	const wallets = useMemo(
		() => [
			new PhantomWalletAdapter(),
			new AlphaWalletAdapter(),
			new SolflareWalletAdapter(),
			new LedgerWalletAdapter(),
		],
		[network]
	);

	return (
		<ConnectionProvider
			endpoint={endpoint}
			config={{ commitment: "confirmed" }}
		>
			<WalletProvider wallets={wallets}>
				<WalletModalProvider>
					{children}
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
};

export default SolanaWalletProvider;
