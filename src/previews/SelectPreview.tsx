import React from "react";

export default function SelectPreview() {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <label htmlFor="sel">Select</label>
      <select id="sel" style={{ padding: 8, borderRadius: 8 }}>
        <option>Option A</option>
        <option>Option B</option>
        <option>Option C</option>
      </select>
    </div>
  );
}
