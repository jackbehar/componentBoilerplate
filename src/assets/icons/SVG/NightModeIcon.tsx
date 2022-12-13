import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function NightModeIcon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="M49.215 34.039a1.499 1.499 0 0 0-1.628-.385c-2.529.95-5.183 1.452-7.675 1.452-11.933 0-21.641-9.708-21.641-21.64 0-3.29.68-6.397 2.02-9.232a1.5 1.5 0 0 0-1.9-2.039C8.915 5.89 2.549 15.144 2.549 25.22c0 13.588 11.054 24.642 24.641 24.642 9.673 0 18.212-5.43 22.284-14.17a1.5 1.5 0 0 0-.259-1.653ZM27.19 46.862c-11.933 0-21.641-9.708-21.641-21.642 0-7.634 4.167-14.733 10.661-18.626a25.009 25.009 0 0 0-.94 6.872c0 13.587 11.054 24.64 24.642 24.64 1.677 0 3.371-.186 5.065-.556-3.974 5.819-10.515 9.312-17.787 9.312Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default NightModeIcon;
