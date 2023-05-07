import React from "react";
import { useListBox } from "./ListBoxContext";
export interface ListBoxOptionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ListBoxOptionContainer: React.FC<ListBoxOptionContainerProps> = ({
  children,
  className = "absolute mt-1 w-max rounded left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 shadow-lg",
}) => {
  const { isOpen } = useListBox();

  return (
    <div
      className={`${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      } transform transition-all duration-300 ease-in-out  ${className}`}
    >
      <ul className="m-0 list-none p-0">{children}</ul>
    </div>
  );
};

export default ListBoxOptionContainer;
