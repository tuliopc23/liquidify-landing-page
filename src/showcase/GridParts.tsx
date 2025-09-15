import React, { Suspense, useMemo, useRef } from "react";
import { css } from "../../styled-system/css";
import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
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

// Prism dynamic import handled in CodeBlock component

// NOTE: intersection gating disabled

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
  // Always render previews; IO gating caused empty cards in some environments
  const visible = true;
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState<string | null>(null);
  // highlighting handled inside CodeBlock

  const LazyPreview = useMemo(() => entry.Demo, [entry.Demo]);

  async function toggleCode() {
    if (showCode) {
      setShowCode(false);
      return;
    }
    const src = entry.code;
    setCode(src);
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
          <div
            className={css({
              maxH: "400px",
              overflow: "auto",
              borderWidth: "1px",
              borderColor: "border.default",
              borderRadius: "lg",
              bg: "bg.subtle",
            })}
          >
            <CodeBlock code={code ?? ""} language="tsx" />
          </div>
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
