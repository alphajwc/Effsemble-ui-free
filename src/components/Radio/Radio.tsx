import React from "react";
import RadioButton from "./RadioButton";
import RadioLabel from "./RadioLabel";

interface RadioComposition {
  Button: typeof RadioButton;
  Label: typeof RadioLabel;
}
interface RadioProps {
  children: React.ReactNode;
  className?: string;
  selectedStyle?: string;
}

const Radio: React.FC<RadioProps> & RadioComposition = ({
  children,
  className = "",
  selectedStyle = "",
}) => {
  return <label className={`cursor-pointer ${className}  `}>{children}</label>;
};

Radio.Button = RadioButton;
Radio.Label = RadioLabel;

export default Radio;
