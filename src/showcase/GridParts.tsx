import React, { Suspense, useMemo, useRef } from "react";
import { css } from "../../styled-system/css";
import { useEffect, useState } from "react";
import type { ShowcaseEntry } from "./registry";

class ErrorBoundary extends React.Component<
  { fallback?: React.ReactNode },
  { hasError: boolean; message?: string }
> {
  constructor(props: { fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: undefined };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error?.message ?? "" };
  }
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
  sourceUrl?: string;
  status?: "New" | "Updated" | "Deprecated" | null;
  tags?: string[];
};

// Legacy registry removed. Use registry from ./registry.

type PrismLibType = {
  highlight: (code: string, grammar: unknown, language: string) => string;
  languages: Record<string, unknown>;
};

type PrismWindow = Window & { __Prism?: PrismLibType };

let __prismLoaded = false as boolean;

function useIntersectionOnce<T extends Element>(
  ref: React.RefObject<T>,
  options?: IntersectionObserverInit,
) {
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
    const margin =
      (options?.rootMargin ? parseInt(options.rootMargin) || 0 : 0) + 300;
    if (rect && rect.top < window.innerHeight + margin) {
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
        gridTemplateColumns: {
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
      })}
    >
      {props.children}
    </div>
  );
}

export function ComponentCard({
  meta,
  entry,
}: {
  meta: ComponentMeta;
  entry: ShowcaseEntry;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // In dev, render previews immediately to aid debugging; keep IO gating in prod
  const observerVisible = useIntersectionOnce(ref, { rootMargin: "250px" });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!import.meta.env.DEV) {
      setVisible(observerVisible);
    }
    if (import.meta.env.DEV) {
      setVisible(true);
    }
  }, [ref]);
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState<string | null>(null);
  const [highlighted, setHighlighted] = useState<string | null>(null);

  const LazyPreview = useMemo(() => entry.Demo, [entry.Demo]);

  async function toggleCode() {
    if (showCode) {
      setShowCode(false);
      setHighlighted(null);
      return;
    }
    try {
      const src = entry.code;
      setCode(src);
      try {
        if (!__prismLoaded) {
          await import("prismjs/themes/prism.css");
          const prismModule = await import("prismjs");
          await import("prismjs/components/prism-tsx");
          (window as PrismWindow).__Prism =
            (prismModule as unknown as { default?: PrismLibType }).default ??
            (prismModule as unknown as PrismLibType);
          __prismLoaded = true;
        }
        const PrismLib = (window as PrismWindow).__Prism;
        if (PrismLib) {
          const html = PrismLib.highlight(
            src,
            PrismLib.languages["tsx"],
            "tsx",
          );
          setHighlighted(html);
        } else {
          setHighlighted(null);
        }
      } catch {
        setHighlighted(null);
      }
    } catch {
      setCode(null);
      setHighlighted(null);
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
          <span
            className={css({
              fontSize: "xs",
              px: 2,
              py: 1,
              borderRadius: "full",
              bg: "bg.surface",
            })}
          >
            {meta.status}
          </span>
        ) : null}
        <h2 className={css({ fontSize: "xl", fontWeight: 600 })}>
          {meta.name}
        </h2>
        <p className={css({ color: "muted" })}>{meta.description}</p>
      </header>
      <div className={css({ p: 5, pt: 0 })}>
        <ErrorBoundary
          fallback={
            <div
              className={css({
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
          <Suspense
            fallback={
              <div
                className={css({
                  h: "200px",
                  bg: "bg.subtle",
                  borderRadius: "md",
                })}
              />
            }
          >
            {visible ? (
              <LazyPreview />
            ) : (
              <div
                className={css({
                  h: "200px",
                  bg: "bg.subtle",
                  borderRadius: "md",
                })}
              />
            )}
          </Suspense>
        </ErrorBoundary>
      </div>
      {showCode ? (
        <div className={css({ p: 5, pt: 0 })}>
          <pre
            className={css({
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
            })}
            dangerouslySetInnerHTML={
              highlighted ? { __html: highlighted } : undefined
            }
          >
            {highlighted ? undefined : (code ?? "Loading...")}
          </pre>
        </div>
      ) : null}
      <footer
        className={css({
          p: 5,
          pt: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
        })}
      >
        <div className={css({ display: "flex", alignItems: "center", gap: 4 })}>
          {meta.sourceUrl ? (
            <a
              className={css({
                color: "link",
                _hover: { textDecoration: "underline" },
              })}
              href={meta.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Source ›
            </a>
          ) : null}
        </div>
        <div className={css({ display: "flex", alignItems: "center", gap: 3 })}>
          {showCode && code ? (
            <button
              onClick={() => {
                try {
                  navigator.clipboard?.writeText(code);
                } catch {
                  // Clipboard API may be unavailable or blocked; ignore failures.
                  void 0;
                }
              }}
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
              Copy code
            </button>
          ) : null}
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
        </div>
      </footer>
    </article>
  );
}
