import { createContext } from "react";

interface AccordionGroupContextProps {
  accordionList: number[];
  onAccordionClick: (index: number) => void;
}

const AccordionGroupContext = createContext<AccordionGroupContextProps | null>(
  null
);

export default AccordionGroupContext;
