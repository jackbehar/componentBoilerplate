import React from 'react';
import {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {polar2Canvas, Vector} from 'react-native-redash';
import colors, {ProjectColorsType} from '../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {degToRad} from '../../../shared/utility/svgUtils';
import AnimatedPath from '../Animated/AnimatedPath';

export interface AnimatedArcProps {
  radius: number;
  center: Vector;
  strokeWidth: number;
  strokeColor: ProjectColorsType | string;
  startDeg: number;
  endDeg: number;
}

function AnimatedArc({
  center,
  radius,
  strokeWidth,
  strokeColor,
  startDeg,
  endDeg,
}: AnimatedArcProps) {
  const theme = useAppSelector(state => state.theme.theme);

  const start = useSharedValue(degToRad(startDeg));
  const end = useSharedValue(degToRad(endDeg));

  const startPos = useDerivedValue(
    () => polar2Canvas({theta: start.value, radius}, center),
    [radius, center],
  );
  const endPos = useDerivedValue(
    () => polar2Canvas({theta: end.value, radius}, center),
    [radius, center],
  );

  React.useEffect(() => {
    start.value = withTiming(degToRad(startDeg));
  }, [startDeg, start]);

  React.useEffect(() => {
    end.value = withTiming(degToRad(endDeg));
  }, [endDeg, end]);

  const animatedProps = useAnimatedProps(() => {
    return {
      d: `M ${startPos.value.x} ${
        startPos.value.y
      } A ${radius} ${radius} 0 ${Number(
        end.value - start.value > Math.PI,
      )} 0 ${endPos.value.x} ${endPos.value.y}`,
    };
  }, [radius]);

  return (
    <AnimatedPath
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      animatedProps={animatedProps}
      stroke={colors[theme][strokeColor] || strokeColor}
    />
  );
}

export default AnimatedArc;
