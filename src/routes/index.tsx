import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ComponentShowcase from "../components/ComponentShowcase";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
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
  );
}