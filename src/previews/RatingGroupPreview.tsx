import React, { useState } from "react";

export default function RatingGroupPreview() {
  const [value, setValue] = useState(3);
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {[1,2,3,4,5].map((i) => (
        <button
          key={i}
          aria-pressed={value === i}
          onClick={() => setValue(i)}
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            background: value >= i ? "gold" : "#eee",
            border: "1px solid #ddd",
          }}
        />
      ))}
    </div>
  );
}
