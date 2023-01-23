export const CORE = {
  White: '#ffffff',
  Black: '#000000',
  GRAY_30: '#f6f3ef',
  GRAY_50: '#F0EDE9',
  GRAY_100: '#e1dfdd',
  GRAY_200: '#c8c6c4',
  GRAY_300: '#b2b0ae',
  GRAY_400: '#9a9898',
  GRAY_500: '#878685',
  GRAY_600: '#737271',
  GRAY_700: '#5d5c59',
  GRAY_800: '#413f3e',
  GRAY_900: '#1a191a',
  BLUE_30: '#e3e9ed',
  BLUE_50: '#DAE8F0',
  BLUE_100: '#C0D8EA',
  BLUE_200: '#A3CDE9',
  BLUE_300: '#89C0E9',
  BLUE_400: '#5CA9E0',
  BLUE_500: '#3A8CC3',
  BLUE_600: '#2571A8',
  BLUE_700: '#005187',
  BLUE_800: '#004773',
  BLUE_900: '#103F5F',
  LAGUNE_30: '#ddebed',
  LAGUNE_50: '#d1e7e7',
  LAGUNE_100: '#b3e0e3',
  LAGUNE_200: '#92d8df',
  LAGUNE_300: '#70d0d7',
  LAGUNE_400: '#20bbc7',
  LAGUNE_500: '#00a1ae',
  LAGUNE_600: '#008491',
  LAGUNE_700: '#006d7a',
  LAGUNE_800: '#005c66',
  LAGUNE_900: '#005058',
  GREEN_30: '#c1e4aa',
  GREEN_50: '#b0de94',
  GREEN_100: '#a5d77e',
  GREEN_200: '#95d165',
  GREEN_300: '#87c35c',
  GREEN_400: '#72b43e',
  GREEN_500: '#5d9b2e',
  GREEN_600: '#54862d',
  GREEN_700: '#497232',
  GREEN_800: '#456734',
  GREEN_900: '#456734',
  SPROUT_30: '#d8e69e',
  SPROUT_50: '#cfdf86',
  SPROUT_100: '#c8de6e',
  SPROUT_200: '#c1d956',
  SPROUT_300: '#b1c84a',
  SPROUT_400: '#a6bd24',
  SPROUT_500: '#879f11',
  SPROUT_600: '#7b8b1d',
  SPROUT_700: '#6b7827',
  SPROUT_800: '#5d682a',
  SPROUT_900: '#50592a',
  YELLOW_30: '#f7f0da',
  YELLOW_50: '#f2e8c4',
  YELLOW_100: '#f8e7ad',
  YELLOW_200: '#ffe695',
  YELLOW_300: '#ffe582',
  YELLOW_400: '#fbd962',
  YELLOW_500: '#ffd300',
  YELLOW_600: '#ecbd00',
  YELLOW_700: '#c8a000',
  YELLOW_800: '#af8b1f',
  YELLOW_900: '#987a29',
  GLOW_30: '#fbecd4',
  GLOW_50: '#fbe4c5',
  GLOW_100: '#ffd8a9',
  GLOW_200: '#ffcb8c',
  GLOW_300: '#ffc277',
  GLOW_400: '#ffb662',
  GLOW_500: '#ff9900',
  GLOW_600: '#f18600',
  GLOW_700: '#d77f1c',
  GLOW_800: '#be6f1b',
  GLOW_900: '#a46426',
  RED_30: '#e9cec5',
  RED_50: '#edbaac',
  RED_100: '#eea696',
  RED_200: '#f49786',
  RED_300: '#f28673',
  RED_400: '#ec6e5c',
  RED_500: '#dc3c2a',
  RED_600: '#bd3a27',
  RED_700: '#a93f30',
  RED_800: '#8e382b',
  RED_900: '#7c342b',
  ORCHID_30: '#e2ccd1',
  ORCHID_50: '#e5bbc6',
  ORCHID_100: '#e3a9b7',
  ORCHID_200: '#e995ad',
  ORCHID_300: '#e27a9b',
  ORCHID_400: '#dc5c85',
  ORCHID_500: '#ba3f6a',
  ORCHID_600: '#ac1c5b',
  ORCHID_700: '#901448',
  ORCHID_800: '#801a40',
  ORCHID_900: '#6a1937',
} as const;

