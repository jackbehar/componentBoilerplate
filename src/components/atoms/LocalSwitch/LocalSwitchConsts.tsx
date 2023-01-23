import colors from '../../../assets/colors/tokens/colors';
import {ThemeVariant} from '../../../types/theme';

const BORDER_WIDTH = 1;

const CONTAINER_WIDTH = 32;
const CONTAINER_HEIGHT = 24;

const SWITCH_WIDTH = 10;
const SWITCH_HEIGHT = 16;

function PRIMARY_CONTAINER_COLORS(theme: ThemeVariant) {
  return [
    colors[theme].LAYOUT_BACKGROUND,
    colors[theme].ACCENT_PRIMARY_REGULAR,
  ];
}

function DISABLE_PRIMARY_CONTAINER_COLORS(theme: ThemeVariant) {
  return [colors[theme].LAYOUT_BACKGROUND, colors[theme].LAYOUT_DISABLED];
}

function PRIMARY_CONTAINER_BORDER_COLORS(theme: ThemeVariant) {
  return [
    colors[theme].ACCENT_PRIMARY_REGULAR,
    colors[theme].ACCENT_PRIMARY_REGULAR,
  ];
}

function DISABLE_PRIMARY_CONTAINER_BORDER_COLORS(theme: ThemeVariant) {
  return [colors[theme].LAYOUT_DISABLED, colors[theme].LAYOUT_DISABLED];
}

function PRIMARY_CONTAINER_COLOR_DATA(theme: ThemeVariant) {
  return {
    disabled: {
      borderColors: DISABLE_PRIMARY_CONTAINER_BORDER_COLORS(theme),
      backgroundColor: DISABLE_PRIMARY_CONTAINER_COLORS(theme),
    },
    enabled: {
      borderColors: PRIMARY_CONTAINER_BORDER_COLORS(theme),
      backgroundColor: PRIMARY_CONTAINER_COLORS(theme),
    },
  };
}

function getPrimaryContainerColors(theme: ThemeVariant, disabled?: boolean) {
  if (disabled) return PRIMARY_CONTAINER_COLOR_DATA(theme).disabled;
  return PRIMARY_CONTAINER_COLOR_DATA(theme).enabled;
}

function SWITCH_COLORS(theme: ThemeVariant) {
  return [
    colors[theme].ACCENT_PRIMARY_REGULAR,
    colors[theme].LAYOUT_BACKGROUND,
  ];
}

function DISABLE_SWITCH_COLORS(theme: ThemeVariant) {
  return [colors[theme].LAYOUT_DISABLED, colors[theme].LAYOUT_DISABLED];
}

function SWITCH_BORDER_COLORS(theme: ThemeVariant) {
  return [
    colors[theme].ACCENT_PRIMARY_REGULAR,
    colors[theme].LAYOUT_BACKGROUND,
  ];
}

function DISABLE_SWITCH_BORDER_COLORS(theme: ThemeVariant) {
  return [colors[theme].LAYOUT_DISABLED, colors[theme].LAYOUT_BACKGROUND];
}

function SWITCH_COLOR_DATA(theme: ThemeVariant) {
  return {
    disabled: {
      borderColors: DISABLE_SWITCH_BORDER_COLORS(theme),
      backgroundColor: DISABLE_SWITCH_COLORS(theme),
    },
    enabled: {
      borderColors: SWITCH_BORDER_COLORS(theme),
      backgroundColor: SWITCH_COLORS(theme),
    },
  };
}

function getSwitchColors(theme: ThemeVariant, disabled?: boolean) {
  if (disabled) return SWITCH_COLOR_DATA(theme).disabled;
  return SWITCH_COLOR_DATA(theme).enabled;
}

export default {
  getPrimaryContainerColors,
  getSwitchColors,
  BORDER_WIDTH,
  CONTAINER_WIDTH,
  CONTAINER_HEIGHT,
  SWITCH_HEIGHT,
  SWITCH_WIDTH,
};
