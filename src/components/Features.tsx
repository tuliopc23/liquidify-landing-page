import React from "react";
import { css, cx } from "../../styled-system/css";
import { cardGlass, typography } from "../pandaStyles";

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className={css({
        paddingY: "5rem",
        backgroundColor: "bg.canvas",
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: "6rem",
        backgroundImage: "url(/bg/features-light.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        _dark: { backgroundImage: "url(/bg/features-dark.svg)" },
      })}
    >
      {/* Subtle background pattern */}
      <div className={css({ position: "absolute", inset: 0, opacity: 0.3 })}>
        <div
          className={css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "1px",
            backgroundImage:
              "linear-gradient(to right, transparent, var(--colors-border-default), transparent)",
          })}
        ></div>
        <div
          className={css({
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "1px",
            backgroundImage:
              "linear-gradient(to right, transparent, var(--colors-border-default), transparent)",
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
            Dive into LiqUIdify
          </h2>
          <p
            className={cx(
              typography({ role: "body" }),
              css({ color: "muted", maxWidth: "42rem", marginX: "auto" }),
            )}
          >
            Built with meticulous attention to detail, every component embodies
            Apple's design philosophy.
          </p>
        </div>

        {/* Enhanced Main Feature Cards */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
            gap: "1.5rem",
            marginBottom: "4rem",
          })}
        >
          {/* Blue Card - Enhanced */}
          <div
            className={css({
              position: "relative",
              overflow: "hidden",
              borderRadius: "1rem",
              padding: "2rem",
              color: "white",
              boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
              transition: "all 300ms ease",
              _hover: { transform: "scale(1.05)" },
              backgroundImage: `linear-gradient(to bottom right, var(--colors-apple-blue), rgba(0,122,255,0.9))`,
            })}
          >
            <div
              className={css({
                position: "absolute",
                top: 0,
                right: 0,
                width: "8rem",
                height: "8rem",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "9999px",
                transform: "translate(4rem, -4rem)",
              })}
            ></div>
            <div
              className={css({
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "6rem",
                height: "6rem",
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "9999px",
                transform: "translate(-3rem, 3rem)",
              })}
            ></div>

            <div className={css({ position: "relative", zIndex: 10 })}>
              <div className={css({ marginBottom: "1.5rem" })}>
                <div
                  className={css({
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(4px)",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  })}
                >
                  <i
                    className={
                      css({ color: "white", fontSize: "1.5rem" }) +
                      " bi bi-apple"
                    }
                  ></i>
                </div>
              </div>
              <div className={css({ marginBottom: "1rem" })}>
                <span
                  className={cx(
                    typography({ role: "subheadline" }),
                    css({ color: "rgba(255,255,255,0.8)" }),
                  )}
                >
                  New overview
                </span>
              </div>
              <h3 className={cx(typography({ role: "title3" }), css({}))}>
                Explore the new design principles
              </h3>
              <p
                className={css({
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.875rem",
                  marginBottom: "1rem",
                  lineHeight: 1.7,
                })}
              >
                Learn how to design and develop beautiful interfaces that
                leverage Liquid Glass.
              </p>
              <a
                href="#"
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  color: "white",
                  fontSize: "0.875rem",
                  fontFamily: "sans",
                  transition: "color 150ms ease",
                  _hover: { color: "rgba(255,255,255,0.8)" },
                })}
              >
                Read overview{" "}
                <i
                  className="bi bi-arrow-right"
                  style={{ marginLeft: "0.5rem" }}
                ></i>
              </a>
            </div>
          </div>

          {/* Gray Card - Enhanced */}
          <div
            className={css({
              position: "relative",
              overflow: "hidden",
              borderRadius: "1rem",
              padding: "2rem",
              boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
              transition: "all 300ms ease",
              _hover: { transform: "scale(1.05)" },
              backgroundImage: `linear-gradient(to bottom right, var(--colors-system-gray-100), var(--colors-system-gray-50))`,
            })}
          >
            <div
              className={css({
                position: "absolute",
                top: 0,
                right: 0,
                width: "8rem",
                height: "8rem",
                backgroundColor: "rgba(142,142,147,0.5)",
                borderRadius: "9999px",
                transform: "translate(4rem, -4rem)",
              })}
            ></div>

            <div className={css({ position: "relative", zIndex: 10 })}>
              <div className={css({ marginBottom: "1.5rem" })}>
                <div
                  className={css({
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "system-gray-200",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  })}
                >
                  <i
                    className={
                      css({ color: "system-gray-600", fontSize: "1.5rem" }) +
                      " bi bi-droplet-half"
                    }
                  ></i>
                </div>
              </div>
              <div className={css({ marginBottom: "1rem" })}>
                <span
                  className={cx(
                    typography({ role: "subheadline" }),
                    css({ color: "system-gray-600" }),
                  )}
                >
                  New article
                </span>
              </div>
              <h3
                className={cx(
                  typography({ role: "title3" }),
                  css({ color: "system-gray-900" }),
                )}
              >
                Adopting Liquid Glass
              </h3>
              <p
                className={css({
                  color: "system-gray-600",
                  fontSize: "0.875rem",
                  marginBottom: "1rem",
                  lineHeight: 1.7,
                })}
              >
                Find out how to bring the new material to your app.
              </p>
              <a
                href="#"
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  color: "apple-blue",
                  fontSize: "0.875rem",
                  fontFamily: "sans",
                  transition: "color 150ms ease",
                  _hover: { color: "rgba(0,122,255,0.8)" },
                })}
              >
                Read article{" "}
                <i
                  className="bi bi-arrow-right"
                  style={{ marginLeft: "0.5rem" }}
                ></i>
              </a>
            </div>
          </div>

          {/* Purple Card - Enhanced */}
          <div
            className={css({
              position: "relative",
              overflow: "hidden",
              borderRadius: "1rem",
              padding: "2rem",
              color: "white",
              boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
              transition: "all 300ms ease",
              _hover: { transform: "scale(1.05)" },
              backgroundImage: `linear-gradient(to bottom right, var(--colors-apple-purple), rgba(175,82,222,0.9))`,
            })}
          >
            <div
              className={css({
                position: "absolute",
                top: 0,
                right: 0,
                width: "8rem",
                height: "8rem",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "9999px",
                transform: "translate(4rem, -4rem)",
              })}
            ></div>
            <div
              className={css({
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "5rem",
                height: "5rem",
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "9999px",
                transform: "translate(-2.5rem, 2.5rem)",
              })}
            ></div>

            <div className={css({ position: "relative", zIndex: 10 })}>
              <div className={css({ marginBottom: "1.5rem" })}>
                <div
                  className={css({
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(4px)",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  })}
                >
                  <i
                    className={
                      css({ color: "white", fontSize: "1.5rem" }) +
                      " bi bi-code-slash"
                    }
                  ></i>
                </div>
              </div>
              <div className={css({ marginBottom: "1rem" })}>
                <span
                  className={css({
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.875rem",
                    fontFamily: "sans",
                  })}
                >
                  New sample
                </span>
              </div>
              <h3 className={cx(typography({ role: "title3" }), css({}))}>
                Building with Liquid Glass
              </h3>
              <p
                className={css({
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.875rem",
                  marginBottom: "1rem",
                  lineHeight: 1.7,
                })}
              >
                Enhance your app experience with system-provided and custom
                Liquid Glass.
              </p>
              <a
                href="#"
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  color: "white",
                  fontSize: "0.875rem",
                  fontFamily: "sans",
                  transition: "color 150ms ease",
                  _hover: { color: "rgba(255,255,255,0.8)" },
                })}
              >
                View sample code{" "}
                <i
                  className="bi bi-arrow-right"
                  style={{ marginLeft: "0.5rem" }}
                ></i>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div
          className={cx(
            cardGlass,
            css({ padding: "2rem", lg: { padding: "3rem" } }),
          )}
        >
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: {
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: "2rem",
              textAlign: "center",
            })}
          >
            {[
              { value: "60+", label: "Components", hover: "apple-blue" },
              { value: "100%", label: "TypeScript", hover: "apple-purple" },
              { value: "A11Y", label: "Accessible", hover: "apple-green" },
              { value: "MIT", label: "License", hover: "apple-orange" },
            ].map((item, idx) => (
              <div key={idx} className={css({})}>
                <div
                  className={css({
                    fontFamily: "sans",
                    fontWeight: 700,
                    fontSize: { base: "1.875rem", lg: "2.25rem" },
                    color: "text",
                    marginBottom: "0.5rem",
                    transition: "color 300ms ease",
                    _hover: { color: item.hover as unknown as string },
                  })}
                >
                  {item.value}
                </div>
                <div
                  className={cx(
                    typography({ role: "subheadline" }),
                    css({ color: "muted" }),
                  )}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
