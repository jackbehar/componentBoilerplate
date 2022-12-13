import theme from './theme';
import text from './theme/text';

import global from './tokens/global.json';

const colors = {
  light: theme.light,
  dark: theme.dark,
  legacy: theme.legacy,
} as const;

export default colors;

export type ProjectColorsType = keyof typeof theme.light;
export type TextColorsType = keyof typeof text.light;
export type Test = keyof typeof global.color;
