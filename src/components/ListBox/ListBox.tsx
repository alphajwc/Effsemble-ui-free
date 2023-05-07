import React, { useState } from "react";
import ListBoxContext from "./ListBoxContext";
import ListBoxButton, { ListBoxButtonProps } from "./ListBoxButton";
import ListBoxOptionContainer, {
  ListBoxOptionContainerProps,
} from "./ListBoxOptionContainer";
import ListBoxOption, { ListBoxOptionProps } from "./ListBoxOption";

interface ListBoxProps {
  onSelect: (option: string) => void;
  selectedIcon?: React.ReactNode;
  children: React.ReactNode;
  defaultOption?: string;
}

interface ListBoxComposition {
  Button: React.FC<ListBoxButtonProps>;
  OptionContainer: React.FC<ListBoxOptionContainerProps>;
  Option: React.FC<ListBoxOptionProps>;
}

const ListBox: React.FC<ListBoxProps> & ListBoxComposition = ({
  onSelect,
  children,
  selectedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 96 960 960"
      width="20"
      className="fill-current text-black dark:text-white"
    >
      <path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" />
    </svg>
  ),
  defaultOption = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <ListBoxContext.Provider
      value={{
        selectedOption,
        onSelect: handleSelect,
        isOpen,
        setIsOpen,
        selectedIcon: selectedIcon,
      }}
    >
      <div className="relative inline-block">{children}</div>
    </ListBoxContext.Provider>
  );
};

ListBox.Button = ListBoxButton;
ListBox.Option = ListBoxOption;
ListBox.OptionContainer = ListBoxOptionContainer;

export default ListBox;
