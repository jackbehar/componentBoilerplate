import colors from '../../../../assets/colors/tokens/colors';
import {LocalButtonType} from '../../../../types/component/LocalButton';
import {ThemeVariant} from '../../../../types/theme';

function CONTAINER_COLORS(theme: ThemeVariant, variant: LocalButtonType) {
  if (variant === LocalButtonType.PRIMARY)
    return [
      colors[theme].LAYOUT_BACKGROUND,
      colors[theme].ACCENT_PRIMARY_VARIATION_2,
    ];
  return [
    colors[theme].ACCENT_SECONDARY_REGULAR,
    colors[theme].ACCENT_SECONDARY_VARIATION_1,
  ];
}

function CONTAINER_COLOR_DATA(theme: ThemeVariant, variant: LocalButtonType) {
  const backgroundColorDisabled =
    variant === LocalButtonType.PRIMARY
      ? colors[theme].LAYOUT_BACKGROUND
      : colors[theme].ACCENT_SECONDARY_VARIATION_2;

  const borderColorDisabled =
    variant === LocalButtonType.PRIMARY
      ? colors[theme].LAYOUT_DISABLED
      : colors[theme].ACCENT_SECONDARY_VARIATION_2;
  return {
    disabled: {
      borderColor: borderColorDisabled,
      backgroundColor: [backgroundColorDisabled, backgroundColorDisabled],
    },
    enabled: {
      borderColor:
        variant === LocalButtonType.PRIMARY
          ? colors[theme].ACCENT_PRIMARY_REGULAR
          : colors[theme].ACCENT_SECONDARY_REGULAR,
      backgroundColor: CONTAINER_COLORS(theme, variant),
    },
  };
}

function getContainerColors(
  theme: ThemeVariant,
  variant: LocalButtonType,
  disabled?: boolean,
) {
  if (disabled) return CONTAINER_COLOR_DATA(theme, variant).disabled;
  return CONTAINER_COLOR_DATA(theme, variant).enabled;
}

export default {getContainerColors};
