import React, { useEffect, useRef, useState } from "react";
import { css, cx } from "../../styled-system/css";
import { cardGlass, button, typography } from "../pandaStyles";

type TokenName = string;

const HUES: TokenName[] = [
  "apple-blue",
  "apple-indigo",
  "apple-pink",
  "apple-red",
  "apple-orange",
  "apple-yellow",
  "apple-green",
  "apple-teal",
  "apple-cyan",
  "apple-red-orange",
  "apple-tomato",
  "apple-pink-light",
  "apple-taupe",
];

const GRAYS: TokenName[] = [
  "system-gray-50",
  "system-gray-100",
  "system-gray-200",
  "system-gray-300",
  "system-gray-400",
  "system-gray-500",
  "system-gray-600",
  "system-gray-700",
  "system-gray-800",
  "system-gray-900",
];

const SEMANTIC: TokenName[] = [
  "text",
  "muted",
  "link",
  "primary",
  "success",
  "warning",
  "danger",
  "info",
  "bg.canvas",
  "bg.surface",
  "bg.subtle",
  "border.default",
  "glass.bg",
  "glass.border",
  "glass.tint",
  "glass.ring",
];

// --- Color utils ---
const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

function parseColorToRgba(
  input: string,
): { r: number; g: number; b: number; a: number } | null {
  if (!input) return null;
  const str = input.trim();
  // hex #RRGGBB or #RGB
  if (str.startsWith("#")) {
    const hex = str.slice(1);
    if (hex.length === 3) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      return { r, g, b, a: 1 };
    }
    if (hex.length === 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return { r, g, b, a: 1 };
    }
  }
  // rgb/rgba
  const rgbMatch = str.match(/rgba?\(([^)]+)\)/i);
  if (rgbMatch) {
    const parts = rgbMatch[1].split(",").map((v) => v.trim());
    const r = parseFloat(parts[0]);
    const g = parseFloat(parts[1]);
    const b = parseFloat(parts[2]);
    const a = parts[3] !== undefined ? parseFloat(parts[3]) : 1;
    return { r, g, b, a };
  }
  return null;
}

function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }) {
  const srgb = [r, g, b]
    .map((v) => v / 255)
    .map((u) =>
      u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4),
    );
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function contrastRatio(fg: string, bg: string): number | null {
  const f = parseColorToRgba(fg);
  const b = parseColorToRgba(bg);
  if (!f || !b) return null;
  // Blend foreground over background if fg has alpha
  const alpha = clamp(f.a, 0, 1);
  const r = f.r * alpha + b.r * (1 - alpha);
  const g = f.g * alpha + b.g * (1 - alpha);
  const bl = f.b * alpha + b.b * (1 - alpha);
  const L1 = relativeLuminance({ r, g, b: bl });
  const L2 = relativeLuminance({ r: b.r, g: b.g, b: b.b });
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

function ratingFromContrast(cr: number | null): string {
  if (cr == null) return "n/a";
  if (cr >= 7) return `AAA ${cr.toFixed(2)}:1`;
  if (cr >= 4.5) return `AA ${cr.toFixed(2)}:1`;
  if (cr >= 3) return `AA* ${cr.toFixed(2)}:1`;
  return `${cr.toFixed(2)}:1`;
}

// Retrieve computed CSS variable value (scoped to element for local dark mode)
function getVar(el: HTMLElement, token: string): string {
  const varName = `--colors-${token.replaceAll(".", "\\.")}`;
  const v = getComputedStyle(el).getPropertyValue(varName).trim();
  return v || "";
}

const Swatch: React.FC<
  { name: string; scopeEl: HTMLElement | null } & { large?: boolean }
> = ({ name, scopeEl, large }) => {
  const [resolved, setResolved] = useState<string>("");
  const [contrastTextOnSwatch, setContrastTextOnSwatch] =
    useState<string>("n/a");
  const [contrastSwatchOnSurface, setContrastSwatchOnSurface] =
    useState<string>("n/a");

  useEffect(() => {
    if (!scopeEl) return;
    const color = getVar(scopeEl, name);
    const text = getVar(scopeEl, "text");
    const surface = getVar(scopeEl, "bg.surface");
    setResolved(color || "");
    setContrastTextOnSwatch(ratingFromContrast(contrastRatio(text, color)));
    setContrastSwatchOnSurface(
      ratingFromContrast(contrastRatio(color, surface)),
    );
  }, [scopeEl, name]);

  const varRef = `var(--colors-${name.replaceAll(".", "\\.")})`;
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      })}
    >
      <div
        className={css({
          borderRadius: "0.75rem",
          height: large ? "6rem" : "3.25rem",
          borderWidth: "1px",
          borderColor: name.startsWith("border")
            ? "border.default"
            : "glass.border",
          boxShadow: "sm",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "text",
        })}
        style={{ backgroundColor: varRef }}
        title={resolved}
      >
        <span
          className={css({
            fontFamily: "sans",
            fontSize: "0.875rem",
            color: name.includes("bg.") ? "text" : "white",
          })}
          style={{ color: name.includes("bg.") ? undefined : undefined }}
        >
          {name}
        </span>
      </div>
      <div
        className={css({ display: "flex", gap: "0.5rem", flexWrap: "wrap" })}
      >
        <span
          className={css({
            fontFamily: "mono",
            fontSize: "0.75rem",
            color: "muted",
          })}
        >
          {resolved || "var"}
        </span>
        <span
          className={css({
            fontFamily: "mono",
            fontSize: "0.75rem",
            color: "muted",
          })}
        >
          txt→swatch: {contrastTextOnSwatch}
        </span>
        <span
          className={css({
            fontFamily: "mono",
            fontSize: "0.75rem",
            color: "muted",
          })}
        >
          swatch→surface: {contrastSwatchOnSurface}
        </span>
      </div>
    </div>
  );
};

