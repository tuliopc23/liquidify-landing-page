import React from "react";
import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { css } from "../../styled-system/css";
import { Home, BookOpen, FileText, MessageSquare, User } from "lucide-react";

function AppLayout() {
  const [sidebarOpen] = React.useState(true);

  const layoutStyle = css({
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "mb.bg",
    color: "text",
  });

  const sidebarStyle = css({
    width: sidebarOpen ? "240px" : "64px",
    backgroundColor: "mb.surface",
    borderRight: "1px solid",
    borderColor: "border.default",
    padding: "1.5rem 0",
    transition: "width 200ms ease",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  });

  const navLinkStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.75rem 1.25rem",
    color: "muted",
    textDecoration: "none",
    fontSize: "0.9375rem",
    fontFamily: "wixMadefor",
    transition: "all 150ms ease",
    _hover: {
      backgroundColor: "rgba(206, 108, 71, 0.1)",
      color: "mb.accent",
    },
    '&[data-status="active"]': {
      backgroundColor: "rgba(206, 108, 71, 0.15)",
      color: "mb.accent",
      fontWeight: 600,
    },
  });

  const mainContentStyle = css({
    flex: 1,
    overflowY: "auto",
  });

  return (
    <>
      <Helmet>
        <title>MB Studio</title>
        <meta name="description" content="Seu hub de conteúdos e cursos" />
      </Helmet>
      <div className={layoutStyle}>
        <aside className={sidebarStyle}>
          <div
            className={css({
              padding: "0 1.25rem",
              marginBottom: "1.5rem",
            })}
          >
            <h1
              className={css({
                fontSize: "1.5rem",
                fontWeight: 700,
                fontFamily: "caladea",
                color: "mb.accent",
              })}
            >
              MB Studio
            </h1>
          </div>
          <nav
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            })}
          >
            <Link to="/app/studio" className={navLinkStyle}>
              <Home size={20} />
              {sidebarOpen && <span>Início</span>}
            </Link>
            <Link to="/app/cursos" className={navLinkStyle}>
              <BookOpen size={20} />
              {sidebarOpen && <span>Meus cursos</span>}
            </Link>
            <Link to="/app/studio/artigos" className={navLinkStyle}>
              <FileText size={20} />
              {sidebarOpen && <span>Conteúdos</span>}
            </Link>
            <Link to="/app/discussoes" className={navLinkStyle}>
              <MessageSquare size={20} />
              {sidebarOpen && <span>Discussões</span>}
            </Link>
            <Link to="/app/perfil" className={navLinkStyle}>
              <User size={20} />
              {sidebarOpen && <span>Meu perfil</span>}
            </Link>
          </nav>
        </aside>
        <main className={mainContentStyle}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export const Route = createFileRoute("/app")({
  component: AppLayout,
});
