// need RNLocalize here for initialization of language after the app is installed
import {TemperatureUnit} from '../../shared/utility/temperature';
import * as ActionsType from './actions-type-constants';

// Get the localisation based on the langauge code
const getDeviceLang = 'en';

// Declare the intialise state
const initialState = {
  unit: 0,
  measurement: 0,
  lang: getDeviceLang,
  isRendered: false,
  pairedMacAdress: [],
  options: 'Grid',
  isOverlayShown: false,
  firmwareUpdated: false,
  display: 'Connected',
};

/* Update the store according to the user seletion*/
const settingReducer = (
  state = initialState,
  action: {
    type: any;
    payload: {
      unit: TemperatureUnit;
      measurement: any;
      lang: any;
      options: any;
      isRendered: any;
      isOverlayShown: boolean;
      display: string;
    };
  },
) => {
  switch (action.type) {
    //updates unit (celcius) in payload
    case ActionsType.CONVERT_TO_CELSIUS:
    //updates unit (Fahrenheit) in payload

    case ActionsType.CONVERT_TO_FAHRENHEIT:
      return {
        ...state,
        unit: action.payload.unit,
      };
    //updates language in payload
    case ActionsType.CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.payload.lang,
      };
    //updates unit in payload
    case ActionsType.CHANGE_MEASUREMENT:
      return {
        ...state,
        measurement: action.payload.measurement,
        unit: action.payload.measurement,
      };
    //updates isRendered in payload
    case ActionsType.IS_RENDERED:
      return {
        ...state,
        isRendered: action.payload.isRendered,
      };
    //updates pairedMacAdress in payload
    case ActionsType.PAIRED_MAC_ADDRESS:
      return {
        ...state,
        pairedMacAdress: action.payload.pairedMacAdress,
      };
    case ActionsType.CHANGE_VIEW:
      return {
        ...state,
        options: action.payload.options,
      };
    case ActionsType.IS_OVERLAY_SHOWN:
      return {
        ...state,
        isOverlayShown: action.payload.isOverlayShown,
      };
    //updates firmwareUpdated in payload
    case 'FIRMEWARE_UPDATED':
      return {
        ...state,
        firmwareUpdated: action.payload.firmwareUpdated,
      };
    // Update the view display option
    case ActionsType.CHANGE_DISPLAY:
      return {
        ...state,
        display: action.payload.display,
      };
    // Return default state
    default:
      return state;
  }
};
export default settingReducer;
