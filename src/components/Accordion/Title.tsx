import { useContext } from "react";
import AccordionContext from "./AccordionContext";

export interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  const accordionContext = useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error(
      "Accordion.Title must be used within an Accordion component"
    );
  }
  const { toggleOpen, setIsOpen, isOpen, index } = accordionContext;

  return (
    <div
      className={`flex cursor-pointer flex-row items-center justify-between ${className}`}
      onClick={() => {
        toggleOpen(index);
        setIsOpen(!isOpen);
      }}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className={`transform fill-current transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <path d="M480 696 280 497h400L480 696Z" />
      </svg>
    </div>
  );
};

export default Title;
