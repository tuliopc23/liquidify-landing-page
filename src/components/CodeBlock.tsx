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
  backgroundColor: { base: "system-gray-900", _dark: "system-gray-900" },
});

const preClass = css({
  m: 0,
  p: { base: "1rem", md: "1.25rem" },
  fontFamily: "mono",
  fontSize: { base: "0.85rem", md: "0.9rem" },
  lineHeight: 1.6,
  overflow: "auto",
  backgroundColor: "transparent",
});

const copyButtonClass = css({
  position: "absolute",
  top: "0.75rem",
  right: "0.75rem",
  padding: "0.5rem",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "9999px",
  color: "white",
  cursor: "pointer",
  fontSize: "0.875rem",
  transition: "all 200ms ease",
  _hover: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: "scale(1.05)",
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
      >
        {copied ? "✓" : "⧉"}
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
