import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function MenuIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M48.936 24.5H3.064a1.5 1.5 0 0 0 0 3h45.872a1.5 1.5 0 1 0 0-3ZM3.064 14.5h45.872a1.5 1.5 0 1 0 0-3H3.064a1.5 1.5 0 0 0 0 3ZM48.936 37.5H3.064a1.5 1.5 0 0 0 0 3h45.872a1.5 1.5 0 1 0 0-3Z" />
      </G>
    </Svg>
  );
}

export default MenuIcon;
