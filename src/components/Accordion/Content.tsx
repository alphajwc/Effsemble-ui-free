import { useContext } from "react";
import AccordionContext from "./AccordionContext";

export interface ContentProps {
  className?: string;
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ className, children }) => {
  const accordionContext = useContext(AccordionContext);
  if (!accordionContext) {
    throw new Error(
      "Accordion.Content must be used within an Accordion component"
    );
  }

  const { isOpen } = accordionContext;
  return (
    <div
      className={`overflow-hidden transition-all duration-100 ease-in-out ${
        isOpen ? `max-h-[1000px]  ${className}` : "max-h-0"
      }`}
    >
      <div>{children}</div>
    </div>
  );
};

export default Content;
