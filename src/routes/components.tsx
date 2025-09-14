import React from "react";
import { css } from "../../styled-system/css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CardGrid, ComponentCard, registry } from "../showcase/GridParts";

export default function ComponentsShowcaseRoute() {
  return (
    <div>
      <Navbar />
      <main id="main" className={css({ py: "5rem" })}>
        <section className={css({ maxW: "6xl", mx: "auto", px: { base: 4, md: 6 } })}>
          <h1 className={css({ fontSize: "3xl", fontWeight: 700, mb: 6 })}>
            Components Showcase
          </h1>
          <CardGrid>
            {registry.map((meta) => (
              <ComponentCard key={meta.id} meta={meta} />
            ))}
          </CardGrid>
        </section>
      </main>
      <Footer />
    </div>
  );
}