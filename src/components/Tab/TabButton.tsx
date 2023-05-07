import { useContext } from "react";
import { TabGroupContext } from "./TabGroupContext";

interface TabButtonProps {
  id: string;
  children: React.ReactNode | string;
  className?: string;
  activeClassName?: string;
}

export const TabButton: React.FC<TabButtonProps> = ({
  id,
  children,
  className = "",
  activeClassName = "",
}) => {
  const { activeTab, setActiveTab } = useContext(TabGroupContext);

  return (
    <button
      className={`${activeTab === id ? activeClassName : ""} ${className}`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
};
