## Why
Feature cards currently showcase abstract gradient fills that no longer match the production-ready SVG illustrations created for the project. Replacing them will align the landing page with the approved visual direction.

## What Changes
- Swap each card's gradient illustration for the corresponding SVG graphic placed in `src/icons`
- Adjust icon sizing and positioning so cards keep their existing dimensions, typography, and layout tokens untouched
- Apply only subtle styling tweaks needed to blend the new graphics with current card treatments

## Impact
- Affected specs: landing-feature-cards
- Affected code: card-related components, illustration helpers, and SVG asset imports
