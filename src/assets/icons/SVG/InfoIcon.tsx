import React from 'react';
import Svg, {Path, G, SvgProps} from 'react-native-svg';
import {useAppSelector} from '../../../hook/useAppSelector';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';

interface InfoIconProps extends SvgProps {
  fillColor: ProjectColorsType;
}

function InfoIcon({fillColor, ...rest}: InfoIconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M26 2C12.745 2 2 12.745 2 26s10.745 24 24 24 24-10.745 24-24S39.255 2 26 2Zm0 45C14.42 47 5 37.58 5 26S14.42 5 26 5s21 9.42 21 21-9.42 21-21 21Z" />
        <Path d="M23.314 19.472h5.488v20.742h-5.488zM23.314 11.581h5.488v5.078h-5.488z" />
      </G>
    </Svg>
  );
}

export default InfoIcon;
