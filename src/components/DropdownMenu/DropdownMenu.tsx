import { MutableRefObject, useEffect, useRef, useState } from "react";
import DropdownContext from "./DropdownContext";
import DropdownButton, { DropdownButtonProps } from "./DropdownButton";
import { DropdownItemProps } from "./DropdownItem";
import DropdownItemsContainer, {
  DropdownItemsContainerProps,
} from "./DropdownItemsContainer";
import DropdownItem from "./DropdownItem";

interface DropdownMenuProps {
  children: React.ReactNode;
  className?: string;
}
interface DropdownMenuComposition {
  Button: React.FC<DropdownButtonProps>;
  Item: React.FC<DropdownItemProps>;
  ItemsContainer: React.FC<DropdownItemsContainerProps>;
}
const DropdownMenu: React.FC<DropdownMenuProps> & DropdownMenuComposition = ({
  children,
  className = "relative w-max",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownMenuRef = useRef(
    null
  ) as MutableRefObject<HTMLDivElement | null>;
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMenuRef]);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div ref={dropdownMenuRef} className={`${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

DropdownMenu.Button = DropdownButton;
DropdownMenu.Item = DropdownItem;
DropdownMenu.ItemsContainer = DropdownItemsContainer;

export default DropdownMenu;
