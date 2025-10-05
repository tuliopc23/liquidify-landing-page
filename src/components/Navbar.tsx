import React, { useEffect, useRef, useState } from "react";
import { css, cx } from "../../styled-system/css";
import { containerX, navLink } from "../pandaStyles";
import { useTheme } from "../theme";
import type { ThemeMode } from "../theme";
import { LiquidifyBrand } from "./BrandAssets";
import {
  BookOpen,
  Github,
  Menu,
  MonitorCog,
  MoonStar,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const themeOptions: Array<{ mode: ThemeMode; label: string }> = [
  { mode: "light", label: "Light" },
  { mode: "dark", label: "Dark" },
  { mode: "system", label: "Auto" },
];

const toggleRoot = css({
  display: "inline-flex",
  alignItems: "center",
  padding: "0.125rem",
  borderRadius: "999px",
  borderWidth: "1px",
  borderColor: "glass.stroke",
  backgroundColor: "glass.regular", // Using official Liquid Glass variant
  backdropFilter: "blur(var(--blurs-glass-regular))",
  boxShadow: "var(--shadows-elevation-card-compact-base)",
  gap: "0.25rem",
});

// HIG-Compliant: Monochromatic scheme on Liquid Glass
const toggleOption = css({
  paddingInline: "0.875rem",
  paddingBlock: "0.4375rem",
  minHeight: "2.25rem",
  borderRadius: "999px",
  border: "none",
  backgroundColor: "transparent",
  color: {
    base: "rgba(60,60,67,0.65)", // Monochromatic, darker when light
    _dark: "rgba(235,235,245,0.65)", // Monochromatic, lighter when dark
  },
  fontFamily: "text",
  fontSize: "0.875rem",
  fontWeight: 500,
  lineHeight: 1.43,
  cursor: "pointer",
  transition:
    "background-color 150ms var(--ease-out-quad), color 150ms var(--ease-out-quad), box-shadow 150ms var(--ease-out-quad), transform 120ms var(--ease-out-quad)",
  WebkitTapHighlightColor: "transparent",
  _hover: {
    backgroundColor: {
      base: "rgba(0,0,0,0.06)",
      _dark: "rgba(255,255,255,0.08)",
    },
    color: {
      base: "rgba(60,60,67,0.85)",
      _dark: "rgba(235,235,245,0.85)",
    },
  },
  _active: { transform: "scale(0.96)" }, // HIG-standard scale
  _focusVisible: {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(10,132,255,0.45)", // Apple's exact focus ring spec
    transition: "box-shadow 150ms var(--ease-out-quad)",
  },
});

// Active state: Subtle emphasis, not full color (HIG-compliant)
const toggleOptionActive = css({
  backgroundColor: {
    base: "rgba(0,0,0,0.1)",
    _dark: "rgba(255,255,255,0.14)",
  },
  color: {
    base: "rgba(0,0,0,0.9)", // Almost black when light
    _dark: "rgba(255,255,255,0.95)", // Almost white when dark
  },
  fontWeight: 600,
  _hover: {
    backgroundColor: {
      base: "rgba(0,0,0,0.12)",
      _dark: "rgba(255,255,255,0.16)",
    },
  },
});

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mode, setMode] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || typeof document === "undefined") return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [menuOpen]);

  const navBase = css({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    isolation: "isolate",
    overflow: "hidden",
    backdropFilter: "blur(var(--blurs-glass-regular))", // Official Liquid Glass blur
    borderBottomWidth: "1px",
    borderColor: "glass.stroke",
    backgroundColor: "glass.regular", // Official Liquid Glass variant for navigation
    boxShadow: "var(--shadows-elevation-card-compact-base)",
    transition:
      "background-color 220ms var(--ease-out-quad), box-shadow 240ms var(--ease-out-quad)",
    _before: {
      content: '""',
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "var(--gradients-glass-highlight)",
      opacity: { base: 0.85, _dark: 0.7 },
      zIndex: -1,
    },
  });

  const navSolid = css({
    backgroundColor: "glass.regular", // Keep using official variant when scrolled
    boxShadow: "var(--shadows-elevation-card-hoverPassive)",
    borderColor: {
      base: "rgba(0,0,0,0.08)",
      _dark: "rgba(255,255,255,0.2)",
    },
  });

  return (
    <nav
      className={cx(navBase, isScrolled ? navSolid : undefined)}
      aria-label="Global"
    >
      <div
        className={cx(
          containerX,
          css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: "0.75rem",
          }),
        )}
      >
        <a
          href="/"
          className={css({
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "text",
            _hover: { color: "text" },
          })}
          aria-label="Liquidify home"
        >
          <LiquidifyBrand size={32} wordmarkRole="headline" />
        </a>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          })}
        >
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={css({
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "9999px",
              borderWidth: "1px",
              borderColor: "glass.stroke",
              backgroundColor: "glass.surface",
              boxShadow: "var(--shadows-elevation-card-compact-base)",
              color: {
                base: "rgba(60,60,67,0.8)",
                _dark: "rgba(235,235,245,0.78)",
              },
              backdropFilter: "blur(var(--blurs-glass-surface))",
              transition:
                "transform 120ms var(--ease-out-quad), box-shadow 200ms var(--ease-out-quad), border-color 160ms var(--ease-out-quad)",
              cursor: "pointer",
              _hover: {
                transform: "translateY(-1px)",
                borderColor: "rgba(10,132,255,0.35)",
              },
              _active: { transform: "scale(0.97)" },
              _focusVisible: {
                outline: "none",
                boxShadow:
                  "0 0 0 2px color-mix(in oklab, var(--colors-apple-blue), transparent 50%)",
              },
              md: { display: "none" },
            })}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <Menu size={20} strokeWidth={2} />
          </button>
          <div
            className={css({
              display: "none",
              alignItems: "center",
              gap: "1rem",
              md: { display: "flex" },
            })}
          >
            <a href="#features" className={navLink}>
              Features
            </a>
            <a href="#docs" className={navLink}>
              Docs
            </a>
            <a
              href="https://github.com/tuliopc23/LiqUIdify"
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                display: "inline-flex",
                alignItems: "center",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                color: {
                  base: "rgba(60,60,67,0.6)",
                  _dark: "rgba(235,235,245,0.6)",
                },
                transition:
                  "color 150ms var(--ease-out-quad), background-color 150ms var(--ease-out-quad)",
                _hover: {
                  color: {
                    base: "rgba(60,60,67,0.85)",
                    _dark: "rgba(235,235,245,0.85)",
                  },
                  backgroundColor: {
                    base: "rgba(0,0,0,0.04)",
                    _dark: "rgba(255,255,255,0.08)",
                  },
                },
              })}
              aria-label="View Liquidify on GitHub"
            >
              <Github size={20} />
            </a>
            <div
              role="radiogroup"
              aria-label="Theme mode"
              className={toggleRoot}
            >
              {themeOptions.map((option) => {
                const selected = mode === option.mode;
                return (
                  <button
                    key={option.mode}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    aria-label={`${option.label} theme`}
                    className={cx(
                      toggleOption,
                      selected ? toggleOptionActive : undefined,
                    )}
                    data-state={selected ? "on" : "off"}
                    onClick={() => {
                      if (!selected) setMode(option.mode);
                    }}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          onClick={() => setMenuOpen(false)}
          className={css({
            position: "fixed",
            inset: 0,
            zIndex: 60,
            backgroundColor: "rgba(10,16,28,0.28)",
            backdropFilter: "blur(16px)",
            padding: "1.5rem",
            display: { base: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            animation: "navOverlayFade 140ms var(--ease-out-quad)",
          })}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={css({
              width: "min(22rem, 100%)",
              borderRadius: "1.75rem",
              padding: "1.5rem 1.25rem 1.75rem",
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(240,247,255,0.8) 50%, rgba(210,225,255,0.7) 100%)",
              _dark: {
                backgroundImage:
                  "linear-gradient(180deg, rgba(28,34,48,0.92) 0%, rgba(24,28,40,0.88) 50%, rgba(16,20,32,0.82) 100%)",
              },
              backdropFilter: "blur(36px)",
              boxShadow: "0 32px 80px rgba(15, 23, 42, 0.28)",
              borderWidth: "1px",
              borderColor: {
                base: "rgba(10,132,255,0.2)",
                _dark: "rgba(62,142,255,0.28)",
              },
              display: "flex",
              flexDirection: "column",
              gap: "1.35rem",
              transformOrigin: "top center",
              animation: "navSheetIn 180ms var(--ease-out-cubic)",
            })}
          >
            <span
              aria-hidden
              className={css({
                alignSelf: "center",
                width: "2.75rem",
                height: "0.28rem",
                borderRadius: "999px",
                marginBottom: "0.75rem",
                backgroundColor: {
                  base: "rgba(135,146,170,0.48)",
                  _dark: "rgba(104,118,152,0.5)",
                },
              })}
            />
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "0.75rem",
              })}
            >
              <span
                className={css({
                  fontFamily: "text",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: { base: "#1d2742", _dark: "rgba(235,235,245,0.86)" },
                  letterSpacing: "0.01em",
                })}
              >
                Quick Actions
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "999px",
                  border: "none",
                  backgroundColor: "rgba(10,132,255,0.14)",
                  color: { base: "#0a84ff", _dark: "#8fc7ff" },
                  cursor: "pointer",
                  transition:
                    "transform 120ms var(--ease-out-quad), background-color 150ms var(--ease-out-quad)",
                  _hover: { transform: "scale(1.05)" },
                  _active: { transform: "scale(0.97)" },
                  _focusVisible: {
                    outline: "none",
                    boxShadow:
                      "0 0 0 2px color-mix(in oklab, var(--colors-apple-blue), transparent 50%)",
                  },
                })}
                aria-label="Close menu"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>
            <nav
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                fontFamily: "text",
              })}
            >
              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "1.2rem",
                  textDecoration: "none",
                  backgroundColor: "rgba(255,255,255,0.92)",
                  _dark: { backgroundColor: "rgba(42,48,68,0.92)" },
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.44)",
                  transition:
                    "transform 140ms var(--ease-out-quad), background-color 160ms var(--ease-out-quad)",
                  _hover: { transform: "translateY(-1px)" },
                  _active: { transform: "scale(0.99)" },
                })}
              >
                <span
                  className={css({
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "1rem",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(50,133,255,0.95) 0%, rgba(103,176,255,0.85) 100%)",
                    color: "white",
                    boxShadow: "0 12px 26px rgba(10,132,255,0.32)",
                  })}
                >
                  <Sparkles size={18} />
                </span>
                <span
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.1rem",
                    color: { base: "#102142", _dark: "rgba(235,235,245,0.9)" },
                  })}
                >
                  <span className={css({ fontWeight: 600, fontSize: "1rem" })}>
                    Features
                  </span>
                  <span
                    className={css({
                      fontSize: "0.8rem",
                      color: {
                        base: "rgba(16,33,66,0.62)",
                        _dark: "rgba(235,235,245,0.62)",
                      },
                    })}
                  >
                    Browse components
                  </span>
                </span>
              </a>
              <a
                href="#docs"
                onClick={() => setMenuOpen(false)}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "1.2rem",
                  textDecoration: "none",
                  backgroundColor: "rgba(248,249,255,0.9)",
                  _dark: { backgroundColor: "rgba(36,42,60,0.9)" },
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.38)",
                  transition:
                    "transform 140ms var(--ease-out-quad), background-color 160ms var(--ease-out-quad)",
                  _hover: { transform: "translateY(-1px)" },
                  _active: { transform: "scale(0.99)" },
                })}
              >
                <span
                  className={css({
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "1rem",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(104,118,152,0.85) 0%, rgba(168,182,210,0.78) 100%)",
                    color: "white",
                    boxShadow: "0 10px 22px rgba(73,88,125,0.28)",
                  })}
                >
                  <BookOpen size={18} />
                </span>
                <span
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.1rem",
                    color: { base: "#142340", _dark: "rgba(235,235,245,0.9)" },
                  })}
                >
                  <span className={css({ fontWeight: 600, fontSize: "1rem" })}>
                    Docs
                  </span>
                  <span
                    className={css({
                      fontSize: "0.8rem",
                      color: {
                        base: "rgba(20,35,64,0.6)",
                        _dark: "rgba(235,235,245,0.6)",
                      },
                    })}
                  >
                    API & guides
                  </span>
                </span>
              </a>
              <a
                href="https://github.com/tuliopc23/LiqUIdify"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "1.2rem",
                  textDecoration: "none",
                  backgroundColor: "rgba(244,244,246,0.92)",
                  _dark: { backgroundColor: "rgba(34,38,56,0.9)" },
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.34)",
                  transition:
                    "transform 140ms var(--ease-out-quad), background-color 160ms var(--ease-out-quad)",
                  _hover: { transform: "translateY(-1px)" },
                  _active: { transform: "scale(0.99)" },
                })}
              >
                <span
                  className={css({
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "1rem",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(33,33,36,0.94) 0%, rgba(70,70,72,0.88) 100%)",
                    color: "white",
                    boxShadow: "0 8px 18px rgba(26,26,28,0.28)",
                  })}
                >
                  <Github size={18} />
                </span>
                <span
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.1rem",
                    color: { base: "#161618", _dark: "rgba(235,235,245,0.9)" },
                  })}
                >
                  <span className={css({ fontWeight: 600, fontSize: "1rem" })}>
                    GitHub
                  </span>
                  <span
                    className={css({
                      fontSize: "0.8rem",
                      color: {
                        base: "rgba(68,70,73,0.65)",
                        _dark: "rgba(235,235,245,0.6)",
                      },
                    })}
                  >
                    Explore source
                  </span>
                </span>
              </a>
            </nav>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              })}
            >
              <span
                className={css({
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: {
                    base: "rgba(18,22,40,0.7)",
                    _dark: "rgba(235,235,245,0.72)",
                  },
                })}
              >
                Appearance
              </span>
              <div
                className={cx(
                  toggleRoot,
                  css({
                    width: "100%",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(255,255,255,0.97)",
                    _dark: { backgroundColor: "rgba(32,36,54,0.95)" },
                    boxShadow: "0 10px 34px rgba(10,132,255,0.16)",
                  }),
                )}
              >
                {themeOptions.map((option) => {
                  const selected = mode === option.mode;
                  return (
                    <button
                      key={`mobile-${option.mode}`}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      aria-label={`${option.label} theme`}
                      className={cx(
                        toggleOption,
                        css({
                          flex: 1,
                          paddingInline: "0.5rem",
                          fontSize: "0.8125rem",
                          gap: "0.25rem",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }),
                        selected ? toggleOptionActive : undefined,
                      )}
                      data-state={selected ? "on" : "off"}
                      onClick={() => {
                        if (!selected) setMode(option.mode);
                      }}
                    >
                      {option.mode === "light" ? (
                        <Sun size={16} />
                      ) : option.mode === "dark" ? (
                        <MoonStar size={16} />
                      ) : (
                        <MonitorCog size={16} />
                      )}
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
