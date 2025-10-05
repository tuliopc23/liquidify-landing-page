# Apple HIG Official Findings

**Source:** https://developer.apple.com/design/human-interface-guidelines  
**Fetched:** January 2025  
**Purpose:** Update Liquidify enhancement specs with authoritative information

---

## Critical Updates from Official HIG

### 1. **Liquid Glass is Official** ✅

Your project name "Liquidify" and use of "Liquid Glass" terminology is **perfectly aligned** with Apple's official material name!

**Official Definition:**

> "Liquid Glass forms a distinct functional layer for controls and navigation elements — like tab bars and sidebars — that floats above the content layer, establishing a clear visual hierarchy between functional elements and content."

**Key Points:**

- ✅ You're using the correct terminology
- ✅ Apple has formalized this as their primary material system
- 📚 Official developer guidance: [Adopting Liquid Glass](https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass)

---

### 2. **Liquid Glass Variants**

Apple defines **TWO official variants**:

#### `regular` (Most Common)

- **Use for:** Components with significant text (alerts, sidebars, popovers)
- **Behavior:** Blurs and adjusts luminosity for legibility
- **Edge effects:** Blur and reduce opacity at scroll edges
- Most system components use this

#### `clear` (Media-Rich)

- **Use for:** Components over photos/videos
- **Behavior:** Highly translucent, prioritizes background visibility
- **Dimming:** May need 35% opacity dark layer if background is bright
- **Example:** Media playback controls

**Update Needed:** Your `panda.config.ts` has `glass.surface` but should add these two official variants.

---

### 3. **Color Usage on Liquid Glass**

**Official Guidance:**

> "Use color sparingly in Liquid Glass. Limit the amount of color you apply to the material, and to symbols or text on the material. Reserve it for elements that truly benefit from emphasis, such as status indicators or key actions."

**Monochromatic Scheme:**

- Symbols and text use **monochromatic color**
- Darker when underlying content is light
- Lighter when underlying content is dark
- **Tint color ONLY for prominent actions** (e.g., Done button)

**Critical Finding:** Your current use of multiple tinted buttons may violate Apple's guideline. Should limit to primary actions only.

---

### 4. **Standard Materials (for Content Layer)**

Apple clearly separates:

**Liquid Glass:** Controls/navigation ONLY  
**Standard Materials:** Content layer

| Material    | Thickness        | Use Case             |
| ----------- | ---------------- | -------------------- |
| `ultraThin` | Most translucent | Light overlays       |
| `thin`      | Translucent      | Secondary grouping   |
| `regular`   | Default          | Standard grouping    |
| `thick`     | Most opaque      | High contrast needed |

**Update Needed:** Your `cardGlass` might be misusing Liquid Glass for content. Should use standard materials for cards in content layer.

---

### 5. **Typography Specifications**

#### iOS/iPadOS (Default = Large)

| Style       | Weight   | Size (pt) | Leading (pt) |
| ----------- | -------- | --------- | ------------ |
| Large Title | Regular  | 34        | 41           |
| Title 1     | Regular  | 28        | 34           |
| Title 2     | Regular  | 22        | 28           |
| Title 3     | Regular  | 20        | 25           |
| Headline    | Semibold | 17        | 22           |
| Body        | Regular  | 17        | 22           |
| Callout     | Regular  | 16        | 21           |
| Subheadline | Regular  | 15        | 20           |
| Footnote    | Regular  | 13        | 18           |
| Caption 1   | Regular  | 12        | 16           |
| Caption 2   | Regular  | 11        | 13           |

**Your Implementation:** Close, but using `1.0625rem` instead of exact point values. Should use exact pt values for pixel-perfect fidelity.

**Conversion:** At 144ppi (@2x), 1pt = 1.5px, so 17pt = 25.5px ≈ 1.59375rem (at 16px base)

---

### 6. **Vibrancy (Automatic)**

**Official Behavior:**

> "By allowing color to pass through from background to foreground, a material establishes visual hierarchy"

**iOS/iPadOS Vibrancy Levels:**

