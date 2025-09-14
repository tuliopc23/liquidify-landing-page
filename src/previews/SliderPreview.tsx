import React, { useState } from "react";

export default function SliderPreview() {
  const [value, setValue] = useState(50);
  return (
    <div style={{ display: "grid", gap: 8, width: 240 }}>
      <label htmlFor="slider">Slider: {value}</label>
      <input
        id="slider"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number((e.target as HTMLInputElement).value))}
      />
    </div>
  );
}
