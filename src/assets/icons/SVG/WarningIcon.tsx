import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function WarningIcon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M24.018 37.141h3.842v3.842h-3.842zM23.853 25.643l.999 10.172h2.173l.985-10.172V20.94h-4.157v4.703z" />
        <Path d="M49.167 41.808 30.048 8.692C29.052 6.967 27.577 5.978 26 5.978s-3.052.99-4.048 2.714L2.832 41.808c-.996 1.725-1.115 3.497-.326 4.863S4.889 48.82 6.88 48.82h38.24c1.991 0 3.586-.783 4.374-2.15s.67-3.137-.327-4.862Zm-2.271 3.363c-.234.406-.898.649-1.776.649H6.88c-.878 0-1.542-.243-1.776-.65s-.112-1.102.326-1.862l19.12-33.116c.439-.76.98-1.214 1.45-1.214s1.011.454 1.45 1.214l19.12 33.116c.438.76.56 1.457.326 1.863Z" />
      </G>
    </Svg>
  );
}

export default WarningIcon;
