import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function TemperatureInsideIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="m32.644 32.924.003-24.54a6.644 6.644 0 0 0-6.636-6.637c-3.659 0-6.636 2.966-6.636 6.612l-.003 24.5a10.136 10.136 0 0 0-3.501 7.636c0 5.565 4.527 10.092 10.092 10.092s10.092-4.527 10.092-10.092c0-2.937-1.234-5.655-3.41-7.57Zm-6.681 14.663c-3.91 0-7.092-3.181-7.092-7.092a7.03 7.03 0 0 1 2.891-5.708c.384-.284.61-.731.61-1.208v-2.336h3.015a1.5 1.5 0 1 0 0-3h-3.014v-4.488h3.014a1.5 1.5 0 0 0 0-3h-3.013v-4.488h3.013a1.5 1.5 0 1 0 0-3h-3.012V8.359c0-1.991 1.63-3.612 3.636-3.612s3.636 1.631 3.636 3.636l-.003 25.252c0 .47.22.912.595 1.196a7.044 7.044 0 0 1 2.816 5.664 7.1 7.1 0 0 1-7.092 7.092Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default TemperatureInsideIcon;
