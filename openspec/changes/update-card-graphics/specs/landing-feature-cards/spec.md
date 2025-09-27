## ADDED Requirements
### Requirement: Feature Cards Use Branded Illustrations
Marketing feature cards on the landing page MUST render the curated SVG graphics stored in `src/icons` instead of the legacy gradient backgrounds while leaving card typography, border radius, and layout tokens unchanged.

#### Scenario: Replace gradients with matching icon graphics
- **WHEN** the landing page renders cards such as "Apple HIG on the web", "Install", "Accessibility", or "Tree-shakeable"
- **THEN** each card displays its corresponding SVG illustration from `src/icons`
- **AND** the former gradient-only artwork is no longer rendered.

#### Scenario: Adapt illustration sizing without layout shifts
- **WHEN** the SVG graphic is positioned inside its card's illustration slot
- **THEN** the graphic is scaled and aligned to fit the existing space without resizing the card or altering typography and border radii.

#### Scenario: Illustration surfaces match the active theme
- **WHEN** the landing page resolves to light or dark mode
- **THEN** each card illustration uses the corresponding custom property defined in `src/styles/card-art-colors.css` for its background surface
- **AND** the SVG artwork remains otherwise unchanged.

#### Scenario: Apple system palette colors the illustration surfaces
- **WHEN** card art background tokens resolve in either light or dark mode
- **THEN** the computed colors blend the appropriate Apple system color (e.g., blue, green, pink, indigo) with white in light mode or black in dark mode via `color-mix`
- **AND** the resulting hues align with the official Apple system palette for platform consistency.

#### Scenario: Card elevations use HIG elevation tokens
- **WHEN** a feature card renders in its resting state or hovered state
- **THEN** its box-shadow derives from the semantic elevation tokens defined in `panda.config.ts`
- **AND** the light and dark treatments match Apple’s elevation guidance for glass surfaces.

#### Scenario: Shared glass tokens style global chrome
- **WHEN** navigation or footer chrome is rendered
- **THEN** each surface uses the shared glass background, blur, highlight, and stroke tokens
- **AND** the frosted treatment remains consistent with card surfaces across both themes.
