import React, { useEffect, useMemo, useState } from "react";
import { css, cx } from "../../styled-system/css";
// Load Prism theme CSS once at module scope to avoid dynamic CSS import issues in dev
import "prismjs/themes/prism-tomorrow.css";

export type CodeBlockProps = {
  language: string;
  code: string;
  className?: string;
  ariaLabel?: string;
};

const wrapperClass = css({
  position: "relative",
  borderRadius: "glass",
  overflow: "hidden",
  borderWidth: "1px",
  borderColor: { base: "rgba(0,0,0,0.08)", _dark: "rgba(255,255,255,0.16)" },
  backgroundColor: {
    base: "rgba(13,16,24,0.92)",
    _dark: "rgba(16,18,26,0.94)",
  },
  boxShadow: {
    base: "0 20px 40px rgba(15,23,42,0.14)",
    _dark: "0 26px 60px rgba(0,0,0,0.55)",
  },
});

const preClass = css({
  m: 0,
  p: { base: "0.875rem", md: "1rem" },
  fontFamily: "mono",
  fontSize: { base: "0.8125rem", md: "0.875rem" },
  lineHeight: 1.5,
  overflow: "auto",
  maxHeight: "24rem",
  backgroundColor: "transparent",
  color: { base: "#f6f8ff", _dark: "#f6f8ff" },
  scrollbarWidth: "thin",
  scrollbarColor: "rgba(255,255,255,0.2) transparent",
  "&::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(255,255,255,0.2)",
    borderRadius: "4px",
    _hover: {
      background: "rgba(255,255,255,0.3)",
    },
  },
});

const copyButtonClass = css({
  position: "absolute",
  top: "0.875rem", // align to pre padding for perfect optical alignment
  right: "0.875rem",
  padding: "0.375rem 0.625rem",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "0.5rem",
  color: "rgba(255, 255, 255, 0.9)",
  cursor: "pointer",
  fontSize: "0.75rem",
  fontWeight: 500,
  fontFamily: "text",
  letterSpacing: "0.01em",
  transition:
    "background-color 180ms var(--ease-out-quad), border-color 180ms var(--ease-out-quad), transform 120ms var(--ease-out-quad)",
  backdropFilter: "blur(8px)",
  _hover: {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderColor: "rgba(255, 255, 255, 0.24)",
    transform: "translateY(-0.5px)",
  },
  _active: {
    transform: "scale(0.98)",
  },
});

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  code,
  className,
  ariaLabel,
}) => {
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const lang = useMemo(() => language.toLowerCase(), [language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        type PrismLike = {
          languages: Record<string, unknown>;
          highlight: (
            code: string,
            grammar: unknown,
            language: string,
          ) => string;
        };
        const mod = (await import("prismjs")) as unknown as PrismLike & {
          default?: PrismLike;
        };
        if (lang === "tsx" || lang === "typescript") {
          await import("prismjs/components/prism-typescript");
          await import("prismjs/components/prism-tsx");
          await import("prismjs/components/prism-jsx");
        } else if (lang === "js" || lang === "javascript") {
          await import("prismjs/components/prism-javascript");
        } else if (lang === "bash" || lang === "sh" || lang === "shell") {
          await import("prismjs/components/prism-bash");
        } else if (lang === "json") {
          await import("prismjs/components/prism-json");
        }

        const Prism: PrismLike = mod.default ?? (mod as PrismLike);
        const grammar = Prism.languages[lang] ?? Prism.languages.markup;
        const highlighted = Prism.highlight(code, grammar, lang);
        if (isMounted) setHtml(highlighted);
      } catch (e) {
        // If Prism fails to load in dev for any reason, fall back to raw code
        if (isMounted) setHtml("");
        console.error("Prism init failed", e);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [lang, code]);

  return (
    <div className={cx(wrapperClass, className)}>
      {/* Force transparent backgrounds on Prism blocks */}
      <style>{`
        .prism-no-bg pre[class*="language-"], .prism-no-bg code[class*="language-"] {
          background: transparent !important;
          text-shadow: none !important;
          box-shadow: none !important;
        }
      `}</style>
      <button
        onClick={handleCopy}
        className={copyButtonClass}
        title="Copy code"
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre className={cx("prism-no-bg", preClass)} aria-label={ariaLabel}>
        <code className={cx(`language-${lang}`)}>
          {/* Render raw code first; Prism will replace innerHTML */}
          {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
