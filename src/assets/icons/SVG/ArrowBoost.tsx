import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function ArrowBoost({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="m44.877 18.594-14.968-16.8C28.88.636 27.491 0 26 0c-1.49 0-2.879.637-3.91 1.793l-14.967 16.8c-1.563 1.756-1.29 3.15-.987 3.824.303.674 1.16 1.806 3.512 1.806l6.553-.003.008 5.53a1.5 1.5 0 0 0 1.5 1.498h16.773a1.5 1.5 0 0 0 1.5-1.5l.001-5.554 6.37.029c2.35 0 3.209-1.132 3.51-1.806.304-.675.577-2.068-.986-3.823Zm-2.517 2.629-7.87-.035a1.45 1.45 0 0 0-1.065.437 1.499 1.499 0 0 0-.442 1.062l-.001 5.56H19.207l-.008-5.53a1.5 1.5 0 0 0-1.5-1.497l-8.052.003c-.32 0-.54-.037-.68-.076.064-.13.184-.32.396-.558L24.33 3.79a2.207 2.207 0 0 1 3.339 0l14.967 16.8c.212.239.332.429.395.558a2.546 2.546 0 0 1-.672.076ZM34.386 35.07H17.614a1.5 1.5 0 1 0 0 3h16.772a1.5 1.5 0 0 0 0-3ZM34.386 41.894H17.614a1.5 1.5 0 0 0 0 3h16.772a1.5 1.5 0 0 0 0-3ZM34.386 48.717H17.614a1.5 1.5 0 0 0 0 3h16.772a1.5 1.5 0 0 0 0-3Z" />
      </G>
    </Svg>
  );
}

export default ArrowBoost;
