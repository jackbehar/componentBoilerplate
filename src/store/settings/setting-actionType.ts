import * as ActionsType from './actions-type-constants';

// Convert unit to celsius
export const CONVERT_TO_CELSIUS = (unit: number) => ({
  type: ActionsType.CONVERT_TO_CELSIUS,
  payload: {
    unit,
  },
});

// Convert unit to fahreneit
export const CONVERT_TO_FAHRENHEIT = (unit: string) => ({
  type: ActionsType.CONVERT_TO_FAHRENHEIT,
  payload: {
    unit,
  },
});

// Change the measurement
export const CHANGE_MEASUREMENT = (measurement: any) => ({
  type: ActionsType.CHANGE_MEASUREMENT,
  payload: {
    measurement,
  },
});

// Change the langauge
export const CHANGE_LANGUAGE = (lang: string) => ({
  type: ActionsType.CHANGE_LANGUAGE,
  payload: {
    lang,
  },
});

// Update is rendered
export const IS_RENDERED = (isRendered: boolean) => ({
  type: ActionsType.IS_RENDERED,
  payload: {
    isRendered,
  },
});
// To store paried mac address
export const STORE_PAIRED_MAC_ADDRESS = (pairedMacAdress: boolean) => ({
  type: ActionsType.PAIRED_MAC_ADDRESS,
  payload: {
    pairedMacAdress,
  },
});
export const CHANGE_VIEW = (options: string) => ({
  type: ActionsType.CHANGE_VIEW,
  payload: {
    options,
  },
});
export const IS_OVERLAY_SHOWN = (isOverlayShown: boolean) => ({
  type: ActionsType.IS_OVERLAY_SHOWN,
  payload: {
    isOverlayShown,
  },
});

// Actions for view filter display
export const CHANGE_DISPLAY = (display: string) => ({
  type: ActionsType.CHANGE_DISPLAY,
  payload: {
    display,
  },
});

export const IS_NOTIFICATION = (isNotification: boolean) => ({
  type: ActionsType.IS_NOTIFICATION,
  payload: {
    isNotification,
  },
});
