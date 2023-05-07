import React from "react";
import { useListBox } from "./ListBoxContext";

export interface ListBoxOptionProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  selectedStyle?: string;
  selectedIcon?: React.ReactNode;
}

const ListBoxOption: React.FC<ListBoxOptionProps> = ({
  value,
  children,
  className = "relative cursor-default select-none py-2 pl-10 pr-4 hover:bg-gray-200 dark:hover:bg-gray-700",
  selectedStyle = "relative cursor-default select-none py-2 pl-10 pr-4 bg-gray-200 dark:bg-gray-700",
}) => {
  const { onSelect, selectedOption, selectedIcon } = useListBox();

  return (
    <li
      className={`${selectedOption === value ? selectedStyle : className}`}
      onClick={() => onSelect(value)}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {selectedOption === value && selectedIcon}
      </span>
      <div className="">{children}</div>
    </li>
  );
};

export default ListBoxOption;
