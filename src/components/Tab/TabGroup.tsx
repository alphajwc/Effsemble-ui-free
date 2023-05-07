import React, { useState } from "react";
import { TabGroupContext } from "./TabGroupContext";

interface TabGroupProps {
  children: React.ReactNode;
  className?: string;
  defaultTab?: string;
}

const TabGroup: React.FC<TabGroupProps> = ({
  children,
  className = "",
  defaultTab = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || "");

  return (
    <TabGroupContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`${className}`}>{children}</div>
    </TabGroupContext.Provider>
  );
};

export default TabGroup;
