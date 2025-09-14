import React, { useState } from "react";

export default function TagsInputPreview() {
  const [tags, setTags] = useState<string[]>(["UI", "Design"]);
  const [input, setInput] = useState("");
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {tags.map((t, idx) => (
          <span key={idx} style={{ padding: "2px 8px", border: "1px solid #ddd", borderRadius: 12 }}>{t}</span>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim()) return;
          setTags((arr) => [...arr, input.trim()]);
          setInput("");
        }}
      >
        <input value={input} onChange={(e) => setInput((e.target as HTMLInputElement).value)} placeholder="Add tag" style={{ padding: 8, borderRadius: 8 }} />
      </form>
    </div>
  );
}
