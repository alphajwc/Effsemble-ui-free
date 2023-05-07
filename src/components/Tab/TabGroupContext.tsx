import { createContext } from "react";

interface TabGroupContextProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const TabGroupContext = createContext<TabGroupContextProps>({
  activeTab: "",
  setActiveTab: () => {},
});
