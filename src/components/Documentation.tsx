import React from "react";
import { css, cx } from "../../styled-system/css";
import {
  sectionTitle,
  sectionLead,
  pageSection,
  typography,
  containerX,
} from "../pandaStyles";
import CodeBlock from "./CodeBlock";
import OverviewCard from "./OverviewCard";
import CardArt from "./CardArt";
import { useTheme, resolveTheme } from "../theme";

const Documentation: React.FC = () => {
  const [mode] = useTheme();
  const resolved = resolveTheme(mode);

  const helperText = css({
    color: { base: "muted", _dark: "rgba(232,232,237,0.8)" },
    marginTop: "0.5rem",
  });

  const linkClass = css({
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    fontWeight: 600,
    color: "link",
    mt: "0.75rem",
  });

  return (
    <section
      id="docs"
      className={cx(
        pageSection(),
        css({
          backgroundColor: { base: "bg.canvas", _dark: "rgba(5,5,11,0.95)" },
          color: "text",
        }),
      )}
    >
      <div className={containerX}>
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
            gridTemplateColumns: {
              base: "1fr",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            },
            gap: "24px",
          })}
        >
          <OverviewCard
            cover={<CardArt variant="install" tone={resolved} scale={0.62} />}
            eyebrow="Setup"
            title="Install"
            summary="Install Liquidify together with its peer dependencies in a single command."
            cta={null}
            theme={resolved}
          >
            <CodeBlock
              language="bash"
              code={`bun add liquidify-react react react-dom @ark-ui/react framer-motion lucide-react`}
              ariaLabel="Installation command"
            />
            <p className={cx(typography({ role: "footnote" }), helperText)}>
              Bun, npm, pnpm, and yarn are supported. The package ships as pure
              ESM with type definitions.
            </p>
          </OverviewCard>

          <OverviewCard
            cover={<CardArt variant="usage" tone={resolved} scale={0.62} />}
            eyebrow="First component"
            title="Use"
            summary="Import the styles once, then pull components from focused entry points."
            cta={null}
            theme={resolved}
          >
            <CodeBlock
              language="tsx"
              code={`import "liquidify-react/styles";
import { Button } from "liquidify-react";

export default function App() {
  return <Button intent="primary">Get Started</Button>;
}`}
              ariaLabel="Usage example"
            />
            <p className={cx(typography({ role: "footnote" }), helperText)}>
              Use subpath imports for tree‑shaking, e.g.{" "}
              <code>import {"{ Tabs }"} from "liquidify-react/tabs"</code>.
            </p>
          </OverviewCard>

          <OverviewCard
            cover={<CardArt variant="inside" tone={resolved} scale={0.62} />}
            eyebrow="What ships"
            title="What's inside"
            summary="47 Ark UI wrappers, Liquid Glass surfaces, Panda tokens, and type-safe recipes."
            cta={null}
            theme={resolved}
          >
            <p className={cx(typography({ role: "body" }), helperText)}>
              Strict TypeScript, SSR compatibility, and design tokens for
              colors, radii, typography, and motion utilities.
            </p>
            <a href="https://docs.useliquidify.dev" className={linkClass}>
              Read the docs <span aria-hidden={true}>›</span>
            </a>
          </OverviewCard>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
