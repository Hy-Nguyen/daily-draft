/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useWallet } from '@solana/wallet-adapter-react';
import { signOut } from 'next-auth/react';
import type { FC } from 'react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ButtonProps } from './Button';
import { Button } from './Button';
import { WalletConnectButton } from './WalletConnectButton';
import { WalletModalButton } from './WalletModalButton';
import { useWalletModal } from './useWalletModal';

export const WalletMultiButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { publicKey, wallet, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const content = useMemo(() => {
    if (children) return children;
    if (!wallet || !base58) return null;
    return base58.slice(0, 4) + '..' + base58.slice(-4);
  }, [children, wallet, base58]);

  const copyAddress = useCallback(async () => {
    if (base58) {
      await navigator.clipboard.writeText(base58);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }, [base58]);

  const openDropdown = useCallback(() => {
    setActive(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setActive(false);
  }, []);

  const openModal = useCallback(() => {
    setVisible(true);
    closeDropdown();
  }, [setVisible, closeDropdown]);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;

      // Do nothing if clicking dropdown or its descendants
      if (!node || node.contains(event.target as Node)) return;

      closeDropdown();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, closeDropdown]);

  if (!wallet)
    return (
      <WalletModalButton {...props}>
        <h1 className="text-sm font-semibold xl:text-lg">Connect Wallet</h1>
      </WalletModalButton>
    );
  if (!base58)
    return (
      <WalletConnectButton {...props}>
        <h1 className="text-sm font-semibold xl:text-lg">Connect Wallet</h1>
      </WalletConnectButton>
    );

  return (
    <div className="wallet-adapter-dropdown items-center">
      <Button
        aria-expanded={active}
        className="wallet-adapter-button-trigger w-[180px]"
        onClick={openDropdown}
        {...props}
      >
        {content}
      </Button>
      <ul
        aria-label="dropdown-list"
        className={`wallet-adapter-dropdown-list ${
          active && 'wallet-adapter-dropdown-list-active visible translate-y-3 opacity-100'
        }`}
        ref={ref}
        role="menu"
      >
        <li onClick={copyAddress} className="wallet-adapter-dropdown-list-item" role="menuitem">
          {copied ? 'Copied' : 'Copy address'}
        </li>
        <li onClick={openModal} className="wallet-adapter-dropdown-list-item" role="menuitem">
          Change wallet
        </li>
        <li
          onClick={() => {
            void disconnect(), signOut();
          }}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          Disconnect
        </li>
      </ul>
    </div>
  );
};
