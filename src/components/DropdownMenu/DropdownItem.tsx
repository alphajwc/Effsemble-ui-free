import { useContext } from "react";
import DropdownContext, { DropdownContextProps } from "./DropdownContext";

export interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  subMenu?: boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick,
  className = "w-full p-3 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700",
  subMenu = false,
}) => {
  const { toggle } = useContext(DropdownContext) as DropdownContextProps;

  return (
    <li>
      {subMenu !== true && (
        <button
          className={`${className}`}
          onClick={() => {
            if (onClick) onClick();
            toggle();
          }}
        >
          {children}
        </button>
      )}
      {subMenu === true && <> {children}</>}
    </li>
  );
};
export default DropdownItem;
