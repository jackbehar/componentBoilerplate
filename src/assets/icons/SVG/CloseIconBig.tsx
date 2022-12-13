import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface CloseIconBigProps extends SvgProps {
  fillColor: ProjectColorsType;
}

function CloseIconBig({fillColor, ...rest}: CloseIconBigProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="M28.122 26 48.5 5.62a1.5 1.5 0 0 0-2.122-2.12L26 23.878 5.62 3.499A1.5 1.5 0 1 0 3.5 5.62L23.878 26 3.499 46.38a1.5 1.5 0 0 0 2.122 2.12L26 28.122l20.38 20.38a1.497 1.497 0 0 0 2.122 0 1.5 1.5 0 0 0-.001-2.122L28.121 26Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default CloseIconBig;
