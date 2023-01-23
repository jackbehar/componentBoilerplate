import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function ArrowDownSmall({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="M26 33.5c-.384 0-.768-.146-1.06-.44l-12-12a1.5 1.5 0 1 1 2.12-2.12L26 29.878l10.94-10.94a1.5 1.5 0 0 1 2.12 2.122l-12 12c-.292.293-.676.439-1.06.439Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default ArrowDownSmall;
