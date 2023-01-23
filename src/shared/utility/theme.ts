import {ThemeVariant} from '../../types/theme';

export function chooseParamsBasedOnTheme<TParams>(
  theme: ThemeVariant,
  lightThemeParams: TParams,
  darkThemeParams: TParams,
) {
  if (theme === 'dark') return darkThemeParams;
  return lightThemeParams;
}
