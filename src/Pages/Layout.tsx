import React from 'react';
import SolanaWalletProvider from '../components/wallet/Providers';

function Layout({ children }: { children: React.ReactNode }) {
  return <SolanaWalletProvider>{children}</SolanaWalletProvider>;
}

export default Layout;
