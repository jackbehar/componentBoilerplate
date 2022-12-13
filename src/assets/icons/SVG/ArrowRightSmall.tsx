import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {useAppSelector} from '../../../hook/useAppSelector';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';

interface ArrowRightSmallProps extends SvgProps {
  fillColor: ProjectColorsType;
}

function ArrowRightSmall({fillColor, ...rest}: ArrowRightSmallProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="M20 39.5a1.5 1.5 0 0 1-1.06-2.56L29.878 26l-10.94-10.94a1.5 1.5 0 1 1 2.122-2.12l12 12a1.5 1.5 0 0 1 0 2.12l-12 12c-.293.294-.677.44-1.061.44Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default ArrowRightSmall;
