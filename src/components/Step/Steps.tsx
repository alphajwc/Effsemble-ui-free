import React, { FC, ReactNode } from "react";

interface StepsProps {
  children: ReactNode;
  className?: string;
}

export const Steps: FC<StepsProps> = ({
  children,
  className = "flex space-x-4",
}) => {
  return <div className={`${className}`}>{children}</div>;
};
