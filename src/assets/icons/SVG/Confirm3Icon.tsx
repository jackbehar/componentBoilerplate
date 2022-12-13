import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import { IconProps } from '../../../types/icons';

function Confirm3Icon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path
        fill={colors[theme][fillColor]}
        d="M40.21482,16.33289c-.58545-.58545-1.53564-.58545-2.12109,0l-16.15234,16.15186-8.03467-8.03467c-.58594-.58594-1.53613-.58594-2.12158,0-.58594,.58545-.58594,1.53564,0,2.12109l9.0957,9.0957c.29297,.29297,.67676,.43945,1.06055,.43945,.38428,0,.76807-.14648,1.06104-.43945l17.2124-17.2124c.58594-.58594,.58594-1.53564,0-2.12158Z"
      />
    </Svg>
  );
}

export default Confirm3Icon;
