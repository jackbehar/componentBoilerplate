import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import {useAppSelector} from '../../../hook/useAppSelector';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function WifiIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M26.056 34.662a5.775 5.775 0 1 0 0 11.55 5.775 5.775 0 0 0 0-11.55ZM51.558 14.819C44.737 8.028 35.68 4.288 26.056 4.288c-9.686 0-18.784 3.78-25.619 10.646a1.5 1.5 0 1 0 2.126 2.117c6.268-6.296 14.61-9.763 23.493-9.763 8.825 0 17.13 3.43 23.386 9.657a1.5 1.5 0 0 0 2.116-2.126ZM26.056 24.162a16.159 16.159 0 0 0-11.568 4.83 1.5 1.5 0 1 0 2.132 2.11 13.18 13.18 0 0 1 9.436-3.94c3.518 0 6.833 1.364 9.335 3.84a1.5 1.5 0 0 0 2.11-2.133 16.175 16.175 0 0 0-11.445-4.707Z" />
        <Path d="M26.056 14.426c-6.979 0-13.532 2.727-18.452 7.678a1.5 1.5 0 0 0 2.129 2.115c4.352-4.38 10.15-6.793 16.323-6.793a22.865 22.865 0 0 1 16.218 6.689 1.5 1.5 0 0 0 2.114-2.129 25.846 25.846 0 0 0-18.332-7.56Z" />
      </G>
    </Svg>
  );
}

export default WifiIcon;
