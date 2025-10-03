import React from "react";
import { Link } from "@tanstack/react-router";
import { css } from "../../../styled-system/css";

export default function StudioHero() {
  const heroStyle = css({
    padding: "2.5rem 3rem",
    borderBottom: "1px solid",
    borderColor: "border.default",
    backgroundColor: "mb.surface",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap",
  });

  const titleStyle = css({
    fontSize: "title1",
    lineHeight: "title1",
    fontFamily: "caladea",
    fontWeight: 700,
    color: "text",
    marginBottom: "0.5rem",
  });

  const subtitleStyle = css({
    fontSize: "body",
    lineHeight: "body",
    fontFamily: "wixMadefor",
    color: "muted",
  });

  const actionsStyle = css({
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap",
  });

  const buttonStyle = css({
    padding: "0.5rem 1rem",
    fontSize: "callout",
    fontFamily: "wixMadefor",
    fontWeight: 600,
    borderRadius: "0.5rem",
    textDecoration: "none",
    transition: "all 150ms ease",
    backgroundColor: "mb.button-primary",
    color: { base: "white", _dark: "white" },
    border: "none",
    cursor: "pointer",
    _hover: {
      transform: "translateY(-1px)",
      boxShadow: "md",
    },
  });

  return (
    <div className={heroStyle}>
      <div>
        <h1 className={titleStyle}>Bem-vindo(a) ao MB Studio</h1>
        <p className={subtitleStyle}>
          Seu hub de conteúdos, cursos e atualizações.
        </p>
      </div>
      <div className={actionsStyle}>
        <Link to="/app/cursos" className={buttonStyle}>
          Ver meus cursos
        </Link>
        <Link to="/app/studio/artigos" className={buttonStyle}>
          Ver conteúdos
        </Link>
        <Link to="/app/studio/lembretes" className={buttonStyle}>
          Configurar lembretes
        </Link>
      </div>
    </div>
  );
}
