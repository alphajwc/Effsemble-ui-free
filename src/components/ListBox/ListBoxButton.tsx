import React from "react";
import { useListBox } from "./ListBoxContext";

export interface ListBoxButtonProps {
  children: React.ReactNode | string;
  className?: string;
  icon?: React.ReactNode;
}

const ListBoxButton: React.FC<ListBoxButtonProps> = ({
  children,
  className = "rounded-lg py-2 px-5 shadow-md",
  icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="25"
      viewBox="0 96 960 960"
      width="25"
      className="fill-current text-black dark:text-white"
    >
      <path d="M480 696 280 497h400L480 696Z" />
    </svg>
  ),
}) => {
  const { selectedOption, isOpen, setIsOpen } = useListBox();

  return (
    <button className={`${className}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="inline-flex gap-3 ">
        {selectedOption || children}
        {icon}
      </div>
    </button>
  );
};

export default ListBoxButton;
