import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function WifiOffIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M26.056 34.662a5.775 5.775 0 1 0 0 11.55 5.775 5.775 0 0 0 0-11.55Z" />
        <Path d="m46.149 10.378 5.488-4.941a1.5 1.5 0 1 0-2.008-2.23l-6.158 5.545a35.95 35.95 0 0 0-17.415-4.464c-9.686 0-18.784 3.78-25.619 10.646a1.5 1.5 0 1 0 2.126 2.117c6.268-6.296 14.61-9.763 23.493-9.763a32.994 32.994 0 0 1 15.041 3.602l-5.804 5.226a25.995 25.995 0 0 0-9.237-1.69c-6.979 0-13.532 2.727-18.451 7.678a1.5 1.5 0 0 0 2.128 2.115c4.352-4.38 10.15-6.793 16.323-6.793 2.299 0 4.548.336 6.69.984l-6.404 5.766c-.096-.002-.19-.014-.286-.014a16.159 16.159 0 0 0-11.568 4.83 1.5 1.5 0 1 0 2.132 2.11 13.186 13.186 0 0 1 5.85-3.44L8.075 40.623a1.5 1.5 0 0 0 2.007 2.23l17.347-15.62c3 .308 5.79 1.616 7.963 3.767a1.5 1.5 0 0 0 2.11-2.132 16.175 16.175 0 0 0-7.277-4.152l5.64-5.078a22.988 22.988 0 0 1 6.41 4.476 1.5 1.5 0 0 0 2.114-2.129 26.094 26.094 0 0 0-6.11-4.521l5.56-5.005c2 1.277 3.882 2.77 5.604 4.485a1.5 1.5 0 0 0 2.116-2.126 36.522 36.522 0 0 0-5.409-4.44Z" />
      </G>
    </Svg>
  );
}

export default WifiOffIcon;
