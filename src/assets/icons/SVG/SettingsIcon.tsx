import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function SettingsIcon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" width={52} height={52} {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M44.996 2.006H7.004c-2.749 0-4.998 2.25-4.998 4.999v37.99c0 2.75 2.25 4.999 4.998 4.999h37.992a5.013 5.013 0 0 0 4.998-4.999V7.005c0-2.75-2.25-5-4.998-5Zm1.998 42.99c0 1.083-.915 1.998-1.998 1.998H7.004c-1.083 0-1.998-.915-1.998-1.999V7.005c0-1.084.915-2 1.998-2h37.992c1.083 0 1.998.916 1.998 2v37.99Z" />
        <Path d="M27.489 13.886v-4.95a1.5 1.5 0 0 0-3 0v4.95a3.748 3.748 0 0 0-2.25 3.433c0 1.537.926 2.855 2.25 3.434v22.254a1.5 1.5 0 1 0 3 0V20.753a3.748 3.748 0 0 0 2.25-3.434 3.748 3.748 0 0 0-2.25-3.433ZM14.283 22.552V8.964a1.5 1.5 0 0 0-3 0v13.588c-1.323.58-2.25 1.897-2.25 3.434s.927 2.854 2.25 3.433v13.617a1.5 1.5 0 1 0 3 0V29.419c1.323-.579 2.25-1.896 2.25-3.433s-.927-2.855-2.25-3.434ZM40.717 32.39V8.964a1.5 1.5 0 0 0-3 0V32.39a3.747 3.747 0 0 0-2.25 3.434c0 1.536.927 2.854 2.25 3.433v3.779a1.5 1.5 0 1 0 3 0v-3.78a3.747 3.747 0 0 0 2.25-3.432 3.747 3.747 0 0 0-2.25-3.434Z" />
      </G>
    </Svg>
  );
}

export default SettingsIcon;
