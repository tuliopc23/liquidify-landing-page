import React, { lazy, Suspense, useMemo, useRef } from "react";
import { css } from "../../styled-system/css";
import { useEffect, useState } from "react";

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
];

const previewModules = import.meta.glob("/src/previews/**/*.tsx");
const previewRawModules = import.meta.glob("/src/previews/**/*.tsx", { as: "raw" });

function useIntersectionOnce<T extends Element>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || visible || typeof IntersectionObserver === "undefined") return;
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
        <Suspense fallback={<div className={css({ h: "200px", bg: "bg.subtle", borderRadius: "md" })} />}> 
          {visible ? <LazyPreview /> : null}
        </Suspense>
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
