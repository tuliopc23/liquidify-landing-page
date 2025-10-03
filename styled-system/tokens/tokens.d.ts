/* eslint-disable */
export type Token = `colors.${ColorToken}` | `fonts.${FontToken}` | `fontSizes.${FontSizeToken}` | `lineHeights.${LineHeightToken}` | `letterSpacings.${LetterSpacingToken}` | `radii.${RadiusToken}` | `shadows.${ShadowToken}` | `blurs.${BlurToken}` | `breakpoints.${BreakpointToken}` | `sizes.${SizeToken}` | `gradients.${GradientToken}`

export type ColorPalette = "apple-blue" | "apple-indigo" | "apple-purple" | "apple-pink" | "apple-red" | "apple-orange" | "apple-yellow" | "apple-green" | "apple-teal" | "apple-cyan" | "apple-red-orange" | "apple-tomato" | "apple-pink-light" | "apple-taupe" | "mb-navy" | "mb-surface" | "mb-orange" | "system-gray-50" | "system-gray-100" | "system-gray-200" | "system-gray-300" | "system-gray-400" | "system-gray-500" | "system-gray-600" | "system-gray-700" | "system-gray-800" | "system-gray-900" | "white" | "black" | "text" | "muted" | "link" | "primary" | "success" | "warning" | "danger" | "info" | "bg.canvas" | "bg.subtle" | "bg.surface" | "border.default" | "glass.bg" | "glass.border" | "glass.ring" | "glass.tint" | "glass.stroke" | "glass.surface" | "glass.surface-elevated" | "mb.bg" | "mb.surface" | "mb.accent" | "mb.button-primary"

export type ColorToken = "apple-blue" | "apple-indigo" | "apple-purple" | "apple-pink" | "apple-red" | "apple-orange" | "apple-yellow" | "apple-green" | "apple-teal" | "apple-cyan" | "apple-red-orange" | "apple-tomato" | "apple-pink-light" | "apple-taupe" | "mb-navy" | "mb-surface" | "mb-orange" | "system-gray-50" | "system-gray-100" | "system-gray-200" | "system-gray-300" | "system-gray-400" | "system-gray-500" | "system-gray-600" | "system-gray-700" | "system-gray-800" | "system-gray-900" | "white" | "black" | "text" | "muted" | "link" | "primary" | "success" | "warning" | "danger" | "info" | "bg.canvas" | "bg.subtle" | "bg.surface" | "border.default" | "glass.bg" | "glass.border" | "glass.ring" | "glass.tint" | "glass.stroke" | "glass.surface" | "glass.surface-elevated" | "mb.bg" | "mb.surface" | "mb.accent" | "mb.button-primary" | "colorPalette"

export type FontToken = "display" | "text" | "sans" | "inter" | "mono" | "caladea" | "wixMadefor"

export type FontSizeToken = "display" | "largeTitle" | "title1" | "title2" | "title3" | "headline" | "body" | "callout" | "subheadline" | "footnote" | "caption"

export type LineHeightToken = "display" | "largeTitle" | "title1" | "title2" | "title3" | "headline" | "body" | "callout" | "subheadline" | "footnote" | "caption"

export type LetterSpacingToken = "display" | "titles" | "body"

export type RadiusToken = "xl" | "2xl" | "full" | "glass"

export type ShadowToken = "sm" | "md" | "lg" | "xl" | "elevation.card-compact.base" | "elevation.card-standard.base" | "elevation.card.hoverInteractive" | "elevation.card.hoverPassive"

export type BlurToken = "glass-sm" | "glass-md" | "glass-lg" | "glass.surface" | "glass.strong"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type GradientToken = "glass.highlight"

export type Tokens = {
		colors: ColorToken
		fonts: FontToken
		fontSizes: FontSizeToken
		lineHeights: LineHeightToken
		letterSpacings: LetterSpacingToken
		radii: RadiusToken
		shadows: ShadowToken
		blurs: BlurToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		gradients: GradientToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"