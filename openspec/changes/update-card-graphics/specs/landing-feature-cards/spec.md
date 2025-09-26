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
