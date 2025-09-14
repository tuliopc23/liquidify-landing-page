import React, { useState } from "react";

export default function NumberInputPreview() {
  const [value, setValue] = useState(10);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <button onClick={() => setValue((v) => v - 1)}>-</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number((e.target as HTMLInputElement).value))}
        style={{ width: 80, padding: 8, borderRadius: 8 }}
      />
      <button onClick={() => setValue((v) => v + 1)}>+</button>
    </div>
  );
}
