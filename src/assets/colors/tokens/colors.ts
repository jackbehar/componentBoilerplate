import {dark, legacy, light} from './globalParsed';

const colors = {
  light,
  dark,
  legacy,
} as const;

export default colors;

export type ProjectColorsType = keyof typeof light;
export type TextColorsType = keyof typeof light;
