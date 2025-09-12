import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ComponentShowcase from "./components/ComponentShowcase";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";
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
        <Hero />
        <Features />
        <ComponentShowcase />
        <Documentation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
