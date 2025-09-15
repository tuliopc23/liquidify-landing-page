import React from "react";
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPositioner,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "liquidify-react";

export default function PopoverPreview() {
  return (
    <PopoverRoot>
      <PopoverTrigger>More Info</PopoverTrigger>
      <PopoverPositioner>
        <PopoverContent>
          <PopoverTitle>Popover</PopoverTitle>
          <PopoverDescription>Quick hint content.</PopoverDescription>
        </PopoverContent>
      </PopoverPositioner>
    </PopoverRoot>
  );
}
