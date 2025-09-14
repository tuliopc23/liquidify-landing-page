import React, { useEffect, useState } from "react";

export default function ToastPreview() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div>
      <button onClick={() => { setShow(true); setTimeout(() => setShow(false), 2000); }}>Trigger Toast</button>
      {show && (
        <div role="status" aria-live="polite" style={{ position: "fixed", bottom: 24, right: 24, background: "#111", color: "#fff", padding: "8px 12px", borderRadius: 8 }}>
          Saved!
        </div>
      )}
    </div>
  );
}
