import React, { Suspense } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { css } from "../../styled-system/css";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  const showPalette =
    import.meta.env.DEV &&
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("palette");

  if (showPalette) {
    const PalettePreview = React.lazy(
      () => import("../components/PalettePreview"),
    );
    return (
      <Suspense fallback={null}>
        <PalettePreview />
      </Suspense>
    );
  }

  return (
    <HelmetProvider>
      <MDXProvider
        components={{
          pre: (props) => (
            <pre
              className={css({
                p: 4,
                bg: "bg.subtle",
                color: "text",
                borderWidth: "1px",
                borderColor: "border.default",
                borderRadius: "lg",
                overflow: "auto",
              })}
              {...props}
            />
          ),
          code: (props) => (
            <code className={css({ fontFamily: "mono" })} {...props} />
          ),
        }}
      >
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
            <Outlet />
          </main>
          <Footer />
        </div>
      </MDXProvider>
    </HelmetProvider>
  );
}

export const Route = createRootRoute({ component: RootLayout });
