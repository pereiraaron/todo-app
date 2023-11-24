import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { TooltipProps } from "../lib/types";

const Tooltip: React.FC<TooltipProps> = ({ id, content, align = "bottom" }) => {
  const tooltipStyle = {
    fontSize: "12px",
    padding: "4px",
    background: "#7f66ff",
  };

  return (
    <ReactTooltip
      id={id}
      place={align}
      content={content}
      style={tooltipStyle}
    />
  );
};

export default Tooltip;
