import { motion } from 'framer-motion';
import type { CSSProperties, FC, MouseEvent, PropsWithChildren, ReactElement } from 'react';
import React from 'react';

export type ButtonProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
}>;

export const Button: FC<ButtonProps> = (props) => {
  return (
    <motion.button
      className={`flex w-[180px] items-center justify-center rounded-[5px] px-4 py-2 text-white xl:text-[20px]`}
      disabled={props?.disabled}
      style={{
        ...props?.style,
        zIndex: 100,
        background: '#52BE70',
      }}
      whileHover={{
        background: '#34A152',
        scale: 1.1,
      }}
      onClick={props?.onClick}
      tabIndex={props?.tabIndex ?? 0}
      type="button"
    >
      {props?.startIcon !== undefined && <i className="wallet-adapter-button-start-icon">{props?.startIcon}</i>}
      {props?.children}
    </motion.button>
  );
};
