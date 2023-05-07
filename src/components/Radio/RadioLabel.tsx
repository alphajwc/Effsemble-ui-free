import React from "react";

interface RadioLabelProps {
  children: React.ReactNode;
  className?: string;
}

const RadioLabel: React.FC<RadioLabelProps> = ({
  children,
  className = "",
}) => {
  return <span className={`ml-2 ${className}`}>{children}</span>;
};

export default RadioLabel;
