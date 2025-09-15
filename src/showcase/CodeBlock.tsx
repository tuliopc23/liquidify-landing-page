import React, { useEffect, useRef, useState } from "react";

export type CodeBlockProps = {
  code: string;
  language?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
}) => {
  const [html, setHtml] = useState<string | null>(null);
  const containerRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // Load Prism lazily and defensively
        await import("prismjs/themes/prism.css");
        const prism = (await import("prismjs")) as unknown as {
          default?: {
            highlight: (
              code: string,
              grammar: unknown,
              language: string,
            ) => string;
            languages: Record<string, unknown>;
          };
          highlight?: (
            code: string,
            grammar: unknown,
            language: string,
          ) => string;
          languages?: Record<string, unknown>;
        };
        await import("prismjs/components/prism-tsx");
        const PrismLib = (prism.default ?? prism) as {
          highlight: (
            code: string,
            grammar: unknown,
            language: string,
          ) => string;
          languages: Record<string, unknown>;
        };
        const highlighted = PrismLib.highlight(
          code,
          PrismLib.languages[language],
          language,
        );
        if (!cancelled) setHtml(highlighted);
      } catch {
        // Fallback to plain text if Prism fails
        if (!cancelled) setHtml(null);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [code, language]);

  return (
    <pre
      ref={containerRef}
      // Style is applied by parent
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
    >
      {html ? undefined : code}
    </pre>
  );
};
