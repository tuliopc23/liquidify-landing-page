import React from "react";
import { TooltipRoot, TooltipTrigger, TooltipContent, TooltipPositioner } from "liquidify-react";

export default function TooltipPreview() {
  return (
    <TooltipRoot>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>Helpful tooltip</TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
}