- `label` (default, highest contrast)
- `secondaryLabel`
- `tertiaryLabel`
- `quaternaryLabel` (lowest contrast, avoid on thin/ultraThin materials)

**Fills:**

- `fill` (default)
- `secondaryFill`
- `tertiaryFill`

**Critical:** Vibrancy should be AUTOMATIC. You shouldn't manually adjust opacity beyond what the material provides.

---

### 7. **Focus States**

**No specific guidance found** on exact focus ring specifications in the HIG. However, system-wide convention is:

- Blue ring at consistent opacity
- 3-4pt stroke width
- Offset from element

**Your implementation is reasonable** but should test against actual macOS/iOS focus rings.

---

### 8. **Dynamic Type Support**

**iOS requires Dynamic Type support:**

- Default: 17pt body text
- Range: xSmall (14pt) to AX5 (53pt body text)
- **Must scale gracefully**

**Update Needed:** Your tokens are static. Should implement Dynamic Type scaling for true HIG compliance.

---

### 9. **Minimum Sizes**

| Platform   | Default Size | Minimum Size |
| ---------- | ------------ | ------------ |
| iOS/iPadOS | 17pt         | 11pt         |
| macOS      | 13pt         | 10pt         |
| tvOS       | 29pt         | 23pt         |

**Tap Targets:** Minimum 44×44pt (not 2.75rem which is 44px)  
At @2x: 44pt = 88px = 5.5rem (at 16px base)

**Your implementation:** Using `2.75rem` = 44px, which is correct at 1x but should be 88px at @2x.

---

### 10. **Color System**

#### Semantic Colors (iOS/iPadOS)

**Background Hierarchy:**

- `systemBackground` (primary)
- `secondarySystemBackground`
- `tertiarySystemBackground`

**Grouped Backgrounds:**

- `systemGroupedBackground`
- `secondarySystemGroupedBackground`
- `tertiarySystemGroupedBackground`

**Foreground:**

- `label`, `secondaryLabel`, `tertiaryLabel`, `quaternaryLabel`
- `placeholderText`
- `separator`, `opaqueSeparator`
- `link`

**Your Implementation:** Has custom semantic tokens but not using official naming. Should align with system names for clarity.

---

### 11. **Continuous Corners**

**NOT mentioned in HIG.** This is an iOS implementation detail, not a documented guideline.

**Recommendation:** Standard `borderRadius` is sufficient for HIG compliance. Continuous corners are "nice to have" but not required for 98% fidelity.

---

### 12. **Motion & Animation**

**Principle:** "Harmony - Align with the concentric design of the hardware and software"

**No specific easing curves documented**, but:

- Respect `prefers-reduced-motion`
- Use subtle, purposeful animation
- Maintain consistency

**Your custom beziers are fine** as long as they feel harmonious with system animations.

---

## Revised Fidelity Assessment

### What You Got Right ✅

1. **Liquid Glass terminology** - Perfect!
2. **SF Pro fonts** - Correct system font
3. **Text style hierarchy** - Complete and well-named
4. **Semantic tokens** - Good structure
5. **Blur and transparency** - Correct approach
6. **Dark mode support** - Well implemented

### What Needs Adjustment ⚠️

1. **Material Usage**
   - Cards should use `material.regular`, not Liquid Glass
   - Liquid Glass ONLY for navigation/controls
   - Add official `regular` and `clear` variants

2. **Typography Sizing**
   - Use exact pt values, not approximations
   - Implement Dynamic Type scaling
   - Fix @2x/@3x conversions

3. **Color on Glass**
   - Reduce color usage on Liquid Glass
   - Use monochromatic scheme for symbols/text
   - Tint ONLY prominent actions

4. **Semantic Color Names**
   - Align with official names (`label`, `secondaryLabel`, etc.)
   - Use `systemBackground` naming convention

5. **Tap Targets**
   - Fix @2x conversion: should be 88px (5.5rem), not 44px

6. **Vibrancy**
   - Should be more automatic/system-driven
   - Use official vibrancy levels

