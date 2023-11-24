import React from "react";
import { DropDownOptionType, ToDoDropdownProps } from "../lib/types";

const ToDoDropdown: React.FC<ToDoDropdownProps> = ({
  selected,
  handleSelect,
  options,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelect(e.target.value);
  };

  return (
    <div className="flex items-center">
      <label
        htmlFor="sortPriority"
        className="mr-2 text-sm font-medium text-white"
      >
        Sort by Priority:
      </label>
      <select
        id="sortPriority"
        value={selected}
        onChange={handleChange}
        className="p-0.5 border rounded text-sm outline-none font-medium text-primary"
      >
        {options.map((option: DropDownOptionType) => (
          <option
            value={option.value}
            key={option.value}
            className="text-sm font-medium text-primary"
          >
            {option?.displayText}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ToDoDropdown;
