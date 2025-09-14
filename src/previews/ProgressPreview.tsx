import React from "react";
import { Progress } from "liquidify-react";

export default function ProgressPreview() {
  return (
    <div style={{ display: "grid", gap: 8, width: 240 }}>
      <Progress value={60} max={100} />
    </div>
  );
}