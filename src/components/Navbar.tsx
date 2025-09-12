import React, { useEffect, useState } from "react";
import { css, cx } from "../../styled-system/css";
import { button, containerX, navLink, typography } from "../pandaStyles";
import { useTheme, cycleTheme, ThemeMode } from "../theme";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mode, setMode] = useTheme();
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for link highlighting
  useEffect(() => {
    const ids = ["components", "features", "docs"] as const;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!("IntersectionObserver" in window) || elements.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // no dropdown; segmented control used instead

  return (
    <nav
      className={css({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transitionProperty: "all",
        transitionDuration: "300ms",
        backgroundColor: isScrolled ? "glass.bg" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : undefined,
        borderBottomWidth: isScrolled ? "1px" : undefined,
        borderColor: isScrolled ? "border.default" : undefined,
      })}
    >
      <div className={containerX}>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          })}
        >
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              columnGap: "0.75rem",
            })}
          >
            <div
              className={css({
                width: "2rem",
                height: "2rem",
                backgroundColor: "apple-blue",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <i
                className={
                  css({ color: "white", fontSize: "0.875rem" }) +
                  " bi bi-droplet-fill"
                }
              ></i>
            </div>
            <span
              className={cx(
                typography({ role: "title3" }),
                css({ color: "text" }),
              )}
            >
              LiqUIdify
            </span>
          </div>

          {/* Desktop Menu */}
          <div
            className={css({
              display: { base: "none", md: "flex" },
              alignItems: "center",
              columnGap: "2rem",
            })}
          >
            <a
              href="#components"
              aria-current={active === "components" ? "page" : undefined}
              className={cx(
                navLink,
                active === "components" &&
                  css({ color: "text", fontWeight: 600 }),
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Components
            </a>
            <a
              href="#features"
              aria-current={active === "features" ? "page" : undefined}
              className={cx(
                navLink,
                active === "features" && css({ color: "text", fontWeight: 600 }),
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#docs"
              aria-current={active === "docs" ? "page" : undefined}
              className={cx(
                navLink,
                active === "docs" && css({ color: "text", fontWeight: 600 }),
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </a>
            <a
              href="https://github.com/tuliopc23/LiqUIdify"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(
                css({
                  display: "flex",
                  alignItems: "center",
                  columnGap: "0.5rem",
                }),
                navLink,
              )}
            >
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </a>
            <button
              className={
                button({ intent: "primary" }) +
                " " +
                css({ fontSize: "0.875rem" })
              }
            >
              Get Started
            </button>
            <div
              className={css({
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              })}
            >
              <button
                aria-label="Cycle theme"
                title={`Cycle theme (current: ${mode})`}
                onClick={() => setMode(cycleTheme(mode))}
                className={cx(
                  button({ intent: "secondary" }),
                  css({
                    fontSize: "0.875rem",
                    padding: 0,
                    width: "2.5rem",
                    height: "2.5rem",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "9999px",
                  }),
                )}
              >
                <i
                  className={cx(
                    "bi",
                    mode === "light"
                      ? "bi-sun"
                      : mode === "dark"
                        ? "bi-moon"
                        : "bi-circle-half",
                  )}
                ></i>
              </button>
              {/* Segmented control: Auto | Light | Dark */}
              {(() => {
                const segments = [
                  { key: "system", label: "Auto" },
                  { key: "light", label: "Light" },
                  { key: "dark", label: "Dark" },
                ] as const;
                const index = mode === "system" ? 0 : mode === "light" ? 1 : 2;
                const left = `calc(${index} * ((100% - 8px) / 3) + 4px)`;
                const width = `calc((100% - 8px) / 3)`;
                return (
                  <div
                    role="radiogroup"
                    aria-label="Theme"
                    className={css({
                      position: "relative",
                      height: "2.5rem",
                      minWidth: "16.5rem",
                      backgroundColor: "glass.bg",
                      borderWidth: "1px",
                      borderColor: "glass.border",
                      borderRadius: "9999px",
                      padding: "0.25rem",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "0",
                      boxShadow: "md",
                      userSelect: "none",
                    })}
                  >
                    <div
                      className={css({
                        position: "absolute",
                        top: "4px",
                        height: "calc(100% - 8px)",
                        borderRadius: "9999px",
                        backgroundColor: "bg.surface",
                        borderWidth: "1px",
                        borderColor: "glass.border",
                        boxShadow: "xl",
                        transitionProperty:
                          "left, width, box-shadow, background-color",
                        transitionDuration: "250ms",
                        _before: {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          borderRadius: "inherit",
                          pointerEvents: "none",
                          backgroundImage:
                            "linear-gradient(180deg, rgba(255,255,255,.35), transparent 40%), radial-gradient(140% 100% at 0% 0%, color-mix(in oklab, var(--colors-glass-tint), transparent 88%), transparent 60%)",
                        },
                      })}
                      style={{ left, width }}
                    />
                    {segments.map((s) => (
                      <button
                        key={s.key}
                        role="radio"
                        aria-checked={mode === s.key}
                        tabIndex={mode === s.key ? 0 : -1}
                        className={css({
                          fontFamily: "sans",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "9999px",
                          color: mode === s.key ? "text" : "muted",
                          transition: "color 150ms ease",
                          outline: "none",
                        })}
                        onClick={() => setMode(s.key as ThemeMode)}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                            e.preventDefault();
                            const order = ["system", "light", "dark"] as const;
                            const cur = order.indexOf(mode as ThemeMode);
                            const next =
                              e.key === "ArrowRight"
                                ? (cur + 1) % order.length
                                : (cur + order.length - 1) % order.length;
                            setMode(order[next] as ThemeMode);
                          }
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={css({
              display: { base: "block", md: "none" },
              padding: "0.5rem",
            })}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i
              className={cx(
                "bi",
                isMobileMenuOpen ? "bi-x" : "bi-list",
                css({ fontSize: "1.25rem", color: "text" }),
              )}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={cx(
              css({
                display: { base: "block", md: "none" },
                marginTop: "0.5rem",
                padding: "1rem",
              }),
              /* glass card */ css({
                backgroundColor: "glass.bg",
                backdropFilter: "blur(20px)",
                borderWidth: "1px",
                borderColor: "glass.border",
                borderRadius: "1rem",
              }),
            )}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              })}
            >
              <a
                href="#components"
                aria-current={active === "components" ? "page" : undefined}
                className={cx(
                  navLink,
                  active === "components" &&
                    css({ color: "text", fontWeight: 600 }),
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Components
              </a>
              <a
                href="#features"
                aria-current={active === "features" ? "page" : undefined}
                className={cx(
                  navLink,
                  active === "features" &&
                    css({ color: "text", fontWeight: 600 }),
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#docs"
                aria-current={active === "docs" ? "page" : undefined}
                className={cx(
                  navLink,
                  active === "docs" && css({ color: "text", fontWeight: 600 }),
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </a>
              <a
                href="https://github.com/tuliopc23/LiqUIdify"
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  css({
                    display: "flex",
                    alignItems: "center",
                    columnGap: "0.5rem",
                  }),
                  navLink,
                )}
              >
                <i className="bi bi-github"></i>
                <span>GitHub</span>
              </a>
              <button
                className={
                  button({ intent: "primary" }) +
                  " " +
                  css({ fontSize: "0.875rem", width: "100%" })
                }
              >
                Get Started
              </button>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                })}
              >
                <button
                  aria-label="Cycle theme"
                  title={`Cycle theme (current: ${mode})`}
                  onClick={() => setMode(cycleTheme(mode))}
                  className={cx(
                    button({ intent: "secondary" }),
                    css({
                      fontSize: "0.875rem",
                      padding: 0,
                      width: "2.5rem",
                      height: "2.5rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "9999px",
                    }),
                  )}
                >
                  <i
                    className={cx(
                      "bi",
                      mode === "light"
                        ? "bi-sun"
                        : mode === "dark"
                          ? "bi-moon"
                          : "bi-circle-half",
                    )}
                  ></i>
                </button>
                {(() => {
                  const segments = [
                    { key: "system", label: "Auto" },
                    { key: "light", label: "Light" },
                    { key: "dark", label: "Dark" },
                  ] as const;
                  const index =
                    mode === "system" ? 0 : mode === "light" ? 1 : 2;
                  const left = `calc(${index} * ((100% - 8px) / 3) + 4px)`;
                  const width = `calc((100% - 8px) / 3)`;
                  return (
                    <div
                      role="radiogroup"
                      aria-label="Theme"
                      className={css({
                        position: "relative",
                        height: "2.5rem",
                        width: "100%",
                        backgroundColor: "glass.bg",
                        borderWidth: "1px",
                        borderColor: "glass.border",
                        borderRadius: "9999px",
                        padding: "0.25rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "0",
                        boxShadow: "md",
                        userSelect: "none",
                      })}
                    >
                      <div
                        className={css({
                          position: "absolute",
                          top: "4px",
                          height: "calc(100% - 8px)",
                          borderRadius: "9999px",
                          backgroundColor: "bg.surface",
                          borderWidth: "1px",
                          borderColor: "glass.border",
                          boxShadow: "xl",
                          transitionProperty:
                            "left, width, box-shadow, background-color",
                          transitionDuration: "250ms",
                          _before: {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "inherit",
                            pointerEvents: "none",
                            backgroundImage:
                              "linear-gradient(180deg, rgba(255,255,255,.35), transparent 40%), radial-gradient(140% 100% at 0% 0%, color-mix(in oklab, var(--colors-glass-tint), transparent 88%), transparent 60%)",
                          },
                        })}
                        style={{ left, width }}
                      />
                      {segments.map((s) => (
                        <button
                          key={s.key}
                          role="radio"
                          aria-checked={mode === s.key}
                          tabIndex={mode === s.key ? 0 : -1}
                          className={css({
                            fontFamily: "sans",
                            fontSize: "0.875rem",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "9999px",
                            color: mode === s.key ? "text" : "muted",
                            transition: "color 150ms ease",
                            outline: "none",
                          })}
                          onClick={() => setMode(s.key as ThemeMode)}
                          onKeyDown={(e) => {
                            if (
                              e.key === "ArrowRight" ||
                              e.key === "ArrowLeft"
                            ) {
                              e.preventDefault();
                              const order = [
                                "system",
                                "light",
                                "dark",
                              ] as const;
                              const cur = order.indexOf(mode as ThemeMode);
                              const next =
                                e.key === "ArrowRight"
                                  ? (cur + 1) % order.length
                                  : (cur + order.length - 1) % order.length;
                              setMode(order[next] as ThemeMode);
                            }
                          }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
