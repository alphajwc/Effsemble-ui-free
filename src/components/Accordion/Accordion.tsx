import React, { useContext, useState, ReactNode } from "react";
import AccordionGroupContext from "./AccordionGroupContext";
import Title, { TitleProps } from "./Title";
import AccordionContext from "./AccordionContext";
import Content, { ContentProps } from "./Content";

interface AccordionComposition {
  Title: React.FC<TitleProps>;
  Content: React.FC<ContentProps>;
}
interface AccordionProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const Accordion: React.FC<AccordionProps> & AccordionComposition = ({
  children,
  index,
  className = "",
}) => {
  const accordionGroupContext = useContext(AccordionGroupContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (index: number) =>
    accordionGroupContext?.onAccordionClick(index);

  return (
    <AccordionContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggleOpen,
        index: index !== undefined ? index : 0,
      }}
    >
      <div className={`${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;
