import React, { FC, ReactNode } from "react";

export type stepType = "active" | "completed" | "default" | "fail" | "custom";

interface StepProps {
  stepType?: stepType;
  children: ReactNode;
  activeClassName?: string;
  completedClassName?: string;
  defaultClassName?: string;
  failClassName?: string;
  customClassName?: string;
}

export const Step: FC<StepProps> = ({
  children,
  stepType = "default",
  customClassName = "",
  activeClassName = "bg-blue-500 text-white",
  completedClassName = "bg-green-500 text-white",
  defaultClassName = "bg-gray-300 text-gray-600",
  failClassName = "bg-red-500 text-white",
}) => {
  const stepClassName = {
    active: {
      className: activeClassName,
    },
    completed: {
      className: completedClassName,
    },
    default: {
      className: defaultClassName,
    },
    fail: {
      className: failClassName,
    },
    custom: {
      className: customClassName,
    },
  };

  return (
    <div
      className={`w-24 rounded-lg p-2 text-center ${stepClassName[stepType].className}`}
    >
      {children}
    </div>
  );
};
