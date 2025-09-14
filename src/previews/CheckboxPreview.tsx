import React from "react";
import { Checkbox } from "liquidify-react/checkbox";

export default function CheckboxPreview() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Checkbox label="Accept" />
    </div>
  );
}