import translations from '../../localization/config/translationHelper';
import {WATER_HEATER_MODES} from './WaterHeater';

const WATER_HEATER_MODES_OPTIONS = [
  {
    label: translations.fullClimate.waterHeater.modes.eco,
    value: WATER_HEATER_MODES.ECO,
  },
  {
    label: translations.fullClimate.waterHeater.modes.normal,
    value: WATER_HEATER_MODES.NORMAL,
  },
  {
    label: translations.fullClimate.waterHeater.modes.boost,
    value: WATER_HEATER_MODES.BOOST,
  },
];

export {WATER_HEATER_MODES_OPTIONS};
