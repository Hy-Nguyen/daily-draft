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
import {
  CLUSTER_NETWORK,
  RPC_URL,
} from "./Constants";

import { WalletModalProvider } from "./WalletModalProvider";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const network = clusterApiUrl(CLUSTER_NETWORK);

const SolanaWalletProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const endpoint = useMemo(
    () => RPC_URL,
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
      endpoint={network}
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
