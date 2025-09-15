import React from "react";
import { css, cx } from "../../styled-system/css";
import {
  docsCard,
  sectionTitle,
  sectionLead,
  pageSection,
  button,
  typography,
} from "../pandaStyles";
import CodeBlock from "./CodeBlock";

const Documentation: React.FC = () => {
  return (
    <section id="docs" className={cx(pageSection())}>
      <div className={css({ textAlign: "center", mb: "2.5rem" })}>
        <h2 className={cx(sectionTitle())}>Documentation</h2>
        <p className={cx(sectionLead())}>
          Install the library, import the styles once, and start shipping
          Apple‑flavored UI with accessible Ark UI primitives.
        </p>
      </div>

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        })}
      >
        <div className={cx(docsCard())}>
          <div className={css({ p: "1rem" })}>
            <h3
              className={cx(
                typography({ role: "headline" }),
                css({ mb: "0.5rem" }),
              )}
            >
              Install
            </h3>
            <CodeBlock
              language="bash"
              code={`npm i liquidify-react react react-dom @ark-ui/react framer-motion lucide-react`}
              ariaLabel="Installation command"
            />
            <p
              className={cx(
                typography({ role: "body" }),
                css({ color: "muted", mt: "0.5rem" }),
              )}
            >
              Library ships in peer mode. Bun, pnpm, yarn are supported as well.
            </p>
          </div>
        </div>

        <div className={cx(docsCard())}>
          <div className={css({ p: "1rem" })}>
            <h3
              className={cx(
                typography({ role: "headline" }),
                css({ mb: "0.5rem" }),
              )}
            >
              Use
            </h3>
            <CodeBlock
              language="tsx"
              code={`import "liquidify-react/styles";
import { Button } from "liquidify-react";

export default function App() {
  return <Button variant="primary">Get Started</Button>;
}`}
              ariaLabel="Usage example"
            />
            <p
              className={cx(
                typography({ role: "body" }),
                css({ color: "muted", mt: "0.5rem" }),
              )}
            >
              Use subpath imports for optimal tree‑shaking:{" "}
              <code>import {"{ Tabs }"} from "liquidify-react/tabs"</code>.
            </p>
          </div>
        </div>

        <div className={cx(docsCard())}>
          <div className={css({ p: "1rem" })}>
            <h3
              className={cx(
                typography({ role: "headline" }),
                css({ mb: "0.5rem" }),
              )}
            >
              What's inside
            </h3>
            <p
              className={cx(
                typography({ role: "body" }),
                css({ color: "muted" }),
              )}
            >
              47 Ark UI wrappers + 1 custom Button · TypeScript first · WCAG 2.1
              AA targets · React 18/19 · ESM + CJS.
            </p>
            <a
              href="https://docs.useliquidify.dev"
              className={button({ intent: "neutral", size: "md" })}
            >
              Read the docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
