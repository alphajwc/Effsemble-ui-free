import React from "react";
import { useRadioGroupContext } from "./RadioGroupContext";

interface RadioButtonProps {
  value: string;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ value, className = "" }) => {
  const { selectedValue, onValueChange } = useRadioGroupContext();

  return (
    <input
      type="radio"
      value={value}
      checked={selectedValue === value}
      onChange={() => onValueChange(value)}
      className={`cursor-pointer ${className}`}
    />
  );
};

export default RadioButton;
