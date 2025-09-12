import React from "react";
import { css, cx } from "../../styled-system/css";
import { cardGlass, button, typography } from "../pandaStyles";

const Documentation: React.FC = () => {
  return (
    <section
      id="docs"
      className={css({
        paddingY: "5rem",
        backgroundColor: "bg.canvas",
        position: "relative",
      })}
    >
      {/* Subtle background elements */}
      <div
        className={css({ position: "absolute", inset: 0, overflow: "hidden" })}
      >
        <div
          className={css({
            position: "absolute",
            top: "25%",
            right: 0,
            width: "16rem",
            height: "16rem",
            backgroundColor:
              "color-mix(in oklab, var(--colors-primary), transparent 95%)",
            borderRadius: "9999px",
            filter: "blur(32px)",
          })}
        ></div>
        <div
          className={css({
            position: "absolute",
            bottom: "25%",
            left: 0,
            width: "12rem",
            height: "12rem",
            backgroundColor:
              "color-mix(in oklab, var(--colors-apple-purple), transparent 95%)",
            borderRadius: "9999px",
            filter: "blur(32px)",
          })}
        ></div>
      </div>

      <div
        className={css({
          position: "relative",
          zIndex: 10,
          maxWidth: "72rem",
          marginX: "auto",
          paddingX: { base: "1rem", sm: "1.5rem", lg: "2rem" },
        })}
      >
        <div className={css({ textAlign: "center", marginBottom: "4rem" })}>
          <h2
            className={cx(
              typography({ role: "title1" }),
              css({ color: "text", marginBottom: "1rem" }),
            )}
          >
            Complete Documentation
          </h2>
          <p
            className={cx(
              typography({ role: "body" }),
              css({ color: "muted", maxWidth: "42rem", marginX: "auto" }),
            )}
          >
            Everything you need to build beautiful applications with LiqUIdify.
          </p>
        </div>

        {/* Enhanced Installation Guide */}
        <div
          className={cx(
            cardGlass,
            css({
              padding: "2rem",
              lg: { padding: "3rem" },
              marginBottom: "2rem",
              backgroundImage:
                "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
            }),
          )}
        >
          <div className={css({ maxWidth: "48rem", marginX: "auto" })}>
            <h3
              className={cx(
                typography({ role: "title2" }),
                css({
                  color: "text",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }),
              )}
            >
              Get Started in Seconds
            </h3>

            <div className={css({ display: "grid", gap: "1rem" })}>
              <div
                className={css({
                  backgroundColor: "system-gray-900",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                  overflowX: "auto",
                  boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
                })}
              >
                <div
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    columnGap: "0.5rem",
                    marginBottom: "1rem",
                  })}
                >
                  <div
                    className={css({
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "red.500",
                      borderRadius: "9999px",
                    })}
                  ></div>
                  <div
                    className={css({
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "yellow.500",
                      borderRadius: "9999px",
                    })}
                  ></div>
                  <div
                    className={css({
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "green.500",
                      borderRadius: "9999px",
                    })}
                  ></div>
                  <span
                    className={cx(
                      typography({ role: "footnote" }),
                      css({ color: "muted", marginLeft: "1rem" }),
                    )}
                  >
                    Terminal
                  </span>
                </div>
                <code
                  className={css({
                    fontFamily: "mono",
                    color: "success",
                    fontSize: "0.875rem",
                  })}
                >
                  npm install liquidify-react
                </code>
              </div>

              <div
                className={css({
                  backgroundColor: "system-gray-900",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                  overflowX: "auto",
                  boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
                })}
              >
                <div
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    columnGap: "0.5rem",
                    marginBottom: "1rem",
                  })}
                >
                  <div
                    className={css({
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "red.500",
                      borderRadius: "9999px",
                    })}
                  ></div>
                  <div
                    className={css({
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "yellow.500",
                      borderRadius: "9999px",
                    })}
                  ></div>
                  <div
                    className={css({
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "green.500",
                      borderRadius: "9999px",
                    })}
                  ></div>
                  <span
                    className={cx(
                      typography({ role: "footnote" }),
                      css({ color: "muted", marginLeft: "1rem" }),
                    )}
                  >
                    App.tsx
                  </span>
                </div>
                <pre
                  className={css({
                    fontFamily: "mono",
                    color: "primary",
                    fontSize: "0.875rem",
                  })}
                >
                  {`import { Button, Card } from 'liquidify-react';

function App() {
  return (
    <Card variant="glass">
      <Button variant="liquid">
        Hello LiqUIdify!
      </Button>
    </Card>
  );
}`}
                </pre>
              </div>
            </div>

            <div
              className={css({
                display: "flex",
                flexDirection: { base: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "2rem",
              })}
            >
              <a
                href="https://github.com/tuliopc23/LiqUIdify"
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  button({ intent: "primary" }),
                  css({ boxShadow: "lg" }),
                )}
              >
                <i
                  className="bi bi-github"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                View Documentation
              </a>
              <a
                href="https://developer.apple.com/documentation/"
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  button({ intent: "secondary" }),
                  css({ boxShadow: "lg" }),
                )}
              >
                <i
                  className="bi bi-apple"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                Apple HIG Reference
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Links */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "repeat(4, 1fr)" },
            gap: "1rem",
          })}
        >
          {[
            {
              title: "Quick Start",
              icon: "bi-rocket-takeoff",
              link: "#installation",
              color: "apple-blue",
            },
            {
              title: "Component API",
              icon: "bi-book",
              link: "#api",
              color: "apple-purple",
            },
            {
              title: "Design Tokens",
              icon: "bi-palette",
              link: "#tokens",
              color: "apple-green",
            },
            {
              title: "Examples",
              icon: "bi-code-square",
              link: "#examples",
              color: "apple-orange",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={cx(
                cardGlass,
                css({
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "all 300ms ease",
                  _hover: { transform: "scale(1.05)" },
                  backgroundImage:
                    "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.6))",
                }),
              )}
            >
              <div
                className={css({
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: `color-mix(in oklab, var(--colors-${item.color}), transparent 90%)`,
                  borderRadius: "0.75rem",
                  marginX: "auto",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  transition: "all 300ms ease",
                  _groupHover: { transform: "scale(1.1)" },
                })}
              >
                <i
                  className={
                    css({
                      color: `var(--colors-${item.color})`,
                      fontSize: "1rem",
                    }) + ` ${item.icon}`
                  }
                ></i>
              </div>
              <h4
                className={cx(
                  typography({ role: "headline" }),
                  css({ color: "text", fontSize: "0.875rem" }),
                )}
              >
                {item.title}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentation;
