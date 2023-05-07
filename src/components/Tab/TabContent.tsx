import React, { ReactNode, useContext } from "react";
import { TabGroupContext } from "./TabGroupContext";

interface TabContentProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const TabContent: React.FC<TabContentProps> = ({
  id,
  children,
  className = "",
}) => {
  const { activeTab } = useContext(TabGroupContext);

  if (activeTab !== id) {
    return null;
  }

  return <div className={`${className}`}>{children}</div>;
};
