import React, { useState } from "react";

export default function MenuPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={() => setOpen((o) => !o)}>Menu</button>
      {open && (
        <div role="menu" style={{ position: "absolute", top: 36, left: 0, background: "white", border: "1px solid #ddd", borderRadius: 8, minWidth: 140 }}>
          <button role="menuitem" style={{ display: "block", width: "100%", padding: 8, textAlign: "left" }} onClick={() => setOpen(false)}>Item A</button>
          <button role="menuitem" style={{ display: "block", width: "100%", padding: 8, textAlign: "left" }} onClick={() => setOpen(false)}>Item B</button>
          <button role="menuitem" style={{ display: "block", width: "100%", padding: 8, textAlign: "left" }} onClick={() => setOpen(false)}>Item C</button>
        </div>
      )}
    </div>
  );
}
