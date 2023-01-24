import {StopProps} from 'react-native-svg';
import colors from '../../../../assets/colors/tokens/colors';
import {TemperatureInfoState} from '../../../../types/capabilities/TemperatureInfo';
import {ThemeVariant} from '../../../../types/theme';

const LINEAR_GRADIENT_ID = 'temperatureRangeLinearGradient';

function GET_ARC_COLORS(
  theme: ThemeVariant,
  state: TemperatureInfoState,
  isTargetHigherThanCurrent: boolean,
): Array<StopProps> {
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
      stopColor: colors[theme].SEMANTIC_NEUTRAL_REGULAR,
      offset: '0%',
    },
    {
      stopColor: colors[theme].SEMANTIC_NEUTRAL_REGULAR,
      offset: '100%',
    },
  ];
}

export default {LINEAR_GRADIENT_ID, GET_ARC_COLORS};
