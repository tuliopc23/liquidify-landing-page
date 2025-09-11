/* eslint-disable */
export type Token = `colors.${ColorToken}` | `fonts.${FontToken}` | `radii.${RadiusToken}` | `breakpoints.${BreakpointToken}` | `sizes.${SizeToken}`

export type ColorPalette = "apple-blue" | "apple-purple" | "apple-pink" | "apple-red" | "apple-orange" | "apple-yellow" | "apple-green" | "apple-mint" | "apple-teal" | "apple-cyan" | "apple-indigo" | "system-gray-50" | "system-gray-100" | "system-gray-200" | "system-gray-300" | "system-gray-400" | "system-gray-500" | "system-gray-600" | "system-gray-700" | "system-gray-800" | "system-gray-900"

export type ColorToken = "apple-blue" | "apple-purple" | "apple-pink" | "apple-red" | "apple-orange" | "apple-yellow" | "apple-green" | "apple-mint" | "apple-teal" | "apple-cyan" | "apple-indigo" | "system-gray-50" | "system-gray-100" | "system-gray-200" | "system-gray-300" | "system-gray-400" | "system-gray-500" | "system-gray-600" | "system-gray-700" | "system-gray-800" | "system-gray-900" | "colorPalette"

export type FontToken = "inter" | "sans"

export type RadiusToken = "xl" | "2xl"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type Tokens = {
		colors: ColorToken
		fonts: FontToken
		radii: RadiusToken
		breakpoints: BreakpointToken
		sizes: SizeToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"