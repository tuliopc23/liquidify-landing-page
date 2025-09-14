import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ComponentShowcase from "../components/ComponentShowcase";
import Documentation from "../components/Documentation";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>LiqUIdify – Apple-Inspired React Components</title>
        <meta
          name="description"
          content="Build beautiful, accessible UIs with Liquid Glass-styled React components."
        />
        <link rel="canonical" href="/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LiqUIdify – Apple-Inspired React Components" />
        <meta property="og:description" content="Build beautiful, accessible UIs with Liquid Glass-styled React components." />
        <meta property="og:url" content="/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
      <Features />
      <ComponentShowcase />
      <Documentation />
    </>
  );
}

export const Route = createFileRoute("/")({ component: HomePage });
