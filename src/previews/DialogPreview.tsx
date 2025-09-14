import React from "react";
import {
  DialogRoot,
  DialogTrigger,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
} from "liquidify-react";

export default function DialogPreview() {
  return (
    <DialogRoot>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogPositioner>
        <DialogContent>
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription>Simple dialog preview.</DialogDescription>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <DialogCloseTrigger>Close</DialogCloseTrigger>
          </div>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
}