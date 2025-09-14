import React from "react";
import { createFileRoute } from "@tanstack/react-router";
<<<<<<< HEAD
||||||| parent of e8d4e886 (chore(repo): untrack node_modules and dist)
import Navbar from "../components/Navbar";
=======
import { Helmet } from "react-helmet-async";
>>>>>>> e8d4e886 (chore(repo): untrack node_modules and dist)
import Hero from "../components/Hero";
import Features from "../components/Features";
import ComponentShowcase from "../components/ComponentShowcase";
import Documentation from "../components/Documentation";

function HomePage() {
  return (
    <>
<<<<<<< HEAD
||||||| parent of e8d4e886 (chore(repo): untrack node_modules and dist)
    <div>
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <ComponentShowcase />
        <Documentation />
      </main>
      <Footer />
    </div>
=======
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
>>>>>>> e8d4e886 (chore(repo): untrack node_modules and dist)
      <Hero />
      <Features />
      <ComponentShowcase />
      <Documentation />
    </>
  );
}

export const Route = createFileRoute("/")({ component: HomePage });