---

## Priority Updates for Enhancement Proposal

### P0 (Must Fix)

1. ✅ Motion debug override (already identified)
2. ✅ Hardcoded colors (already identified)
3. 🆕 **Material misuse** - Move cards from Liquid Glass to standard materials
4. 🆕 **Color on glass** - Remove excess color from Liquid Glass elements

### P1 (High Impact)

1. ✅ Focus rings (keep as planned)
2. ✅ Button physics (keep as planned)
3. 🆕 **Add official Liquid Glass variants** (`regular`, `clear`)
4. 🆕 **Fix typography sizes** - Use exact pt values
5. 🆕 **Semantic color alignment** - Rename to match Apple conventions
6. ⬇️ **Continuous corners** - Downgrade to P3 (not in HIG)
7. ⬇️ **Vibrancy effects** - Simplify (should be more automatic)

### P2 (Polish)

1. ✅ Shadows (keep as planned)
2. ✅ Haptic feedback (keep as planned)
3. 🆕 **Dynamic Type support** - Scale text based on user preferences
4. 🆕 **@2x/@3x corrections** - Fix pixel doubling for Retina
5. ⬇️ **Liquid distortion** - Downgrade (not in HIG, nice-to-have)
6. ⬇️ **Glass texture** - Downgrade (not mentioned in HIG)

---

## Official Resources to Implement

1. **Adopting Liquid Glass**  
   https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass

2. **SwiftUI Material**  
   https://developer.apple.com/documentation/SwiftUI/Material

3. **System Colors**  
   https://developer.apple.com/documentation/SwiftUI/Color

4. **Dynamic Type**  
   https://developer.apple.com/documentation/SwiftUI/Text-input-and-output

---

## Compliance Matrix

| HIG Requirement                    | Current Status     | Target                  | Priority |
| ---------------------------------- | ------------------ | ----------------------- | -------- |
| **Liquid Glass for controls only** | ❌ Used in content | ✅ Navigation only      | P0       |
| **Color sparingly on glass**       | ❌ Multiple tints  | ✅ Primary actions only | P0       |
| **Exact typography pt values**     | ⚠️ Approximations  | ✅ Exact matches        | P1       |
| **Semantic color names**           | ⚠️ Custom names    | ✅ Apple names          | P1       |
| **Dynamic Type**                   | ❌ Not implemented | ✅ Full support         | P2       |
| **@2x/@3x accuracy**               | ⚠️ Some issues     | ✅ Pixel-perfect        | P2       |
| **Standard materials for content** | ❌ Missing         | ✅ Implemented          | P1       |
| **Vibrancy levels**                | ⚠️ Manual          | ✅ Automatic            | P1       |
| **Focus rings**                    | ✅ Good            | ✅ Verify               | P1       |
| **Motion curves**                  | ✅ Custom          | ✅ Test against system  | P2       |

---

## Updated Fidelity Estimate

**Before official HIG review:** 85-90%  
**After corrections:** Should reach **92-95%** (true HIG compliance)  
**With all polish:** **96-98%** (exceeds typical web implementations)

**Why not 100%?**

- Some APIs not available on web (true system vibrancy, metal rendering)
- Can't access live Dynamic Type user preferences
- Browser limitations on backdrop-filter precision
- No access to continuous bezier curve APIs

**98% is realistically the ceiling for web implementations.**

---

## Next Steps

1. Update `ENHANCEMENT_PROPOSAL.md` with official HIG corrections
2. Revise `LIQUIDIFY_AUDIT_REPORT.md` with accurate compliance metrics
3. Create new `HIG_COMPLIANCE_CHECKLIST.md` for implementation
4. Adjust P0/P1/P2 priorities based on official requirements
5. Add official API references for each enhancement

---

**Key Takeaway:** You're much closer to official HIG compliance than the initial estimate suggested. The main issues are material usage (cards should use standard materials, not Liquid Glass) and color discipline on glass surfaces. These are straightforward to fix and will bring you from 85% to 95% fidelity quickly.
