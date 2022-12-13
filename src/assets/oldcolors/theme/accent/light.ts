import {palette} from '../../palette/palette';

const light = {
  primary: palette.gray800,
  primaryLight: palette.gray300,
  primaryDark: palette.gray900,
  secondary: palette.blue500,
  secondaryLight: palette.blue300,
  secondaryDark: palette.blue900,
  tertiary: palette.sprout500,
  tertiaryLight: palette.sprout300,
  tertiaryDark: palette.sprout900,
} as const;

export default light;