export const DOME = {
  '10': 0.125,
  '25': 0.25,
  '50': 0.5,
  '60': 0.625,
  '80': 0.75,
  '90': 0.875,
  '100': 1,
  '110': 1.125,
  '120': 1.25,
  '150': 1.5,
  '200': 2,
  '250': 2.5,
  '300': 3.25,
  '400': 4,
  '500': 5,
  '600': 6.5,
  '700': 7.5,
  '800': 8.5,
  '900': 9.5,
  '1000': 10.5,
  '1200': 12,
  '1300': 13,
} as const;

export const BASE = {grid: 16, fontSize: 16, size: 16} as const;

export const fontSizes = {
  '50': BASE.fontSize * DOME[50],
  '60': BASE.fontSize * DOME[60],
  '80': BASE.fontSize * DOME[80],
  '90': BASE.fontSize * DOME[90],
  '100': BASE.fontSize * DOME[100],
  '110': BASE.fontSize * DOME[110],
  '120': BASE.fontSize * DOME[120],
  '150': BASE.fontSize * DOME[150],
  '200': BASE.fontSize * DOME[200],
  '250': BASE.fontSize * DOME[250],
  '300': BASE.fontSize * DOME[300],
  '400': BASE.fontSize * DOME[400],
  '500': BASE.fontSize * DOME[500],
  '600': BASE.fontSize * DOME[600],
  '700': BASE.fontSize * DOME[700],
  '800': BASE.fontSize * DOME[800],
  '900': BASE.fontSize * DOME[900],
  '1000': BASE.fontSize * DOME[1000],
  '1200': BASE.fontSize * DOME[1200],
  '1300': BASE.fontSize * DOME[1300],
} as const;

export const sizing = {
  '10': BASE.size * DOME[10],
  '25': BASE.size * DOME[25],
  '50': BASE.size * DOME[50],
  '60': BASE.size * DOME[60],
  '80': BASE.size * DOME[80],
  '90': BASE.size * DOME[90],
  '100': BASE.size * DOME[100],
  '110': BASE.size * DOME[110],
  '120': BASE.size * DOME[120],
  '150': BASE.size * DOME[150],
  '200': BASE.size * DOME[200],
  '250': BASE.size * DOME[250],
  '300': BASE.size * DOME[300],
  '400': BASE.size * DOME[400],
  '500': BASE.size * DOME[500],
  '600': BASE.size * DOME[600],
  '700': BASE.size * DOME[700],
  '800': BASE.size * DOME[800],
  '900': BASE.size * DOME[900],
  '1000': BASE.size * DOME[1000],
  '1200': BASE.size * DOME[1200],
  '1300': BASE.size * DOME[1300],
} as const;

export const letterSpacing = {
  '2': 0.2,
  '4': 0.4,
  '6': 0.6,
  '8': 0.8,
  '10': 1,
  '18': 1.8,
} as const;

export const lineHeights = {
  '100': 1,
  '120': 1.2,
  '140': 1.4,
  '200': 2,
} as const;

export const fontWeights = {
  '100': 'Thin',
  '200': 'Light',
  '300': 'Book',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'Heavy',
} as const;

export const fontFamilies = {Gibson: 'Gibson', NotoSans: 'Noto Sans'} as const;

export const paragraphSpacing = {'0': 0, '10': 10} as const;

