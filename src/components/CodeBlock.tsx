import React, { useEffect, useMemo, useState } from "react";
import { css, cx } from "../../styled-system/css";

export type CodeBlockProps = {
  language: string;
  code: string;
  className?: string;
  ariaLabel?: string;
};

const wrapperClass = css({
  position: "relative",
  borderRadius: "0.75rem",
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

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  code,
  className,
  ariaLabel,
}) => {
  const [html, setHtml] = useState<string>("");

  const lang = useMemo(() => language.toLowerCase(), [language]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      type PrismLike = {
        languages: Record<string, unknown>;
        highlight: (code: string, grammar: unknown, language: string) => string;
      };
      const mod = (await import("prismjs")) as unknown as PrismLike & {
        default?: PrismLike;
      };
      // Theme for token colors; background will be overridden by our wrapper
      await import("prismjs/themes/prism-tomorrow.css");
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
