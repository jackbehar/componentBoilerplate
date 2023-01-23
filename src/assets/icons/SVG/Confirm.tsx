import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import { IconProps } from '../../../types/icons';

function Confirm({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path
        d="M38.09372,16.33289l-16.15234,16.15186-8.03467-8.03467c-.58594-.58594-1.53613-.58594-2.12158,0-.58594,.58545-.58594,1.53564,0,2.12109l9.0957,9.0957c.29297,.29297,.67676,.43945,1.06055,.43945,.38428,0,.76807-.14648,1.06104-.43945l17.2124-17.2124c.58594-.58594,.58594-1.53564,0-2.12158-.58545-.58545-1.53564-.58545-2.12109,0Z"
        fill={colors[theme][fillColor]}
      />
      <Path
        d="M25.99997,1.99988C12.74509,1.99988,1.99997,12.745,1.99997,25.99988s10.74512,24,24,24,24-10.74512,24-24S39.25485,1.99988,25.99997,1.99988Zm0,45c-11.57959,0-21-9.42041-21-21S14.42038,4.99988,25.99997,4.99988s21,9.42041,21,21-9.42041,21-21,21Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default Confirm;
