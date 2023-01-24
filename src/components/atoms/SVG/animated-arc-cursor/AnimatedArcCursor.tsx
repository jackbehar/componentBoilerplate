import React from 'react';
import {Vector} from 'react-native-redash';
import {G} from 'react-native-svg';
import colors from '../../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../../hook/useAppSelector';
import AnimatedArc from '../AnimatedArc';
import AnimatedArcCursorConsts from './AnimatedArcCursorConsts';

interface Props {
  radius: number;
  stroke: number;
  position: number;
  center: Vector;
}

function AnimatedArcCursor({center, position, radius, stroke}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <G>
      <AnimatedArc
        radius={radius}
        strokeColor={colors[theme].ACCENT_PRIMARY_REGULAR}
        strokeWidth={stroke}
        center={center}
        startDeg={position - AnimatedArcCursorConsts.ANGLE_WIDTH / 2}
        endDeg={position + AnimatedArcCursorConsts.ANGLE_WIDTH / 2}
      />
      <AnimatedArc
        radius={radius}
        strokeColor={colors[theme].ACCENT_PRIMARY_REGULAR}
        strokeWidth={stroke - AnimatedArcCursorConsts.BORDER_WIDTH * 2}
        center={center}
        startDeg={position - AnimatedArcCursorConsts.ANGLE_WIDTH / 2}
        endDeg={position + AnimatedArcCursorConsts.ANGLE_WIDTH / 2}
      />
    </G>
  );
}

export default AnimatedArcCursor;
