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
    sourceUrl:
      "https://github.com/tuliopc23/LiqUIdify/tree/main/libs/components/src/components/button",
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
            <div
              style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}
            >
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
        <input
          type="number"
          defaultValue={10}
          style={{ width: 80, padding: 8, borderRadius: 8 }}
        />
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
        <input
          id="slider-demo"
          type="range"
          min={0}
          max={100}
          defaultValue={50}
        />
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
        <input
          id="combo-demo"
          list="combo-list"
          placeholder="Type to filter..."
          style={{ padding: 8, borderRadius: 8 }}
        />
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
          <span
            style={{
              padding: "2px 8px",
              border: "1px solid #ddd",
              borderRadius: 12,
            }}
          >
            UI
          </span>
          <span
            style={{
              padding: "2px 8px",
              border: "1px solid #ddd",
              borderRadius: 12,
            }}
          >
            Design
          </span>
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
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: i <= 3 ? "gold" : "#eee",
              border: "1px solid #ddd",
            }}
          />
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
  {
    id: "accordion",
    name: "Accordion",
    description: "Expand and collapse sections.",
    category: "Navigation",
    tags: ["navigation", "disclosure"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Accordion</div>,
    code: `// TODO: Replace with real Accordion from "liquidify-react"`,
  },
  {
    id: "angleslider",
    name: "AngleSlider",
    description: "Adjust angles with a circular slider.",
    category: "Inputs",
    tags: ["input", "slider"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: AngleSlider</div>,
    code: `// TODO: Replace with real AngleSlider from "liquidify-react"`,
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "User portrait and presence.",
    category: "Feedback",
    tags: ["display"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Avatar</div>,
    code: `// TODO: Replace with real Avatar from "liquidify-react"`,
  },
  {
    id: "carousel",
    name: "Carousel",
    description: "Slide through content.",
    category: "Navigation",
    tags: ["navigation", "media"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Carousel</div>,
    code: `// TODO: Replace with real Carousel from "liquidify-react"`,
  },
  {
    id: "clipboard",
    name: "Clipboard",
    description: "Copy to clipboard interactions.",
    category: "Inputs",
    tags: ["input", "utility"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Clipboard</div>,
    code: `// TODO: Replace with real Clipboard from "liquidify-react"`,
  },
  {
    id: "collapsible",
    name: "Collapsible",
    description: "Show or hide content.",
    category: "Navigation",
    tags: ["navigation", "disclosure"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Collapsible</div>,
    code: `// TODO: Replace with real Collapsible from "liquidify-react"`,
  },
  {
    id: "colorpicker",
    name: "ColorPicker",
    description: "Pick a color visually.",
    category: "Inputs",
    tags: ["input", "color"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: ColorPicker</div>,
    code: `// TODO: Replace with real ColorPicker from "liquidify-react"`,
  },
  {
    id: "datepicker",
    name: "DatePicker",
    description: "Select dates from a calendar.",
    category: "Inputs",
    tags: ["input", "date"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: DatePicker</div>,
    code: `// TODO: Replace with real DatePicker from "liquidify-react"`,
  },
  {
    id: "editable",
    name: "Editable",
    description: "Inline text editing.",
    category: "Inputs",
    tags: ["input", "text"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Editable</div>,
    code: `// TODO: Replace with real Editable from "liquidify-react"`,
  },
  {
    id: "field",
    name: "Field",
    description: "Form field wrapper with label and help.",
    category: "Inputs",
    tags: ["input", "form"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Field</div>,
    code: `// TODO: Replace with real Field from "liquidify-react"`,
  },
  {
    id: "fieldset",
    name: "Fieldset",
    description: "Group related form controls.",
    category: "Inputs",
    tags: ["input", "form"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Fieldset</div>,
    code: `// TODO: Replace with real Fieldset from "liquidify-react"`,
  },
  {
    id: "fileupload",
    name: "FileUpload",
    description: "Upload files with drag & drop.",
    category: "Inputs",
    tags: ["input", "files"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: FileUpload</div>,
    code: `// TODO: Replace with real FileUpload from "liquidify-react"`,
  },
  {
    id: "floatingpanel",
    name: "FloatingPanel",
    description: "Draggable/resizable overlay panel.",
    category: "Overlay",
    tags: ["overlay", "panel"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: FloatingPanel</div>,
    code: `// TODO: Replace with real FloatingPanel from "liquidify-react"`,
  },
  {
    id: "hovercard",
    name: "HoverCard",
    description: "Content on hover or focus.",
    category: "Overlay",
    tags: ["overlay", "hover"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: HoverCard</div>,
    code: `// TODO: Replace with real HoverCard from "liquidify-react"`,
  },
  {
    id: "iconbutton",
    name: "IconButton",
    description: "Button displaying only an icon.",
    category: "Inputs",
    tags: ["input", "button", "icon"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: IconButton</div>,
    code: `// TODO: Replace with real IconButton from "liquidify-react"`,
  },
  {
    id: "listbox",
    name: "Listbox",
    description: "Accessible single/multi select list.",
    category: "Inputs",
    tags: ["input", "list"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Listbox</div>,
    code: `// TODO: Replace with real Listbox from "liquidify-react"`,
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Navigate between pages.",
    category: "Navigation",
    tags: ["navigation", "pages"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Pagination</div>,
    code: `// TODO: Replace with real Pagination from "liquidify-react"`,
  },
  {
    id: "passwordinput",
    name: "PasswordInput",
    description: "Password field with reveal toggle.",
    category: "Inputs",
    tags: ["input", "password"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: PasswordInput</div>,
    code: `// TODO: Replace with real PasswordInput from "liquidify-react"`,
  },
  {
    id: "pininput",
    name: "PinInput",
    description: "One-time code/OTP input.",
    category: "Inputs",
    tags: ["input", "otp"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: PinInput</div>,
    code: `// TODO: Replace with real PinInput from "liquidify-react"`,
  },
  {
    id: "qrcode",
    name: "QrCode",
    description: "Display scannable QR codes.",
    category: "Feedback",
    tags: ["display", "qr"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: QrCode</div>,
    code: `// TODO: Replace with real QrCode from "liquidify-react"`,
  },
  {
    id: "radiogroup",
    name: "RadioGroup",
    description: "Pick one option from a set.",
    category: "Inputs",
    tags: ["input", "radio"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: RadioGroup</div>,
    code: `// TODO: Replace with real RadioGroup from "liquidify-react"`,
  },
  {
    id: "scrollarea",
    name: "ScrollArea",
    description: "Scrollable viewport with custom scrollbars.",
    category: "Navigation",
    tags: ["navigation", "scroll"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: ScrollArea</div>,
    code: `// TODO: Replace with real ScrollArea from "liquidify-react"`,
  },
  {
    id: "segmentgroup",
    name: "SegmentGroup",
    description: "Segmented control for switching views.",
    category: "Inputs",
    tags: ["input", "segment"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: SegmentGroup</div>,
    code: `// TODO: Replace with real SegmentGroup from "liquidify-react"`,
  },
  {
    id: "signaturepad",
    name: "SignaturePad",
    description: "Capture drawn signatures.",
    category: "Inputs",
    tags: ["input", "signature"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: SignaturePad</div>,
    code: `// TODO: Replace with real SignaturePad from "liquidify-react"`,
  },
  {
    id: "splitter",
    name: "Splitter",
    description: "Resizable panels with a splitter bar.",
    category: "Navigation",
    tags: ["layout", "resize"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Splitter</div>,
    code: `// TODO: Replace with real Splitter from "liquidify-react"`,
  },
  {
    id: "steps",
    name: "Steps",
    description: "Step-based progress and navigation.",
    category: "Feedback",
    tags: ["progress", "steps"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Steps</div>,
    code: `// TODO: Replace with real Steps from "liquidify-react"`,
  },
  {
    id: "timer",
    name: "Timer",
    description: "Countdowns and timers.",
    category: "Feedback",
    tags: ["time", "utility"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Timer</div>,
    code: `// TODO: Replace with real Timer from "liquidify-react"`,
  },
  {
    id: "toggle",
    name: "Toggle",
    description: "Binary toggle control.",
    category: "Inputs",
    tags: ["input", "toggle"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Toggle</div>,
    code: `// TODO: Replace with real Toggle from "liquidify-react"`,
  },
  {
    id: "togglegroup",
    name: "ToggleGroup",
    description: "Group of toggleable options.",
    category: "Inputs",
    tags: ["input", "toggle"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: ToggleGroup</div>,
    code: `// TODO: Replace with real ToggleGroup from "liquidify-react"`,
  },
  {
    id: "tour",
    name: "Tour",
    description: "Guided steps to onboard users.",
    category: "Overlay",
    tags: ["overlay", "guide"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: Tour</div>,
    code: `// TODO: Replace with real Tour from "liquidify-react"`,
  },
  {
    id: "treeview",
    name: "TreeView",
    description: "Hierarchical navigation of items.",
    category: "Navigation",
    tags: ["navigation", "tree"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: TreeView</div>,
    code: `// TODO: Replace with real TreeView from "liquidify-react"`,
  },
  {
    id: "progresscircular",
    name: "ProgressCircular",
    description: "Circular determinate/indeterminate progress.",
    category: "Feedback",
    tags: ["progress", "circular"],
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
    Demo: () => <div style={{ padding: 8 }}>Coming soon: ProgressCircular</div>,
    code: `// TODO: Replace with real ProgressCircular from "liquidify-react"`,
  },
];
