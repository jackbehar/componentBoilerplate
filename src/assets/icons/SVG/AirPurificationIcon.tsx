import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function AirPurificationIcon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M20.746 9.316V42.73a1.5 1.5 0 0 0 3 0V9.316a1.5 1.5 0 1 0-3 0ZM28.007 9.316V42.73a1.5 1.5 0 0 0 3 0V9.316a1.5 1.5 0 1 0-3 0Z" />
        <Path d="M15.07 15.126a1.5 1.5 0 0 0 1.5-1.5V6.253c0-2.198.937-3.222 2.948-3.222h12.874c2.012 0 2.948 1.024 2.948 3.222v7.373a1.5 1.5 0 0 0 3 0V6.253c0-3.838-2.279-6.222-5.947-6.222H19.518c-3.669 0-5.948 2.384-5.948 6.222v7.373a1.5 1.5 0 0 0 1.5 1.5ZM36.84 36.88a1.5 1.5 0 0 0-1.5 1.5v7.374c0 2.198-.936 3.222-2.947 3.222H19.518c-2.011 0-2.948-1.024-2.948-3.222V38.38a1.5 1.5 0 0 0-3 0v7.374c0 3.838 2.28 6.222 5.948 6.222h12.875c3.668 0 5.947-2.384 5.947-6.222V38.38a1.5 1.5 0 0 0-1.5-1.5ZM2.24 25.108a2.207 2.207 0 1 0 0 4.415 2.207 2.207 0 0 0 0-4.415ZM9.012 18.867a2.207 2.207 0 1 0-4.414 0 2.207 2.207 0 0 0 4.414 0ZM15.723 24.578a2.207 2.207 0 1 0-4.414 0 2.207 2.207 0 0 0 4.414 0ZM9.542 30.679a2.207 2.207 0 1 0 0 4.413 2.207 2.207 0 0 0 0-4.413ZM51.963 25.808a.51.51 0 0 0-.14-.196l-.026-.02-5.756-4.448a.51.51 0 0 0-.823.405v2.95H36.35a1.5 1.5 0 0 0 0 3h8.867v2.952a.511.511 0 0 0 .823.404l5.756-4.447.025-.02a.509.509 0 0 0 .141-.58Z" />
      </G>
    </Svg>
  );
}

export default AirPurificationIcon;
