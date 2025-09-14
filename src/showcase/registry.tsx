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
  description: string;
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
    description: "Apple HIG style button with variants and sizes.",
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
    description: "Accessible checkbox built on Ark UI with Liquid Glass.",
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
    description: "Toggle between on and off states.",
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
    description: "Organize content into tabbed sections.",
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
    description: "Context or dropdown menu for grouped actions.",
    category: "Navigation",
    tags: ["navigation", "action"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ position: "relative", display: "inline-block" }}>
        <button>Menu</button>
      </div>
    ),
    code: `// TODO: Replace with real Menu example from 'liquidify-react'`,
  },

  // Overlay
  {
    id: "dialog",
    name: "Dialog",
    description: "Modal overlay for critical tasks and messages.",
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
    description: "Small overlay of contextual content.",
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
    description: "Text labels that appear on hover or focus.",
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
    description: "Indicate loading or processing state.",
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
  // Inputs (skeletons)
  {
    id: "numberinput",
    name: "NumberInput",
    description: "Input for numeric values with steppers.",
    category: "Inputs",
    tags: ["input", "form"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button>-</button>
        <input type="number" defaultValue={10} style={{ width: 80, padding: 8, borderRadius: 8 }} />
        <button>+</button>
      </div>
    ),
    code: `// TODO: Replace with real NumberInput from 'liquidify-react'`,
  },
  {
    id: "slider",
    name: "Slider",
    description: "Adjust numeric value by sliding a handle.",
    category: "Inputs",
    tags: ["input"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ display: "grid", gap: 8, width: 240 }}>
        <label htmlFor="slider-demo">Slider</label>
        <input id="slider-demo" type="range" min={0} max={100} defaultValue={50} />
      </div>
    ),
    code: `// TODO: Replace with real Slider from 'liquidify-react'`,
  },
  {
    id: "select",
    name: "Select",
    description: "Choose from options in a dropdown.",
    category: "Inputs",
    tags: ["input", "form"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ display: "grid", gap: 8 }}>
        <label htmlFor="sel-demo">Select</label>
        <select id="sel-demo" style={{ padding: 8, borderRadius: 8 }}>
          <option>Option A</option>
          <option>Option B</option>
          <option>Option C</option>
        </select>
      </div>
    ),
    code: `// TODO: Replace with real Select from 'liquidify-react'`,
  },
  {
    id: "combobox",
    name: "Combobox",
    description: "Autocomplete text field with list selection.",
    category: "Inputs",
    tags: ["input", "form"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ display: "grid", gap: 8 }}>
        <label htmlFor="combo-demo">Combobox</label>
        <input id="combo-demo" list="combo-list" placeholder="Type to filter..." style={{ padding: 8, borderRadius: 8 }} />
        <datalist id="combo-list">
          <option value="Alpha" />
          <option value="Beta" />
          <option value="Gamma" />
        </datalist>
      </div>
    ),
    code: `// TODO: Replace with real Combobox from 'liquidify-react'`,
  },
  {
    id: "tagsinput",
    name: "TagsInput",
    description: "Enter multiple tags with chips.",
    category: "Inputs",
    tags: ["input", "form"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ display: "grid", gap: 8 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span style={{ padding: "2px 8px", border: "1px solid #ddd", borderRadius: 12 }}>UI</span>
          <span style={{ padding: "2px 8px", border: "1px solid #ddd", borderRadius: 12 }}>Design</span>
        </div>
        <input placeholder="Add tag" style={{ padding: 8, borderRadius: 8 }} />
      </div>
    ),
    code: `// TODO: Replace with real TagsInput from 'liquidify-react'`,
  },
  {
    id: "rating",
    name: "RatingGroup",
    description: "Select a rating from a series (e.g., stars).",
    category: "Inputs",
    tags: ["input"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div style={{ display: "flex", gap: 6 }}>
        {[1,2,3,4,5].map((i) => (
          <button key={i} style={{ width: 28, height: 28, borderRadius: 6, background: i <= 3 ? "gold" : "#eee", border: "1px solid #ddd" }} />
        ))}
      </div>
    ),
    code: `// TODO: Replace with real RatingGroup from 'liquidify-react'`,
  },
  // Feedback (skeleton)
  {
    id: "toast",
    name: "Toast",
    description: "Transient messages for feedback.",
    category: "Feedback",
    tags: ["feedback"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => (
      <div>
        <button>Trigger Toast</button>
      </div>
    ),
    code: `// TODO: Replace with real Toast from 'liquidify-react'`,
  },
];
