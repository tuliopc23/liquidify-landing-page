import React from "react";
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "liquidify-react";

export default function TabsPreview() {
  return (
    <TabsRoot value="one">
      <div style={{ display: "grid", gap: 8 }}>
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Tab one content</TabsContent>
        <TabsContent value="two">Tab two content</TabsContent>
      </div>
    </TabsRoot>
  );
}