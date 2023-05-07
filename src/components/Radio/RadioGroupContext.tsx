import { createContext, useContext } from "react";

interface RadioGroupContextValue {
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error(
      "useRadioGroupContext must be used within a RadioGroupContext.Provider"
    );
  }

  return context;
};

export default RadioGroupContext;