const PalettePreview: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const scopeRef = useRef<HTMLDivElement>(null);

  // Keep contrasts up to date on theme toggle
  useEffect(() => {
    // noop – rerenders update Swatch via scopeEl dependency
  }, [isDark]);

  return (
    <section className={css({ paddingY: "4rem" })}>
      <div
        ref={scopeRef}
        className={cx(
          css({
            maxWidth: "72rem",
            marginX: "auto",
            paddingX: { base: "1rem", sm: "1.5rem", lg: "2rem" },
          }),
          isDark && "dark",
        )}
        style={{ backgroundColor: "var(--colors-bg-canvas)" }}
      >
        {/* Header */}
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          })}
        >
          <h1
            className={css({
              fontFamily: "sans",
              fontWeight: 700,
              color: "text",
              fontSize: { base: "1.5rem", sm: "1.875rem" },
            })}
          >
            Token Palette Preview (Dev)
          </h1>
          <div className={css({ display: "flex", gap: "0.5rem" })}>
            <button
              className={cx(
                button({ intent: "secondary" }),
                css({ fontSize: "0.875rem" }),
              )}
              onClick={() => setIsDark(false)}
            >
              Light
            </button>
            <button
              className={cx(
                button({ intent: "primary" }),
                css({ fontSize: "0.875rem" }),
              )}
              onClick={() => setIsDark(true)}
            >
              Dark
            </button>
          </div>
        </div>

        {/* Downloads */}
        <div
          className={cx(
            cardGlass,
            css({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem",
              marginBottom: "2rem",
            }),
          )}
        >
          <span
            className={css({
              fontFamily: "sans",
              color: "muted",
              fontSize: "0.875rem",
            })}
          >
            Exports: JSON and CSV
          </span>
          <div className={css({ display: "flex", gap: "0.5rem" })}>
            <a
              href="/tokens.json"
              className={cx(
                button({ intent: "secondary" }),
                css({ fontSize: "0.875rem" }),
              )}
            >
              tokens.json
            </a>
            <a
              href="/tokens.colors.csv"
              className={cx(
                button({ intent: "secondary" }),
                css({ fontSize: "0.875rem" }),
              )}
            >
              colors.csv
            </a>
            <a
              href="/tokens.semantic.csv"
              className={cx(
                button({ intent: "secondary" }),
                css({ fontSize: "0.875rem" }),
              )}
            >
              semantic.csv
            </a>
          </div>
        </div>

        {/* Semantic tokens */}
        <div className={css({ marginBottom: "2rem" })}>
          <h2
            className={css({
              fontFamily: "sans",
              fontWeight: 600,
              color: "text",
              fontSize: "1.125rem",
              marginBottom: "0.75rem",
            })}
          >
            Semantic Colors
          </h2>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: {
                base: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "1rem",
            })}
          >
            {SEMANTIC.map((name) => (
              <Swatch key={name} name={name} scopeEl={scopeRef.current} large />
            ))}
          </div>
        </div>

        {/* Type Scale */}
        <div className={css({ marginBottom: "2rem" })}>
          <h2
            className={css({
              fontFamily: "sans",
              fontWeight: 600,
              color: "text",
              fontSize: "1.125rem",
              marginBottom: "0.75rem",
            })}
          >
            Type Scale
          </h2>
          <div className={css({ display: "grid", gap: "0.75rem" })}>
            {[
              { role: "display", label: "Display" },
              { role: "largeTitle", label: "Large Title" },
              { role: "title1", label: "Title 1" },
              { role: "title2", label: "Title 2" },
              { role: "title3", label: "Title 3" },
              { role: "headline", label: "Headline" },
              { role: "body", label: "Body" },
              { role: "callout", label: "Callout" },
              { role: "subheadline", label: "Subheadline" },
              { role: "footnote", label: "Footnote" },
              { role: "caption", label: "Caption" },
            ].map((t, i) => (
              <div
                key={i}
                className={cx(cardGlass, css({ padding: "0.75rem 1rem" }))}
              >
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "1rem",
                  })}
                >
                  <div
                    className={cx(
                      typography({ role: t.role as never }),
                      css({ color: "text" }),
                    )}
                  >
                    {t.label} — The quick brown fox jumps over the lazy dog.
                  </div>
                  <code
                    className={css({
                      fontFamily: "mono",
                      color: "muted",
                      fontSize: "0.75rem",
                    })}
                  >
                    role: {t.role}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hue tokens */}
        <div className={css({ marginBottom: "2rem" })}>
          <h2
            className={css({
              fontFamily: "sans",
              fontWeight: 600,
              color: "text",
              fontSize: "1.125rem",
              marginBottom: "0.75rem",
            })}
          >
            Brand Hues
          </h2>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: {
                base: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "1rem",
            })}
          >
            {HUES.map((name) => (
              <Swatch key={name} name={name} scopeEl={scopeRef.current} />
            ))}
          </div>
        </div>

        {/* System grays */}
        <div className={css({ marginBottom: "3rem" })}>
          <h2
            className={css({
              fontFamily: "sans",
              fontWeight: 600,
              color: "text",
              fontSize: "1.125rem",
              marginBottom: "0.75rem",
            })}
          >
            System Grays
          </h2>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: {
                base: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "1rem",
            })}
          >
            {GRAYS.map((name) => (
              <Swatch key={name} name={name} scopeEl={scopeRef.current} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalettePreview;
