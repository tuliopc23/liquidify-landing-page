import React from "react";
import { Switch } from "liquidify-react";

export default function SwitchPreview() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Switch label="Enable notifications" defaultChecked />
    </div>
  );
}