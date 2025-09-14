const t=`import React from "react";
import { Button } from "liquidify-react/button";

export default function ButtonPreview() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}`;export{t as default};
