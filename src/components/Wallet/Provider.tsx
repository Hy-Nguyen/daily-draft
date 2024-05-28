import React, { ReactNode } from "react";
import {
	ConnectionProvider,
	WalletProvider as SolanaWalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

function WalletProvider({
	children,
}: {
	children: ReactNode;
}) {
	const network = WalletAdapterNetwork.Devnet; // Change to Mainnet or Testnet as needed
	const endpoint = clusterApiUrl(network);
	const wallets = [new PhantomWalletAdapter()]; // Add other wallets if needed

	return (
		<ConnectionProvider endpoint={endpoint}>
			<SolanaWalletProvider
				wallets={wallets}
				autoConnect={true}
			>
				{children}
			</SolanaWalletProvider>
		</ConnectionProvider>
	);
}

export default WalletProvider;
