import React from 'react';
import {Circle, Svg} from 'react-native-svg';
import colors from '../../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../../hook/useAppSelector';
import {useIsCooling} from '../../../../hook/useIsCooling';
import {TemperatureInfoState} from '../../../../types/capabilities/TemperatureInfo';
import AnimatedArcCursor from '../../../atoms/SVG/animated-arc-cursor/AnimatedArcCursor';
import AnimatedArcCursorConsts from '../../../atoms/SVG/animated-arc-cursor/AnimatedArcCursorConsts';
import AnimatedArc from '../../../atoms/SVG/AnimatedArc';
import AnimatedArcWithGradient from '../../../atoms/SVG/AnimatedArcWithGradient';
import {getBigRangeConsts} from '../RangeConsts';
import RangeUtils from '../RangeUtils';
import TemperatureRangeConsts from './TemperatureSliderConsts';
import TemperatureRangeStyles from './TemperatureSliderStyles';

export interface TemperatureSliderProps {
  minTemperature: number;
  maxTemperature: number;
  currentTemperature: number | undefined;

  ddmCurrentTemperature: string;
  targetTemperature: number | undefined;
  ddmTargetTemperature: string;
  active: boolean;
  RangeConsts: ReturnType<typeof getBigRangeConsts>;
  disabled?: boolean;
  infoState?: TemperatureInfoState;
}
function TemperatureSlider({
  active,
  currentTemperature,
  ddmCurrentTemperature,
  maxTemperature,
  ddmTargetTemperature,
  minTemperature,
  targetTemperature,
  infoState,
  RangeConsts,
  disabled,
}: TemperatureSliderProps) {
  const theme = useAppSelector(state => state.theme.theme);

  const isCooling = useIsCooling(targetTemperature, currentTemperature);

  const isTargetHigherThanCurrent = React.useMemo(
    () => (targetTemperature || 0) > (currentTemperature || 0),
    [targetTemperature],
  );

  const stateIfThereIsNoInput = React.useMemo(() => {
    if (!targetTemperature || !currentTemperature || !active)
      return TemperatureInfoState.Ventilating;
    if (infoState !== TemperatureInfoState.NoInput) return infoState;
    if (isCooling) return TemperatureInfoState.Cooling;
    return TemperatureInfoState.Heating;
  }, [isCooling, infoState, targetTemperature, currentTemperature, active]);

  const arcsColors = React.useMemo(() => {
    return TemperatureRangeConsts.GET_ARCS_COLORS(
      theme,
      stateIfThereIsNoInput,
      isTargetHigherThanCurrent,
      disabled,
    );
  }, [theme, stateIfThereIsNoInput, isTargetHigherThanCurrent, disabled]);

  const degStep = React.useMemo(
    () => RangeConsts.TOTAL_DEG / (maxTemperature - minTemperature),
    [maxTemperature, minTemperature],
  );

  const activeRange = React.useMemo(() => {
    if (!targetTemperature || !currentTemperature || !active || disabled)
      return {start: 0, end: 0};
    return {
      start:
        degStep *
        ((currentTemperature > targetTemperature
          ? targetTemperature
          : currentTemperature) -
          minTemperature),
      end:
        degStep *
        ((currentTemperature <= targetTemperature
          ? targetTemperature
          : currentTemperature) -
          minTemperature),
    };
  }, [
    degStep,
    currentTemperature,
    targetTemperature,
    minTemperature,
    active,
    disabled,
  ]);

  const isSameTemperature = React.useMemo(
    () => targetTemperature === currentTemperature,
    [currentTemperature, targetTemperature],
  );

  const cursorPosition = React.useMemo(() => {
    const cursorOffset =
      isSameTemperature || !targetTemperature || !currentTemperature
        ? 0
        : AnimatedArcCursorConsts.ANGLE_WIDTH / 2;

    if ((targetTemperature || 0) > (currentTemperature || 0))
      return activeRange.end - cursorOffset;

    return activeRange.start + cursorOffset;
  }, [
    currentTemperature,
    targetTemperature,
    isSameTemperature,
    activeRange.end,
    activeRange.start,
  ]);

  return (
    <Svg
      width={RangeConsts.WIDTH}
      height={RangeConsts.HEIGHT}
      style={TemperatureRangeStyles.styles.container}>
      <Circle
        fill={colors[theme].LAYOUT_SURFACE}
        cx={RangeConsts.CENTER.x}
        cy={RangeConsts.CENTER.y}
        r={RangeConsts.RADIUS}
      />
      <AnimatedArc
        radius={RangeConsts.RADIUS}
        strokeColor={arcsColors.firstArc}
        strokeWidth={RangeConsts.DISABLED_STROKE}
        center={RangeConsts.CENTER}
        startDeg={RangeUtils.calculateArcRangeOffset(0)}
        endDeg={RangeUtils.calculateArcRangeOffset(
          activeRange.start -
            (targetTemperature === minTemperature ||
            !targetTemperature ||
            !currentTemperature ||
            !active ||
            disabled
              ? 0
              : RangeConsts.DEGREES_GAP) -
            (isSameTemperature ? AnimatedArcCursorConsts.ANGLE_WIDTH / 2 : 0),
        )}
      />
      <AnimatedArc
        radius={RangeConsts.RADIUS}
        strokeColor={arcsColors.thirdArc}
        strokeWidth={RangeConsts.DISABLED_STROKE}
        center={RangeConsts.CENTER}
        startDeg={RangeUtils.calculateArcRangeOffset(
          activeRange.end +
            (targetTemperature === maxTemperature ||
            !targetTemperature ||
            !currentTemperature ||
            !active ||
            disabled
              ? 0
              : RangeConsts.DEGREES_GAP) +
            (isSameTemperature ? AnimatedArcCursorConsts.ANGLE_WIDTH / 2 : 0),
        )}
        endDeg={RangeUtils.calculateArcRangeOffset(RangeConsts.TOTAL_DEG)}
      />
      {active && !disabled ? (
        <AnimatedArcWithGradient
          strokeWidth={RangeConsts.ACTIVE_STROKE}
          center={RangeConsts.CENTER}
          radius={RangeConsts.RADIUS}
          id={TemperatureRangeConsts.LINEAR_GRADIENT_ID}
          endDeg={RangeUtils.calculateArcRangeOffset(activeRange.end)}
          startDeg={RangeUtils.calculateArcRangeOffset(activeRange.start)}
          linearGradientColors={arcsColors.secondArc}
        />
      ) : null}
      {targetTemperature && currentTemperature && active && !disabled ? (
        <AnimatedArcCursor
          center={RangeConsts.CENTER}
          position={RangeUtils.calculateArcRangeOffset(cursorPosition)}
          radius={RangeConsts.RADIUS}
          stroke={RangeConsts.ACTIVE_STROKE}
        />
      ) : null}
    </Svg>
  );
}

export default TemperatureSlider;
