import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function BluetoothIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path fill="none" d="M0 .004h47.991v47.991H0z" />
        <Path d="M32.523 17.147 22.32 6.992V20.64l-5.213-5.202-1.63 1.63 6.842 6.819-6.832 6.658 1.614 1.646 5.23-5.099v13.916l10.176-10.242-6.903-6.874 6.918-6.745ZM24.626 35.43v-9.253l4.62 4.607-4.62 4.646Zm4.613-18.298-4.613 4.492V12.54l4.613 4.59Z" />
      </G>
    </Svg>
  );
}

export default BluetoothIcon;
