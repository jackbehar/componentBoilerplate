import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function DometicIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" width={52} height={52} {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M39.53 25.87 30.66 17l-2.79 2.79a1 1 0 0 0 0 1.4l4.69 4.68-5.39 5.39 2.79 2.79a1 1 0 0 0 1.39 0Z" />
        <Path d="M28.06 26.57a1 1 0 0 0 0-1.39L19.88 17 11 25.87l2.79 2.8a1 1 0 0 0 1.4 0l4.69-4.69 5.39 5.39Z" />
      </G>
    </Svg>
  );
}

export default DometicIcon;
