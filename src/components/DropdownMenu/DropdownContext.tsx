import { createContext } from "react";

export interface DropdownContextProps {
  isOpen: boolean;
  toggle: () => void;
}

const DropdownContext = createContext<DropdownContextProps | null>(null);

export default DropdownContext;
