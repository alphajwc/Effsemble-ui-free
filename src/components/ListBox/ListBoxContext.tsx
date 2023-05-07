import { createContext, useContext } from "react";

interface ListBoxContextProps {
  selectedOption: string;
  onSelect: (option: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedIcon: React.ReactNode;
}

const ListBoxContext = createContext<ListBoxContextProps | null>(null);

export const useListBox = () => {
  const context = useContext(ListBoxContext);
  if (!context) {
    throw new Error("useListBox must be used within a ListBoxProvider");
  }
  return context;
};

export default ListBoxContext;
