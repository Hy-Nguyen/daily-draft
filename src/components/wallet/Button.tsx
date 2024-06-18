import { motion } from "framer-motion";
import type {
  CSSProperties,
  FC,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
} from "react";
import React from "react";

export type ButtonProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (
    e: MouseEvent<HTMLButtonElement>
  ) => void;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
}>;

export const Button: FC<ButtonProps> = (
  props
) => {
  return (
    <motion.button
      className={`w-full px-4 py-2 rounded-[4px] flex text-white xl:text-[20px]
        items-center justify-center  
        `}
      disabled={props?.disabled}
      style={{
        ...props?.style,
        zIndex: 100,
        background: "#7D92FF",
      }}
      whileHover={{
        background: "#4C69FF",
        scale: 1.1,
      }}
      onClick={props?.onClick}
      tabIndex={props?.tabIndex ?? 0}
      type="button"
    >
      {props?.startIcon !== undefined && (
        <i className="wallet-adapter-button-start-icon">
          {props?.startIcon}
        </i>
      )}
      {props?.children}
    </motion.button>
  );
};
