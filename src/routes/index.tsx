import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ComponentShowcase from "../components/ComponentShowcase";
import Documentation from "../components/Documentation";

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ComponentShowcase />
      <Documentation />
    </>
  );
}

export const Route = createFileRoute("/")({ component: HomePage });
