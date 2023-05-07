import React, { useState } from "react";
import AccordionGroupContext from "./AccordionGroupContext";

interface AccordionGroupProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  className = "",
}) => {
  const [accordionList, setAccordionList] = useState<number[]>([]);

  const onAccordionClick = (index: number) => {
    const isOpen = accordionList.includes(index); //used to search if exists Accordion from index
    setAccordionList((prev) => {
      if (isOpen) {
        //if exists Accordion from index
        return prev.filter((i) => i !== index); //remove Accordion from index
      } else {
        //if not exists Accordion from index
        return [...prev, index]; //add Accordion from index
      }
    });
  };

  return (
    <AccordionGroupContext.Provider value={{ accordionList, onAccordionClick }}>
      <div className={`${className}`}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement, { index })
        )}
      </div>
    </AccordionGroupContext.Provider>
  );
};

export default AccordionGroup;