export const Typography = {
  Overline: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[600],
    lineHeight: lineHeights[200] * fontSizes[80],
    fontSize: fontSizes[80],
    letterSpacing: letterSpacing[18],
    textTransform: 'uppercase',
    textDecorationLine: 'none',
  },
  Label: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[400],
    lineHeight: lineHeights[120] * fontSizes[80],
    fontSize: fontSizes[80],
    letterSpacing: letterSpacing[10],
    textTransform: 'none',
    textDecorationLine: 'none',
  },
  CaptionS: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[200],
    lineHeight: lineHeights[120] * fontSizes[60],
    fontSize: fontSizes[60],
    letterSpacing: letterSpacing[6],
    textTransform: 'none',
    textDecorationLine: 'none',
  },
  CaptionM: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[200],
    lineHeight: lineHeights[120] * fontSizes[80],
    fontSize: fontSizes[80],
    letterSpacing: letterSpacing[6],
    textTransform: 'none',
    textDecorationLine: 'none',
  },
  CaptionL: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[200],
    lineHeight: lineHeights[120] * fontSizes[90],
    fontSize: fontSizes[90],
    letterSpacing: letterSpacing[6],
    textTransform: 'none',
    textDecorationLine: 'none',
  },
  Placeholder: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[200],
    lineHeight: lineHeights[120] * fontSizes[100],
    fontSize: fontSizes[100],
    letterSpacing: letterSpacing[6],
    textTransform: 'none',
    textDecorationLine: 'none',
  },
  Action: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[400],
    lineHeight: lineHeights[100] * fontSizes[100],
    fontSize: fontSizes[100],
    letterSpacing: letterSpacing[6],
    textTransform: 'none',
    textDecorationLine: 'none',
  },
  Link: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[400],
    lineHeight: lineHeights[120] * fontSizes[100],
    fontSize: fontSizes[100],
    letterSpacing: letterSpacing[6],
    textTransform: 'none',
    textDecorationLine: 'underline',
  },
  BodyS: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[400],
    lineHeight: lineHeights[120] * fontSizes[90],
    fontSize: fontSizes[90],
    letterSpacing: letterSpacing[4],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  BodyM: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[400],
    lineHeight: lineHeights[120] * fontSizes[100],
    fontSize: fontSizes[100],
    letterSpacing: letterSpacing[4],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  BodyL: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[400],
    lineHeight: lineHeights[120] * fontSizes[110],
    fontSize: fontSizes[110],
    letterSpacing: letterSpacing[4],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  SubheadingS: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[600],
    lineHeight: lineHeights[120] * fontSizes[90],
    fontSize: fontSizes[90],
    letterSpacing: letterSpacing[6],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  SubheadingM: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[600],
    lineHeight: lineHeights[120] * fontSizes[100],
    fontSize: fontSizes[100],
    letterSpacing: letterSpacing[6],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  SubheadingL: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[600],
    lineHeight: lineHeights[120] * fontSizes[110],
    fontSize: fontSizes[110],
    letterSpacing: letterSpacing[6],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  H6: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[600],
    lineHeight: lineHeights[140] * fontSizes[110],
    fontSize: fontSizes[110],
    letterSpacing: letterSpacing[6],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  H5: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[600],
    lineHeight: lineHeights[140] * fontSizes[120],
    fontSize: fontSizes[120],
    letterSpacing: letterSpacing[6],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  H4: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[600],
    lineHeight: lineHeights[140] * fontSizes[150],
    fontSize: fontSizes[150],
    letterSpacing: letterSpacing[6],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  H3: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[400],
    lineHeight: lineHeights[140] * fontSizes[200],
    fontSize: fontSizes[200],
    letterSpacing: letterSpacing[4],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  H2: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[400],
    lineHeight: lineHeights[140] * fontSizes[300],
    fontSize: fontSizes[300],
    letterSpacing: letterSpacing[4],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  H1: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[400],
    lineHeight: lineHeights[140] * fontSizes[400],
    fontSize: fontSizes[400],
    letterSpacing: letterSpacing[4],
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  DisplayS: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[700],
    lineHeight: lineHeights[120] * fontSizes[200],
    fontSize: fontSizes[200],
    textTransform: 'uppercase',
    textDecorationLine: 'none',
    letterSpacing: letterSpacing[2],
  },
  DisplayM: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[700],
    lineHeight: lineHeights[120] * fontSizes[250],
    fontSize: fontSizes[250],
    letterSpacing: letterSpacing[2],
    textTransform: 'uppercase',
    textDecorationLine: 'none',
  },
  DisplayL: {
    fontFamily: fontFamilies.Gibson,
    fontWeight: fontWeights[700],
    lineHeight: lineHeights[120] * fontSizes[300],
    fontSize: fontSizes[300],
    letterSpacing: letterSpacing[2],
    textTransform: 'uppercase',
    textDecorationLine: 'none',
  },
} as const;

