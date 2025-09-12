import React from "react";
import { css, cx } from "../../styled-system/css";
import { cardGlass, button, typography } from "../pandaStyles";

const ComponentShowcase: React.FC = () => {
  const componentCategories = [
    {
      title: "Navigation",
      description: "Tab bars, navigation bars, and menu systems",
      components: ["TabBar", "NavigationBar", "Sidebar", "Breadcrumb"],
      icon: "bi-compass",
      color: "apple-blue",
      bgColor: "from-apple-blue/5 to-apple-blue/10",
    },
    {
      title: "Input & Forms",
      description: "Text fields, buttons, and form controls",
      components: ["TextField", "Button", "Switch", "Slider"],
      icon: "bi-ui-checks-grid",
      color: "apple-purple",
      bgColor: "from-apple-purple/5 to-apple-purple/10",
    },
    {
      title: "Data Display",
      description: "Lists, tables, and data visualization",
      components: ["List", "Table", "Card", "Badge"],
      icon: "bi-bar-chart",
      color: "apple-green",
      bgColor: "from-apple-green/5 to-apple-green/10",
    },
    {
      title: "Feedback",
      description: "Alerts, modals, and progress indicators",
      components: ["Alert", "Modal", "Toast", "Progress"],
      icon: "bi-chat-dots",
      color: "apple-orange",
      bgColor: "from-apple-orange/5 to-apple-orange/10",
    },
  ];

  return (
    <section
      id="components"
      className={css({
        paddingY: "5rem",
        backgroundColor: "white",
        _dark: { backgroundColor: "white" },
        scrollMarginTop: "6rem",
      })}
    >
      <div
        className={css({
          maxWidth: "72rem",
          marginX: "auto",
          paddingX: { base: "1rem", sm: "1.5rem", lg: "2rem" },
        })}
      >
        <div className={css({ textAlign: "center", marginBottom: "4rem" })}>
          <h2
            className={cx(
              typography({ role: "title1" }),
              css({ color: "system-gray-900", marginBottom: "1rem" }),
            )}
          >
            Component Library
          </h2>
          <p
            className={cx(
              typography({ role: "body" }),
              css({
                color: "system-gray-700",
                maxWidth: "40rem",
                marginX: "auto",
              }),
            )}
          >
            Comprehensive collection of components organized by functionality,
            each designed with Apple's attention to detail.
          </p>
        </div>

        {/* Enhanced Component Grid */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
            gap: "1.5rem",
            marginBottom: "4rem",
          })}
        >
          {componentCategories.map((category, index) => (
            <div
              key={index}
              className={cx(
                cardGlass,
                css({
                  padding: "2rem",
                  backgroundImage: `linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.6))`,
                  transition: "all 300ms ease",
                  _hover: { transform: "scale(1.05)" },
                }),
              )}
            >
              <div
                className={css({
                  display: "flex",
                  alignItems: "flex-start",
                  columnGap: "1.5rem",
                })}
              >
                <div
                  className={css({
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                    transition: "all 300ms ease",
                    _groupHover: { transform: "scale(1.1)" },
                    backgroundColor: `color-mix(in oklab, var(--colors-${category.color}), transparent 90%)`,
                  })}
                >
                  <i
                    className={
                      css({
                        color: `var(--colors-${category.color})`,
                        fontSize: "1.25rem",
                      }) + ` ${category.icon}`
                    }
                  ></i>
                </div>
                <div className={css({ flex: 1 })}>
                  <h3
                    className={cx(
                      typography({ role: "title3" }),
                      css({
                        color: "system-gray-900",
                        marginBottom: "0.75rem",
                      }),
                    )}
                  >
                    {category.title}
                  </h3>
                  <p
                    className={cx(
                      typography({ role: "subheadline" }),
                      css({ color: "system-gray-700", marginBottom: "1rem" }),
                    )}
                  >
                    {category.description}
                  </p>
                  <div
                    className={css({
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    })}
                  >
                    {category.components.map((component, idx) => (
                      <span
                        key={idx}
                        className={cx(
                          typography({ role: "caption" }),
                          css({
                            paddingX: "0.75rem",
                            paddingY: "0.25rem",
                            backgroundColor: "glass.bg",
                            backdropFilter: "blur(4px)",
                            color: "system-gray-700",
                            borderRadius: "0.5rem",
                            borderWidth: "1px",
                            borderColor: "glass.border",
                            transition: "background-color 200ms ease",
                            _hover: { backgroundColor: "bg.surface" },
                          }),
                        )}
                      >
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Interactive Demo */}
        <div
          className={cx(
            cardGlass,
            css({
              padding: "2rem",
              lg: { padding: "3rem" },
              textAlign: "center",
              backgroundImage:
                "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.6))",
            }),
          )}
        >
          <h3
            className={cx(
              typography({ role: "title2" }),
              css({ color: "system-gray-900", marginBottom: "1rem" }),
            )}
          >
            Experience the Components
          </h3>
          <p
            className={cx(
              typography({ role: "body" }),
              css({
                color: "system-gray-700",
                marginBottom: "2rem",
                maxWidth: "36rem",
                marginX: "auto",
              }),
            )}
          >
            See LiqUIdify components in action with our interactive playground.
          </p>

          {/* Enhanced Demo Components */}
          <div
            className={css({
              display: "flex",
              flexDirection: { base: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "2rem",
            })}
          >
            <button
              className={cx(
                button({ intent: "primary" }),
                css({
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  _hover: { boxShadow: "0 20px 25px rgba(0,0,0,0.15)" },
                }),
              )}
            >
              <i
                className="bi bi-play-fill"
                style={{ marginRight: "0.5rem" }}
              ></i>
              Primary Button
            </button>
            <button
              className={cx(
                button({ intent: "secondary" }),
                css({
                  // Force dark text to ensure contrast on the white section background
                  color: "system-gray-900",
                  _dark: { color: "system-gray-900" },
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  _hover: { boxShadow: "0 20px 25px rgba(0,0,0,0.15)" },
                }),
              )}
            >
              <i className="bi bi-heart" style={{ marginRight: "0.5rem" }}></i>
              Secondary Button
            </button>
            <div
              className={cx(
                cardGlass,
                css({
                  paddingX: "1rem",
                  paddingY: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "0.5rem",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                }),
              )}
            >
              <div
                className={css({
                  width: "0.5rem",
                  height: "0.5rem",
                  backgroundColor: "apple-green",
                  borderRadius: "9999px",
                  animation: "pulse 2s infinite",
                })}
              ></div>
              <span
                className={cx(
                  typography({ role: "subheadline" }),
                  css({ color: "system-gray-700" }),
                )}
              >
                Online
              </span>
            </div>
          </div>

          <a
            href="https://github.com/tuliopc23/LiqUIdify"
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              display: "inline-flex",
              alignItems: "center",
              columnGap: "0.5rem",
              fontFamily: "sans",
              color: "link",
              transition: "color 150ms ease",
              fontSize: "0.875rem",
              _hover: {
                color:
                  "color-mix(in oklab, var(--colors-link), transparent 20%)",
              },
            })}
          >
            <span>Explore all components</span>
            <i
              className={
                css({
                  transition: "transform 200ms ease",
                  _hover: { transform: "translateX(0.25rem)" },
                }) + " bi bi-arrow-right"
              }
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
