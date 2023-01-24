import React from 'react';
import {Dimensions, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import AnimatedArc from '../../../atoms/SVG/AnimatedArc';
import colors from '../../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../../hook/useAppSelector';
import {getBigRangeConsts} from '../RangeConsts';
import RangeFeedbackConsts from './RangeFeedbackConsts';
import SimpleRangeCircleStyles from './RangeFeedbackStyles';
import RangeUtils from '../RangeUtils';
import {TemperatureInfoState} from '../../../../types/capabilities/TemperatureInfo';
import LocalText from '../../../atoms/LocalText/LocalText';
import {useRangeFeedback} from './useRangeFeedback';
import AnimatedArcWithGradient from '../../../atoms/SVG/AnimatedArcWithGradient';
import Dash from '../../../atoms/Dash/Dash';

interface Props {
  minTemperature: number;
  currentTemperature: number | undefined;
  targetTemperature: number;
  infoState?: TemperatureInfoState;
  subtitle?: string;
  TopElement?: JSX.Element;
}

function RangeFeedback({
  minTemperature,
  currentTemperature,
  targetTemperature,
  infoState = TemperatureInfoState.NoInput,
  subtitle = '',
  TopElement,
}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  const RangeConsts = React.useMemo(() => getBigRangeConsts(), []);

  const {arcsColors, activeRange} = useRangeFeedback({
    targetTemperature,
    currentTemperature,
    minTemperature,
    infoState,
  });

  const INFO_SIZE =
    RangeConsts.HEIGHT -
    RangeConsts.PADDING_VERTICAL * 2 -
    RangeConsts.ACTIVE_STROKE;

  const infoStyle = React.useMemo(
    () => ({width: INFO_SIZE, height: INFO_SIZE, borderRadius: INFO_SIZE / 2}),
    [],
  );

  return (
    <View>
      <Svg
        width={RangeConsts.WIDTH}
        height={RangeConsts.HEIGHT}
        style={SimpleRangeCircleStyles.styles.container}>
        <Circle
          fill={colors[theme].LAYOUT_SURFACE}
          cx={RangeConsts.WIDTH / 2}
          cy={RangeConsts.HEIGHT / 2}
          r={RangeConsts.RADIUS}
        />
        <AnimatedArc
          radius={RangeConsts.RADIUS}
          strokeColor="SEMANTIC_NEUTRAL_REGULAR"
          strokeWidth={RangeConsts.DISABLED_STROKE}
          center={RangeConsts.CENTER}
          startDeg={RangeUtils.calculateArcRangeOffset(
            activeRange.end +
              (currentTemperature === targetTemperature ||
              currentTemperature === minTemperature ||
              !currentTemperature
                ? 0
                : RangeConsts.DEGREES_GAP),
          )}
          endDeg={RangeUtils.calculateArcRangeOffset(RangeConsts.TOTAL_DEG)}
        />
        {currentTemperature !== minTemperature && currentTemperature ? (
          <AnimatedArcWithGradient
            strokeWidth={RangeConsts.ACTIVE_STROKE}
            center={RangeConsts.CENTER}
            radius={RangeConsts.RADIUS}
            id={RangeFeedbackConsts.LINEAR_GRADIENT_ID}
            endDeg={RangeUtils.calculateArcRangeOffset(activeRange.end)}
            startDeg={RangeConsts.START_OFFSET}
            linearGradientColors={arcsColors}
          />
        ) : null}
      </Svg>

      <View style={SimpleRangeCircleStyles.styles.infoContainer}>
        <View style={[infoStyle, SimpleRangeCircleStyles.styles.wrapper]}>
          <View style={SimpleRangeCircleStyles.styles.contentContainer}>
            {TopElement ? TopElement : null}
            {currentTemperature ? (
              <LocalText color="TEXT_REGULAR" size="H1">
                {currentTemperature}
              </LocalText>
            ) : (
              <Dash style={SimpleRangeCircleStyles.styles.dash} />
            )}
            <LocalText color="TEXT_NEUTRAL">{subtitle}</LocalText>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RangeFeedback;
