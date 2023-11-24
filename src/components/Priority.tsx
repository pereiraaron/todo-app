import React from "react";
import { PriorityProps } from "../lib/types";
import { priorityMap } from "../lib/helper";
import Tooltip from "./Tooltip";

const Priority: React.FC<PriorityProps> = ({
  priority,
  isSelected,
  onClick,
}) => {
  const { color, tooltipContent } = priorityMap[priority];

  return (
    <>
      <button
        type="button"
        name={priority}
        onClick={onClick}
        data-tooltip-id={`${priority}-priority-tooltip`}
        className={`w-3 h-3 rounded-full ${
          isSelected ? "border border-black hover:opacity-75" : ""
        }`}
        style={{ background: color }}
      ></button>
      <Tooltip id={`${priority}-priority-tooltip`} content={tooltipContent} />
    </>
  );
};

export default Priority;
