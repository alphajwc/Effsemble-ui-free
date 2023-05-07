import { Dispatch, SetStateAction, createContext } from "react";

interface AccordionContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleOpen: (index: number) => void;
  index: number;
}

const AccordionContext = createContext<AccordionContextProps | null>(null);

export default AccordionContext;
