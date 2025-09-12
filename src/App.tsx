import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ComponentShowcase from "./components/ComponentShowcase";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";
import React, { Suspense } from "react";

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
      <Navbar />
      <Hero />
      <Features />
      <ComponentShowcase />
      <Documentation />
      <Footer />
    </div>
  );
}

export default App;
