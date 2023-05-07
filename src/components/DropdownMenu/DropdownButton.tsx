import { useContext } from "react";
import DropdownContext, { DropdownContextProps } from "./DropdownContext";

export interface DropdownButtonProps {
  children: React.ReactNode;
  className?: string;
  subMenu?: boolean;
  subMenuClassName?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  children,
  className = "rounded bg-blue-500 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-300",
  subMenu = false,
  subMenuClassName = "w-full px-10 py-2 text-left hover:bg-gray-100 focus:outline-none",
}) => {
  const { toggle } = useContext(DropdownContext) as DropdownContextProps;

  return (
    <>
      <button
        className={`${subMenu == true ? subMenuClassName : className}`}
        onClick={toggle}
      >
        {children}
      </button>
    </>
  );
};

export default DropdownButton;
