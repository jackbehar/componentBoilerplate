import {StopProps} from 'react-native-svg';
import colors, {
  ProjectColorsType,
} from '../../../../assets/colors/tokens/colors';
import {TemperatureInfoState} from '../../../../types/capabilities/TemperatureInfo';
import {ThemeVariant} from '../../../../types/theme';

const LINEAR_GRADIENT_ID = 'temperatureRangeLinearGradient';

function GET_SECOND_ARC_COLORS(
  theme: ThemeVariant,
  state: TemperatureInfoState | undefined,
  isTargetHigherThanCurrent: boolean,
  disabled?: boolean,
): Array<StopProps> {
  if (disabled)
    return [
      {
        stopColor: colors[theme].LAYOUT_DISABLED,
        offset: '0%',
      },
      {
        stopColor: colors[theme].LAYOUT_DISABLED,
        offset: '1000%',
      },
    ];
  if (state === TemperatureInfoState.Cooling)
    return [
      {
        stopColor: colors[theme].SEMANTIC_COLD_REGULAR,
        offset: !isTargetHigherThanCurrent ? '0%' : '100%',
      },
      {
        stopColor: colors[theme].SEMANTIC_COLD_DARK,
        offset: !isTargetHigherThanCurrent ? '100%' : '0%',
      },
    ];
  if (state === TemperatureInfoState.Heating)
    return [
      {
        stopColor: colors[theme].SEMANTIC_WARM_DARK,
        offset: isTargetHigherThanCurrent ? '0%' : '100%',
      },
      {
        stopColor: colors[theme].SEMANTIC_WARM_REGULAR,
        offset: isTargetHigherThanCurrent ? '100%' : '0%',
      },
    ];

  return [
    {
      stopColor: colors[theme].SEMANTIC_NEUTRAL_DARK,
      offset: isTargetHigherThanCurrent ? '0%' : '100%',
    },
    {
      stopColor: colors[theme].SEMANTIC_NEUTRAL_REGULAR,
      offset: isTargetHigherThanCurrent ? '100%' : '0%',
    },
  ];
}

function GET_FIRST_ARC_COLORS(
  isActive: boolean,
  disabled?: boolean,
): ProjectColorsType {
  if (disabled) return 'LAYOUT_DISABLED';
  if (isActive) return 'SEMANTIC_WARM_REGULAR';
  return 'SEMANTIC_NEUTRAL_REGULAR';
}

function GET_THIRD_ARC_COLORS(
  isActive: boolean,
  disabled?: boolean,
): ProjectColorsType {
  if (disabled) return 'LAYOUT_DISABLED';
  if (isActive) return 'SEMANTIC_COLD_REGULAR';
  return 'SEMANTIC_NEUTRAL_REGULAR';
}

function GET_ARCS_COLORS(
  theme: ThemeVariant,
  state: TemperatureInfoState | undefined,
  isTargetHigherThanCurrent: boolean,
  disabled?: boolean,
) {
  return {
    firstArc: GET_FIRST_ARC_COLORS(
      state === TemperatureInfoState.Heating,
      disabled,
    ),
    secondArc: GET_SECOND_ARC_COLORS(
      theme,
      state,
      isTargetHigherThanCurrent,
      disabled,
    ),
    thirdArc: GET_THIRD_ARC_COLORS(
      state === TemperatureInfoState.Cooling,
      disabled,
    ),
  };
}

export default {LINEAR_GRADIENT_ID, GET_ARCS_COLORS};
