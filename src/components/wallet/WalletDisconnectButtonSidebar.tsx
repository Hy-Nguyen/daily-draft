import { useWallet } from "@solana/wallet-adapter-react";
import type { FC, MouseEventHandler } from "react";
import React, { useCallback, useMemo } from "react";
import type { ButtonProps } from "./Button";
import { WalletIcon } from "./WalletIcon";

export const WalletDisconnectButtonSidebar: FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  ...props
}) => {
  const { wallet, disconnect, disconnecting } = useWallet();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) disconnect().catch(() => {});
    },
    [onClick, disconnect],
  );

  const content = useMemo(() => {
    if (children) return children;
    if (disconnecting) return "Disconnecting ...";
    if (wallet) return "Disconnect";
    return "Disconnect Wallet";
  }, [children, disconnecting, wallet]);

  return (
    <button
      className="group-hover:text-bankmenBlack-1 mt-2 text-[11px] font-bold"
      disabled={disabled ?? !wallet}
      onClick={handleClick}
      {...props}
    >
      <p>Disconnect</p>
    </button>
  );
};
