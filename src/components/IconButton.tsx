import React from "react";
import { IconButtonProps } from "../lib/types";
import { iconMap } from "../lib/helper";
import Tooltip from "./Tooltip";

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onIconClick,
  color = "#a18aff",
  size = 16,
  tooltipId,
  tooltipContent,
  type = "button",
}) => {
  const IconComponent = iconMap[icon];

  const renderTooltip = tooltipId && tooltipContent && (
    <Tooltip id={tooltipId} content={tooltipContent} />
  );

  return (
    <>
      <button type={type} onClick={onIconClick} data-tooltip-id={tooltipId}>
        <IconComponent color={color} size={size} />
      </button>
      {renderTooltip}
    </>
  );
};

export default IconButton;
