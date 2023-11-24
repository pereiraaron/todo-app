import React from "react";
import { DropDownOptionType, ToDoDropdownProps } from "./lib/types";

const ToDoDropdown: React.FC<ToDoDropdownProps> = ({
  selected,
  handleSelect,
  options,
}) => {
  const handleChange = (e: any) => {
    handleSelect(e.target.value);
  };

  return (
    <>
      <label htmlFor="sortPriority" className="mr-2">
        Sort by Priority:
      </label>
      <select
        id="sortPriority"
        value={selected}
        onChange={handleChange}
        className="p-0.5 border rounded"
      >
        {options.map((option: DropDownOptionType) => {
          return (
            <option value={option.value} key={option.value}>
              {option?.displayText}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default ToDoDropdown;
