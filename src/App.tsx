import Navbar from "./components/Navbar";
import HomePage from "./routes/index";
import ComponentsPage from "./routes/components";
import React, { Suspense } from "react";
import { css } from "../styled-system/css";

function App() {
  const showPalette =
    import.meta.env.DEV &&
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("palette");
  if (showPalette) {
    const PalettePreview = React.lazy(
      () => import("./components/PalettePreview"),
    );
    return (
      <Suspense fallback={null}>
        <PalettePreview />
      </Suspense>
    );
  }
  return (
    <div>
      <a
        href="#main"
        className={css({
          position: "absolute",
          left: "-9999px",
          top: "auto",
          _focusVisible: {
            left: "1rem",
            top: "1rem",
            zIndex: 100,
            backgroundColor: "bg.surface",
            color: "text",
            padding: "0.5rem 0.75rem",
            borderWidth: "1px",
            borderColor: "border.default",
            borderRadius: "0.5rem",
            boxShadow: "md",
          },
        })}
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HomePage />
        {/* Remove this once client routing is wired; or replace with router */}
      </main>
    </div>
  );
}

export default App;
