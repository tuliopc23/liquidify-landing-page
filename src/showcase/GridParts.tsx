import React, { lazy, Suspense, useMemo, useRef } from "react";
import { css } from "../../styled-system/css";
import { useEffect, useState } from "react";

class ErrorBoundary extends React.Component<{ fallback?: React.ReactNode }, { hasError: boolean; message?: string }> {
  constructor(props: { fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: undefined };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error?.message ?? "" };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children as React.ReactNode;
  }
}

export type ComponentMeta = {
  id: string;
  name: string;
  description: string;
  previewModule: string; // path under src/previews
  sourceUrl: string;
  status?: "New" | "Updated" | "Deprecated" | null;
};

export const registry: ComponentMeta[] = [
  {
    id: "button",
    name: "Button",
    description: "Apple HIG style button with variants and sizes",
    previewModule: "/src/previews/ButtonPreview.tsx",
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify/tree/main/libs/components/src/components/button",
    status: "Updated",
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Accessible checkbox built on Ark UI with Liquid Glass.",
    previewModule: "/src/previews/CheckboxPreview.tsx",
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Organize content into tabbed sections.",
    previewModule: "/src/previews/TabsPreview.tsx",
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "Modal overlay for critical tasks and messages.",
    previewModule: "/src/previews/DialogPreview.tsx",
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
  },
  {
    id: "popover",
    name: "Popover",
    description: "Small overlay of contextual content.",
    previewModule: "/src/previews/PopoverPreview.tsx",
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "Text labels that appear on hover or focus.",
    previewModule: "/src/previews/TooltipPreview.tsx",
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
  },
  {
    id: "switch",
    name: "Switch",
    description: "Toggle between on and off states.",
    previewModule: "/src/previews/SwitchPreview.tsx",
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
  },
  {
    id: "progress",
    name: "Progress",
    description: "Indicate loading or processing state.",
    previewModule: "/src/previews/ProgressPreview.tsx",
    sourceUrl: "https://github.com/tuliopc23/LiqUIdify",
  },
];

const previewModules = import.meta.glob("/src/previews/**/*.tsx");
<<<<<<< HEAD
const previewRawModules = import.meta.glob("/src/previews/**/*.tsx", { as: "raw" });
||||||| parent of e8d4e886 (chore(repo): untrack node_modules and dist)
=======
const previewRawModules = import.meta.glob("/src/previews/**/*.tsx?raw", { import: "default" });
>>>>>>> e8d4e886 (chore(repo): untrack node_modules and dist)

function useIntersectionOnce<T extends Element>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    // Fallback: if IO is unavailable, show immediately
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // If element is already in (or near) viewport, show immediately
    const rect = el.getBoundingClientRect?.();
    const margin = (options?.rootMargin ? parseInt(options.rootMargin) || 0 : 0) + 300;
    if (rect && rect.top < (window.innerHeight + margin)) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options, visible]);
  return visible;
}

export function CardGrid(props: React.PropsWithChildren) {
  return (
    <div
      className={css({
        display: "grid",
        gap: 6,
        gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
      })}
    >
      {props.children}
    </div>
  );
}

export function ComponentCard({ meta }: { meta: ComponentMeta }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useIntersectionOnce(ref, { rootMargin: "250px" });
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState<string | null>(null);

  const LazyPreview = useMemo(
    () =>
      lazy(async () => {
        const loader = previewModules[meta.previewModule];
        if (!loader) throw new Error(`Preview not found: ${meta.previewModule}`);
        const mod = await loader();
        return { default: (mod as any).default ?? (mod as any).Preview };
      }),
    [meta.previewModule],
  );

  async function toggleCode() {
    if (showCode) {
      setShowCode(false);
      return;
    }
    const rawLoader = previewRawModules[meta.previewModule] as undefined | (() => Promise<string>);
    if (rawLoader) {
      try {
        const src = await rawLoader();
        setCode(src);
      } catch {}
    }
    setShowCode(true);
  }

  return (
    <article
      id={meta.id}
      ref={ref}
      className={css({
        position: "relative",
        borderRadius: "xl",
        bg: "glass.bg",
        borderWidth: "1px",
        borderColor: "glass.border",
        boxShadow: "lg",
        overflow: "hidden",
        transition: "transform 200ms ease",
        _hover: { transform: "translateY(-2px)" },
      })}
    >
      <header className={css({ p: 5, display: "grid", gap: 2 })}>
        {meta.status ? (
          <span className={css({ fontSize: "xs", px: 2, py: 1, borderRadius: "full", bg: "bg.surface" })}>
            {meta.status}
          </span>
        ) : null}
        <h2 className={css({ fontSize: "xl", fontWeight: 600 })}>{meta.name}</h2>
        <p className={css({ color: "muted" })}>{meta.description}</p>
      </header>
      <div className={css({ p: 5, pt: 0 })}>
        <ErrorBoundary
          fallback={
            <div className={css({
              h: "200px",
              bg: "bg.subtle",
              borderRadius: "md",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "muted",
              fontSize: "sm",
            })}
            >
              Preview failed to load
            </div>
          }
        >
          <Suspense fallback={<div className={css({ h: "200px", bg: "bg.subtle", borderRadius: "md" })} />}> 
            {visible ? <LazyPreview /> : <div className={css({ h: "200px", bg: "bg.subtle", borderRadius: "md" })} />}
          </Suspense>
        </ErrorBoundary>
      </div>
      {showCode ? (
        <div className={css({ p: 5, pt: 0 })}>
          <pre className={css({
            maxH: "400px",
            overflow: "auto",
            bg: "bg.subtle",
            color: "text",
            borderWidth: "1px",
            borderColor: "border.default",
            borderRadius: "lg",
            p: 4,
            fontFamily: "mono",
            fontSize: "sm",
          })}>
            {code ?? "Loading..."}
          </pre>
        </div>
      ) : null}
      <footer className={css({ p: 5, pt: 0, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 4 })}>
        <a className={css({ color: "link", _hover: { textDecoration: "underline" } })} href={meta.sourceUrl} target="_blank" rel="noreferrer">
          View Source ›
        </a>
        <button
          onClick={toggleCode}
          className={css({
            fontSize: "sm",
            px: 3,
            py: 2,
            borderWidth: "1px",
            borderColor: "border.default",
            borderRadius: "md",
            bg: "bg.surface",
            _hover: { bg: "bg.emphasized" },
          })}
        >
          {showCode ? "Hide code" : "Show code"}
        </button>
      </footer>
    </article>
  );
}
