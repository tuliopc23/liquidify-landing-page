import React from "react";

export default function ComboboxPreview() {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <label htmlFor="combo">Combobox</label>
      <input id="combo" list="combo-list" placeholder="Type to filter..." style={{ padding: 8, borderRadius: 8 }} />
      <datalist id="combo-list">
        <option value="Alpha" />
        <option value="Beta" />
        <option value="Gamma" />
      </datalist>
    </div>
  );
}
