import React from 'react';
import Svg, {Circle} from 'react-native-svg';
import colors, {
  ProjectColorsType,
} from '../../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../../hook/useAppSelector';
import AnimatedArc from '../../../atoms/SVG/AnimatedArc';
import {getBigRangeConsts} from '../RangeConsts';
import RangeUtils from '../RangeUtils';
import TemperatureRangeStyles from '../TemperatureSlider/TemperatureSliderStyles';

interface Props {
  RangeConsts: ReturnType<typeof getBigRangeConsts>;
  color: ProjectColorsType;
  disabled: boolean;
}

function AirQualityRangeBase({RangeConsts, color, disabled}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg
      width={RangeConsts.WIDTH}
      height={RangeConsts.HEIGHT}
      style={TemperatureRangeStyles.styles.container}>
      <Circle
        fill={colors[theme].LAYOUT_SURFACE}
        cx={RangeConsts.WIDTH / 2}
        cy={RangeConsts.HEIGHT / 2}
        r={RangeConsts.RADIUS}
      />
      <AnimatedArc
        radius={RangeConsts.RADIUS}
        strokeColor={disabled ? 'LAYOUT_DISABLED' : color}
        strokeWidth={RangeConsts.ACTIVE_STROKE}
        center={RangeConsts.CENTER}
        startDeg={RangeUtils.calculateArcRangeOffset(0)}
        endDeg={RangeUtils.calculateArcRangeOffset(RangeConsts.TOTAL_DEG)}
      />
    </Svg>
  );
}

export default AirQualityRangeBase;