export const dark = {
  ACCENT_PRIMARY_REGULAR: CORE.GRAY_30,
  ACCENT_PRIMARY_VARIATION_1: CORE.GRAY_300,
  ACCENT_PRIMARY_VARIATION_2: CORE.GRAY_800,
  ACCENT_SECONDARY_REGULAR: CORE.BLUE_500,
  ACCENT_SECONDARY_VARIATION_1: CORE.BLUE_300,
  ACCENT_SECONDARY_VARIATION_2: CORE.BLUE_900,
  ACCENT_TERTIARY_REGULAR: CORE.SPROUT_500,
  ACCENT_TERTIARY_VARIATION_1: CORE.SPROUT_300,
  ACCENT_TERTIARY_VARIATION_2: CORE.SPROUT_900,
  LAYOUT_BACKGROUND: CORE.GRAY_900,
  LAYOUT_SURFACE: CORE.GRAY_800,
  LAYOUT_DIVIDER: CORE.GRAY_700,
  LAYOUT_SPOT: CORE.GLOW_600,
  LAYOUT_DISABLED: CORE.GRAY_700,
  LAYOUT_NAVBAR: CORE.GRAY_800,
  TEXT_REGULAR: CORE.White,
  TEXT_REGULAR_DISABLED: CORE.GRAY_700,
  TEXT_INVERTED: CORE.GRAY_800,
  TEXT_INVERTED_DISABLED: CORE.GRAY_100,
  TEXT_NEUTRAL: CORE.GRAY_400,
  TEXT_LIGHT: CORE.White,
  TEXT_DARK: CORE.GRAY_900,
  SEMANTIC_NEGATIVE_REGULAR: CORE.RED_500,
  SEMANTIC_NEGATIVE_DARK: CORE.RED_900,
  SEMANTIC_POSITIVE_REGULAR: CORE.GREEN_500,
  SEMANTIC_POSITIVE_DARK: CORE.GREEN_900,
  SEMANTIC_ATTENTION_REGULAR: CORE.YELLOW_500,
  SEMANTIC_ATTENTION_DARK: CORE.YELLOW_900,
  SEMANTIC_WARM_REGULAR: CORE.RED_600,
  SEMANTIC_WARM_DARK: CORE.RED_900,
  SEMANTIC_COLD_REGULAR: CORE.BLUE_500,
  SEMANTIC_COLD_DARK: CORE.BLUE_900,
  SEMANTIC_NEUTRAL_REGULAR: CORE.GRAY_400,
  SEMANTIC_NEUTRAL_DARK: CORE.GRAY_900,
} as const;

