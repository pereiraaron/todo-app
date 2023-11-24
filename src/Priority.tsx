import React from "react";
import { PriorityProps } from "./lib/types";
import { priorityMap } from "./lib/helper";
import Tooltip from "./Tooltip";

const Priority: React.FC<PriorityProps> = ({
  priority,
  isSelected,
  onClick,
}) => {
  const color = priorityMap[priority].color;
  const content = priorityMap[priority].tooltipContent;

  return (
    <>
      <button
        name={priority}
        onClick={onClick}
        data-tooltip-id={`${priority}-priority-tooltip`}
        className={`w-3 h-3 rounded-[50%] ${
          isSelected ? "border-[#000] border-[1px] hover:opacity-75" : ""
        }`}
        style={{ background: color }}
      ></button>
      <Tooltip id={`${priority}-priority-tooltip`} content={content} />
    </>
  );
};

export default Priority;
