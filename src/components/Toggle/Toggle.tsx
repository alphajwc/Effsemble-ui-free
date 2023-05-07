import React, { useState } from "react";

interface ToggleProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  toggleStyle?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  defaultChecked = false,
  onChange,
  toggleStyle = "bg-green-500",
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange && onChange(newChecked);
  };

  return (
    <label className="inline-flex cursor-pointer items-center">
      <span className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleChange}
        />
        <span
          className={`block h-6 w-10 rounded-full transition-colors duration-200 ease-in ${
            checked ? toggleStyle : "bg-gray-400"
          }`}
        ></span>
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 transform rounded-full border border-gray-300 bg-white transition-transform duration-200 ease-in ${
            checked ? "translate-x-4" : ""
          }`}
        ></span>
      </span>
    </label>
  );
};

export default Toggle;
