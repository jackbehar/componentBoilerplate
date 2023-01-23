import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function SeePasswordIcon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M25.887 16.046c-5.493 0-9.963 4.469-9.963 9.962s4.47 9.963 9.963 9.963 9.962-4.47 9.962-9.963-4.47-9.962-9.962-9.962Zm0 16.925c-3.84 0-6.963-3.124-6.963-6.963s3.124-6.962 6.963-6.962 6.962 3.123 6.962 6.962-3.123 6.963-6.962 6.963Z" />
        <Path d="M51.625 25.048C43.179 14.762 34.557 9.546 26 9.546c-8.946 0-17.575 5.225-25.647 15.53a1.5 1.5 0 0 0 0 1.85C8.425 37.228 17.053 42.453 26 42.453c8.557 0 17.179-5.215 25.625-15.502a1.5 1.5 0 0 0 0-1.904ZM26 39.454c-7.715 0-15.296-4.525-22.547-13.454C10.704 17.07 18.285 12.546 26 12.546c7.359 0 14.928 4.525 22.512 13.454C40.928 34.93 33.359 39.454 26 39.454Z" />
      </G>
    </Svg>
  );
}

export default SeePasswordIcon;