export const light = {
  ACCENT_PRIMARY_REGULAR: CORE.GRAY_800,
  ACCENT_PRIMARY_VARIATION_1: CORE.GRAY_300,
  ACCENT_PRIMARY_VARIATION_2: CORE.GRAY_900,
  ACCENT_SECONDARY_REGULAR: CORE.BLUE_500,
  ACCENT_SECONDARY_VARIATION_1: CORE.BLUE_300,
  ACCENT_SECONDARY_VARIATION_2: CORE.BLUE_900,
  ACCENT_TERTIARY_REGULAR: CORE.SPROUT_500,
  ACCENT_TERTIARY_VARIATION_1: CORE.SPROUT_300,
  ACCENT_TERTIARY_VARIATION_2: CORE.SPROUT_900,
  LAYOUT_BACKGROUND: CORE.White,
  LAYOUT_SURFACE: CORE.GRAY_30,
  LAYOUT_DIVIDER: CORE.GRAY_100,
  LAYOUT_SPOT: CORE.GLOW_600,
  LAYOUT_DISABLED: CORE.GRAY_100,
  LAYOUT_NAVBAR: CORE.GRAY_30,
  TEXT_REGULAR: CORE.GRAY_800,
  TEXT_REGULAR_DISABLED: CORE.GRAY_100,
  TEXT_INVERTED: CORE.White,
  TEXT_INVERTED_DISABLED: CORE.GRAY_700,
  TEXT_NEUTRAL: CORE.GRAY_400,
  TEXT_LIGHT: CORE.White,
  TEXT_DARK: CORE.GRAY_900,
  SEMANTIC_NEGATIVE_REGULAR: CORE.RED_500,
  SEMANTIC_NEGATIVE_DARK: CORE.RED_900,
  SEMANTIC_POSITIVE_REGULAR: CORE.GREEN_500,
  SEMANTIC_POSITIVE_DARK: CORE.GREEN_900,
  SEMANTIC_ATTENTION_REGULAR: CORE.YELLOW_500,
  SEMANTIC_ATTENTION_DARK: CORE.YELLOW_900,
  SEMANTIC_WARM_REGULAR: CORE.RED_600,
  SEMANTIC_WARM_DARK: CORE.RED_900,
  SEMANTIC_COLD_REGULAR: CORE.BLUE_300,
  SEMANTIC_COLD_DARK: CORE.BLUE_900,
  SEMANTIC_NEUTRAL_REGULAR: CORE.GRAY_400,
  SEMANTIC_NEUTRAL_DARK: CORE.GRAY_900,
} as const;

export const legacy = {
  ACCENT_PRIMARY_REGULAR: CORE.GRAY_30,
  ACCENT_PRIMARY_VARIATION_1: CORE.GRAY_300,
  ACCENT_PRIMARY_VARIATION_2: CORE.GRAY_800,
  ACCENT_SECONDARY_REGULAR: CORE.BLUE_500,
  ACCENT_SECONDARY_VARIATION_1: CORE.BLUE_300,
  ACCENT_SECONDARY_VARIATION_2: CORE.BLUE_900,
  ACCENT_TERTIARY_REGULAR: CORE.SPROUT_500,
  ACCENT_TERTIARY_VARIATION_1: CORE.SPROUT_300,
  ACCENT_TERTIARY_VARIATION_2: CORE.SPROUT_900,
  LAYOUT_BACKGROUND: '#1A1E21',
  LAYOUT_SURFACE: '#35393B',
  LAYOUT_DIVIDER: CORE.GRAY_700,
  LAYOUT_SPOT: CORE.GLOW_600,
  LAYOUT_DISABLED: CORE.GRAY_700,
  LAYOUT_NAVBAR: '#0D0D0D',
  TEXT_REGULAR: CORE.White,
  TEXT_REGULAR_DISABLED: CORE.GRAY_700,
  TEXT_INVERTED: CORE.GRAY_800,
  TEXT_INVERTED_DISABLED: CORE.GRAY_100,
  TEXT_NEUTRAL: CORE.GRAY_400,
  TEXT_LIGHT: CORE.White,
  TEXT_DARK: CORE.GRAY_900,
  SEMANTIC_NEGATIVE_REGULAR: CORE.RED_500,
  SEMANTIC_NEGATIVE_DARK: CORE.RED_900,
  SEMANTIC_POSITIVE_REGULAR: CORE.GREEN_500,
  SEMANTIC_POSITIVE_DARK: CORE.GREEN_900,
  SEMANTIC_ATTENTION_REGULAR: CORE.YELLOW_500,
  SEMANTIC_ATTENTION_DARK: CORE.YELLOW_900,
  SEMANTIC_WARM_REGULAR: CORE.RED_600,
  SEMANTIC_WARM_DARK: CORE.RED_900,
  SEMANTIC_COLD_REGULAR: CORE.BLUE_500,
  SEMANTIC_COLD_DARK: CORE.BLUE_900,
  SEMANTIC_NEUTRAL_REGULAR: CORE.GRAY_400,
  SEMANTIC_NEUTRAL_DARK: CORE.GRAY_900,
} as const;
