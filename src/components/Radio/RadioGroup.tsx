import React, { useState } from "react";
import RadioGroupContext from "./RadioGroupContext";

interface RadioGroupProps {
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  defaultValue,
  onChange,
  className = "",
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <RadioGroupContext.Provider
      value={{ selectedValue, onValueChange: handleChange }}
    >
      <div className={`${className}`}>{children}</div>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
