import React from "react";
import WalletProvider from "../components/Wallet/Provider";

function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<WalletProvider>{children}</WalletProvider>
	);
}

export default Layout;
