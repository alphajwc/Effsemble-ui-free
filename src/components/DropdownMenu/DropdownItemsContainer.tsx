import { useContext } from "react";
import DropdownContext, { DropdownContextProps } from "./DropdownContext";

export interface DropdownItemsContainerProps {
  children: React.ReactNode;
  className?: string;
  submenu?: boolean;
  submenuClassName?: string;
}

const DropdownItemsContainer: React.FC<DropdownItemsContainerProps> = ({
  children,
  className = "absolute left-0 mt-2 w-fit rounded bg-white dark:bg-gray-900 shadow-lg",
  submenu = false,
  submenuClassName = "absolute top-0 left-full ml-2 w-48 rounded dark:bg-gray-900 bg-white shadow-lg",
}) => {
  const { isOpen } = useContext(DropdownContext) as DropdownContextProps;

  return (
    <div
      className={`${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      } transform transition-all duration-300 ease-in-out ${
        submenu == true ? submenuClassName : className
      }`}
    >
      <ul className="w-full list-none">{children}</ul>
    </div>
  );
};

export default DropdownItemsContainer;
