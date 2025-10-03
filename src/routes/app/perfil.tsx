import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { css } from "../../../styled-system/css";
import SectionHeader from "../../components/studio/SectionHeader";

function PerfilPage() {
  const containerStyle = css({
    backgroundColor: "mb.bg",
    minHeight: "100vh",
    padding: "2.5rem 3rem",
  });

  const cardStyle = css({
    padding: "2rem",
    borderRadius: "0.75rem",
    backgroundColor: "mb.surface",
    border: "1px solid",
    borderColor: "border.default",
  });

  const placeholderStyle = css({
    padding: "3rem",
    textAlign: "center",
    color: "muted",
    fontFamily: "wixMadefor",
  });

  return (
    <>
      <Helmet>
        <title>Meu Perfil - MB Studio</title>
      </Helmet>
      <div className={containerStyle}>
        <SectionHeader title="Meu Perfil" />
        <div className={cardStyle}>
          <div className={placeholderStyle}>
            <p>Funcionalidade de perfil em desenvolvimento.</p>
            <p>Em breve você poderá editar suas informações pessoais aqui.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const Route = createFileRoute("/app/perfil")({
  component: PerfilPage,
});
