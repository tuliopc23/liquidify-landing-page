import React from "react";
import {
  Button,
  Checkbox,
  Switch,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  DialogRoot,
  DialogTrigger,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  PopoverRoot,
  PopoverTrigger,
  PopoverPositioner,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
  Progress,
} from "liquidify-react";

export type Category = "Inputs" | "Navigation" | "Overlay" | "Feedback";

export type ShowcaseEntry = {
  id: string;
  name: string;
  category: Category;
  tags?: string[];
  sourceUrl?: string;
  Demo: React.FC;
  code: string;
};

export const registry: ShowcaseEntry[] = [
  // Inputs
  {
    id: "button",
    name: "Button",
    category: "Inputs",
    tags: ["input", "action"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify/tree/main/libs/components/src/components/button",
    Demo: () => (
      <div style={{ display: "flex", gap: 12 }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
      </div>
    ),
    code: `import { Button } from "liquidify-react";

export default function Example() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}`,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "Inputs",
    tags: ["input", "form"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Checkbox label="Accept" />
      </div>
    ),
    code: `import { Checkbox } from "liquidify-react";

export default function Example() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Checkbox label="Accept" />
    </div>
  );
}`,
  },
  {
    id: "switch",
    name: "Switch",
    category: "Inputs",
    tags: ["input", "form"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Switch label="Enable notifications" defaultChecked />
      </div>
    ),
    code: `import { Switch } from "liquidify-react";

export default function Example() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Switch label="Enable notifications" defaultChecked />
    </div>
  );
}`,
  },

  // Navigation
  {
    id: "tabs",
    name: "Tabs",
    category: "Navigation",
    tags: ["navigation"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
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
    ),
    code: `import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "liquidify-react";

export default function Example() {
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
}`,
  },
  {
    id: "menu",
    name: "Menu",
    category: "Navigation",
    tags: ["navigation", "action"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div>Menu example (coming soon)</div>
    ),
    code: `// TODO: Replace with real Menu example from liquidify-react`,
  },

  // Overlay
  {
    id: "dialog",
    name: "Dialog",
    category: "Overlay",
    tags: ["overlay"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <DialogRoot>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogPositioner>
          <DialogContent>
            <DialogTitle>Welcome</DialogTitle>
            <DialogDescription>Simple dialog preview.</DialogDescription>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
              <DialogCloseTrigger>Close</DialogCloseTrigger>
            </div>
          </DialogContent>
        </DialogPositioner>
      </DialogRoot>
    ),
    code: `import { DialogRoot, DialogTrigger, DialogPositioner, DialogContent, DialogTitle, DialogDescription, DialogCloseTrigger } from "liquidify-react";

export default function Example() {
  return (
    <DialogRoot>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogPositioner>
        <DialogContent>
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription>Simple dialog preview.</DialogDescription>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <DialogCloseTrigger>Close</DialogCloseTrigger>
          </div>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
}`,
  },
  {
    id: "popover",
    name: "Popover",
    category: "Overlay",
    tags: ["overlay"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <PopoverRoot>
        <PopoverTrigger>More Info</PopoverTrigger>
        <PopoverPositioner>
          <PopoverContent>
            <PopoverTitle>Popover</PopoverTitle>
            <PopoverDescription>Quick hint content.</PopoverDescription>
          </PopoverContent>
        </PopoverPositioner>
      </PopoverRoot>
    ),
    code: `import { PopoverRoot, PopoverTrigger, PopoverPositioner, PopoverContent, PopoverTitle, PopoverDescription } from "liquidify-react";

export default function Example() {
  return (
    <PopoverRoot>
      <PopoverTrigger>More Info</PopoverTrigger>
      <PopoverPositioner>
        <PopoverContent>
          <PopoverTitle>Popover</PopoverTitle>
          <PopoverDescription>Quick hint content.</PopoverDescription>
        </PopoverContent>
      </PopoverPositioner>
    </PopoverRoot>
  );
}`,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "Overlay",
    tags: ["overlay"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <TooltipRoot>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipPositioner>
          <TooltipContent>Helpful tooltip</TooltipContent>
        </TooltipPositioner>
      </TooltipRoot>
    ),
    code: `import { TooltipRoot, TooltipTrigger, TooltipContent, TooltipPositioner } from "liquidify-react";

export default function Example() {
  return (
    <TooltipRoot>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>Helpful tooltip</TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
}`,
  },

  // Feedback
  {
    id: "progress",
    name: "Progress",
    category: "Feedback",
    tags: ["feedback"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ display: "grid", gap: 8, width: 240 }}>
        <Progress value={60} max={100} />
      </div>
    ),
    code: `import { Progress } from "liquidify-react";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 8, width: 240 }}>
      <Progress value={60} max={100} />
    </div>
  );
}`,
  },
];