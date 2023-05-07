import { createContext, useContext } from "react";

interface ModalContextType {
  open: boolean;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a Modal component");
  }
  return context;
};

export { ModalContext, useModal };
